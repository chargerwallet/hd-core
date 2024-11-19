import semver from 'semver';
import { ERRORS, HardwareError, HardwareErrorCode, serializeError } from '@chargerwallet/hd-shared';

import { get } from 'lodash';
import { serializedPath } from '../helpers/pathUtils';
import { BaseMethod } from '../BaseMethod';
import { validateParams } from '../helpers/paramsValidator';
import { CoreApi } from '../../types';

import type {
  AllNetworkAddress,
  AllNetworkAddressParams,
  CommonResponseParams,
  INetwork,
} from '../../types/api/allNetworkGetAddress';
import { findMethod } from '../utils';
import { createUiMessage, IFRAME } from '../../events';
import { getDeviceFirmwareVersion, getMethodVersionRange } from '../../utils';
import { Device } from '../../device/Device';
import { PROTO } from '../../constants';
import { UI_REQUEST } from '../../constants/ui-request';

const Mainnet = 'mainnet';

type NetworkConfig = {
  methodName: keyof CoreApi;
  getParams?: (baseParams: AllNetworkAddressParams, chainName?: string, methodName?: string) => any;
  dependOnMethodName?: (keyof CoreApi)[];
};

type INetworkReal = Exclude<INetwork, 'tbtc' | 'bch' | 'doge' | 'ltc' | 'neurai'>;

type NetworkConfigMap = {
  [K in INetworkReal]: NetworkConfig;
};

const networkAliases: {
  [key: string]: { name: INetworkReal; coin: string };
} = {
  tbtc: { name: 'btc', coin: 'Testnet' },
  bch: { name: 'btc', coin: 'Bcash' },
  doge: { name: 'btc', coin: 'Dogecoin' },
  ltc: { name: 'btc', coin: 'Litecoin' },
  neurai: { name: 'btc', coin: 'Neurai' },
};

