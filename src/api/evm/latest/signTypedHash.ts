import { MessageResponse, TypedCall } from '@chargerwallet/hd-transport';
import semver from 'semver';
import { ERRORS, HardwareErrorCode } from '@chargerwallet/hd-shared';
import { Device } from '../../../device/Device';
import { getDeviceFirmwareVersion, getDeviceType } from '../../../utils';

export const signTypedHash = async ({
  typedCall,
  addressN,
  device,
  chainId,
  domainHash,
  messageHash,
}: {
  typedCall: TypedCall;
  addressN: number[];
  device: Device;
  chainId: number | undefined;
  domainHash: string;
  messageHash: string | undefined;
}): Promise<MessageResponse<'EthereumTypedDataSignatureChargerWallet'>> => {
  const deviceType = getDeviceType(device.features);
  if (deviceType === 'touch' || deviceType === 'pro') {
    // Touch Pro Sign NestedArrays
    const currentVersion = getDeviceFirmwareVersion(device.features).join('.');
    const supportNestedArraysSignVersion = '4.2.0';

    // 4.2.0 is the first version that supports nested arrays in signTypedData
    if (semver.lt(currentVersion, supportNestedArraysSignVersion)) {
      throw ERRORS.TypedError(
        HardwareErrorCode.CallMethodNeedUpgradeFirmware,
        `Device firmware version is too low, please update to ${supportNestedArraysSignVersion}`,
        { current: currentVersion, require: supportNestedArraysSignVersion }
      );
    }
  }

  return typedCall('EthereumSignTypedHashChargerWallet', 'EthereumTypedDataSignatureChargerWallet', {
    address_n: addressN,
    domain_separator_hash: domainHash ?? '',
    message_hash: messageHash,
    chain_id: chainId,
  });
};