const networkConfigMap: NetworkConfigMap = {
  btc: {
    methodName: 'btcGetPublicKey',
    getParams: (baseParams: AllNetworkAddressParams, chainName?: string) => ({
      coin: chainName,
      ...baseParams,
    }),
  },
  evm: {
    methodName: 'evmGetAddress',
    getParams: (baseParams: AllNetworkAddressParams, chainName?: string) => {
      const { path, showOnChargerWallet } = baseParams;
      let chainId;
      if (chainName) {
        chainId = parseInt(chainName);
      }
      return {
        chainId,
        path,
        showOnChargerWallet,
      };
    },
  },
  sol: {
    methodName: 'solGetAddress',
  },
  algo: {
    methodName: 'algoGetAddress',
  },
  near: {
    methodName: 'nearGetAddress',
  },
  stc: {
    methodName: 'starcoinGetAddress',
  },
  cfx: {
    methodName: 'confluxGetAddress',
    getParams: (baseParams: AllNetworkAddressParams, chainName?: string) => {
      const { path, showOnChargerWallet } = baseParams;
      return {
        chainId: parseInt(chainName ?? '1029'),
        path,
        showOnChargerWallet,
      };
    },
  },
  tron: {
    methodName: 'tronGetAddress',
  },
  aptos: {
    methodName: 'aptosGetAddress',
  },
  xrp: {
    methodName: 'xrpGetAddress',
  },
  cosmos: {
    methodName: 'cosmosGetPublicKey',
    getParams: (baseParams: AllNetworkAddressParams) => {
      const { path, prefix, showOnChargerWallet } = baseParams;
      return {
        hrp: prefix,
        path,
        showOnChargerWallet,
      };
    },
  },
  ada: {
    methodName: 'cardanoGetAddress',
    getParams: (baseParams: AllNetworkAddressParams, chainName?: string) => {
      const { path, showOnChargerWallet } = baseParams;

      const addressPath =
        typeof path === 'string' ? `${path}/0/0` : serializedPath([...path, 0, 0]);
      const stakingPath =
        typeof path === 'string' ? `${path}/2/0` : serializedPath([...path, 2, 0]);

      let networkId = 1;
      if (chainName) {
        networkId = chainName === Mainnet ? 1 : 0;
      }

      return {
        addressParameters: {
          addressType: PROTO.CardanoAddressType.BASE,
          path: addressPath,
          stakingPath,
        },
        protocolMagic: 764824073,
        networkId,
        derivationType: PROTO.CardanoDerivationType.ICARUS,
        showOnChargerWallet,
        address: '',
        isCheck: false,
      };
    },
  },
  sui: {
    methodName: 'suiGetAddress',
  },
  fil: {
    methodName: 'filecoinGetAddress',
    getParams: (baseParams: AllNetworkAddressParams, chainName?: string) => {
      const { path, showOnChargerWallet } = baseParams;
      let isTestnet = false;
      if (chainName) {
        isTestnet = chainName !== Mainnet;
      }
      return {
        isTestnet,
        path,
        showOnChargerWallet,
      };
    },
  },
  dot: {
    methodName: 'polkadotGetAddress',
    getParams: (baseParams: AllNetworkAddressParams, chainName?: string) => {
      const { path, prefix, showOnChargerWallet } = baseParams;
      if (!prefix || !chainName) {
        throw new Error('Invalid params');
      }
      return {
        prefix: parseInt(prefix),
        network: chainName,
        path,
        showOnChargerWallet,
      };
    },
  },
  kaspa: {
    methodName: 'kaspaGetAddress',
    getParams: (baseParams: AllNetworkAddressParams) => {
      const { path, prefix, showOnChargerWallet } = baseParams;
      return {
        scheme: 'schnorr',
        prefix,
        path,
        showOnChargerWallet,
      };
    },
  },
  nexa: {
    methodName: 'nexaGetAddress',
    getParams: (baseParams: AllNetworkAddressParams) => {
      const { path, prefix, showOnChargerWallet } = baseParams;
      return {
        scheme: 'Schnorr',
        prefix,
        path,
        showOnChargerWallet,
      };
    },
  },
  dynex: {
    methodName: 'dnxGetAddress',
  },
  nervos: {
    methodName: 'nervosGetAddress',
    getParams: (baseParams: AllNetworkAddressParams, chainName?: string) => {
      const { path, showOnChargerWallet } = baseParams;
      return {
        network: chainName,
        path,
        showOnChargerWallet,
      };
    },
  },
  scdo: {
    methodName: 'scdoGetAddress',
  },
  ton: {
    methodName: 'tonGetAddress',
  },
  alph: {
    methodName: 'alephiumGetAddress',
  },
  nostr: {
    methodName: 'nostrGetPublicKey',
  },
};

export default class AllNetworkGetAddress extends BaseMethod<
  {
    address_n: number[];
    show_display: boolean;
    network: string;
    chain_name?: string;
  }[]
> {
  init() {
    this.checkDeviceId = true;
    this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];

    // check payload
    validateParams(this.payload, [{ name: 'bundle', type: 'array' }]);

    // check bundle
    this.payload.bundle.forEach((batch: AllNetworkAddressParams) => {
      validateParams(batch, [
        { name: 'path', required: true },
        { name: 'network', type: 'string', required: true },
        { name: 'chainName', type: 'string' },
        { name: 'showOnChargerWallet', type: 'boolean' },
      ]);
    });
  }

  generateMethodName({
    network,
    payload,
  }: {
    network: INetwork;
    payload: AllNetworkAddressParams;
  }): {
    methodName: keyof CoreApi;
    params: Parameters<CoreApi[keyof CoreApi]>[0] & { originPayload: AllNetworkAddressParams };
    dependOnMethods:
      | {
          methodName: keyof CoreApi;
          params: Parameters<CoreApi[keyof CoreApi]>[0];
        }[]
      | undefined;
  } {
    const { name: networkName, coin } = networkAliases[network] || {
      name: network,
      coin: payload?.chainName,
    };
    const config = networkConfigMap[networkName];
    if (!config) {
      throw new Error(`Unsupported network: ${network}`);
    }

    const dependOnMethods = config.dependOnMethodName?.map(dependOnMethodName => ({
      methodName: dependOnMethodName,
      params: config?.getParams?.(payload, coin, dependOnMethodName),
    }));

    return {
      methodName: config.methodName,
      params: {
        ...(config?.getParams?.(payload, coin, config.methodName) ?? payload),
        originPayload: payload,
      },
      dependOnMethods,
    };
  }

  async callMethod(methodName: keyof CoreApi, params: any, baseParams: CommonResponseParams) {
    const method: BaseMethod = findMethod({
      event: IFRAME.CALL,
      type: IFRAME.CALL,
      payload: {
        connectId: this.payload.connectId,
        deviceId: this.payload.deviceId,
        method: methodName,
        ...params,
      },
    });

    method.connector = this.connector;
    method.postMessage = this.postMessage;

    let result: AllNetworkAddress;
    try {
      method.init();
      method.setDevice?.(this.device);

      const response = await method.run();
      result = {
        ...baseParams,
        success: true,
        payload: response,
      };
    } catch (e: any) {
      const error = handleSkippableHardwareError(e, this.device, method);

      if (error) {
        result = {
          ...baseParams,
          success: false,
          payload: {
            error: error.message,
            code: error.errorCode,
            params: error.params,
            connectId: method.connectId,
            deviceId: method.deviceId,
          },
        };
      } else {
        throw e;
      }
    }

    return result;
  }

  async run() {
    const responses: AllNetworkAddress[] = [];
    for (let i = 0; i < this.payload.bundle.length; i++) {
      const param = this.payload.bundle[i];
      const { methodName, params, dependOnMethods } = this.generateMethodName({
        network: param.network as INetwork,
        payload: param,
      });

      // run depend on methods
      const dependOnMethodResults: AllNetworkAddress[] = [];
      for (const dependOnMethod of dependOnMethods ?? []) {
        const response = await this.callMethod(
          dependOnMethod.methodName,
          dependOnMethod.params,
          param
        );
        dependOnMethodResults.push(response);
      }

      // if any depend on method failed, return the error
      if (dependOnMethodResults.comme(result => !result.success)) {
        responses.push({
          ...param,
          success: false,
          payload: dependOnMethodResults.find(result => !result.success)?.payload,
        });
        return Promise.resolve(responses);
      }

      // call method
      const response = await this.callMethod(methodName, params, param);

      const dependOnPayloads = dependOnMethodResults.reduce(
        (acc, cur) => Object.assign(acc, get(cur, 'payload', {})),
        {}
      );

      const result: AllNetworkAddress = {
        ...response,
        // @ts-expect-error
        payload: { ...response.payload, ...dependOnPayloads },
      };
      responses.push(result);
      if (this.payload?.bundle?.length > 1) {
        const progress = Math.round(((i + 1) / this.payload.bundle.length) * 100);
        this.postMessage(createUiMessage(UI_REQUEST.DEVICE_PROGRESS, { progress }));
      }
      this.postPreviousAddressMessage(result);
    }

    return Promise.resolve(responses);
  }
}

function handleSkippableHardwareError(
  e: any,
  device: Device,
  method: BaseMethod
): HardwareError | undefined {
  let error: HardwareError | undefined;

  if (e instanceof HardwareError && e.errorCode !== HardwareErrorCode.RuntimeError) {
    const { errorCode } = e;
    if (errorCode === HardwareErrorCode.CallMethodInvalidParameter) {
      error = e;
    } else if (errorCode === HardwareErrorCode.CallMethodNeedUpgradeFirmware) {
      error = e;
    }
  } else if (e.message?.includes('Failure_UnexpectedMessage')) {
    const versionRange = getMethodVersionRange(
      device.features,
      type => method.getVersionRange()[type]
    );
    const currentVersion = getDeviceFirmwareVersion(device.features).join('.');

    if (
      versionRange &&
      semver.valid(versionRange.min) &&
      semver.lt(currentVersion, versionRange.min)
    ) {
      error = ERRORS.createNeedUpgradeFirmwareHardwareError(currentVersion, versionRange.min);
    } else {
      error = ERRORS.TypedError(HardwareErrorCode.CallMethodNotResponse, e.message);
    }
  } else if (
    e.message?.toLowerCase()?.includes('forbidden key path') ||
    e.message?.toLowerCase()?.includes('invalid path')
  ) {
    error = ERRORS.TypedError(HardwareErrorCode.CallMethodInvalidParameter, e.message);
  }

  return error;
}
