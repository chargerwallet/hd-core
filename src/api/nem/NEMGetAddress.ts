import { NEMGetAddress as HardwareNEMGetAddress } from '@chargerwallet/hd-transport';
import { UI_REQUEST } from '../../constants/ui-request';
import { validatePath, serializedPath } from '../helpers/pathUtils';
import { BaseMethod } from '../BaseMethod';
import { validateParams, validateResult } from '../helpers/paramsValidator';
import { NEMAddress, NEMGetAddressParams } from '../../types';

const MAINNET = 0x68; // 104

export default class NEMGetAddress extends BaseMethod<HardwareNEMGetAddress[]> {
  hasBundle = false;

  init() {
    this.checkDeviceId = true;
    this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];

    this.hasBundle = !!this.payload?.bundle;
    const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };

    // check payload
    validateParams(payload, [{ name: 'bundle', type: 'array' }]);

    // init params
    this.params = [];
    payload.bundle.forEach((batch: NEMGetAddressParams) => {
      const addressN = validatePath(batch.path, 3);

      validateParams(batch, [
        { name: 'path', required: true },
        { name: 'network', type: 'number' },
        { name: 'showOnChargerWallet', type: 'boolean' },
      ]);

      const showOnChargerWallet = batch.showOnChargerWallet ?? true;

      this.params.push({
        address_n: addressN,
        network: batch.network || MAINNET,
        show_display: showOnChargerWallet,
      });
    });
  }

  async run() {
    const responses: NEMAddress[] = [];

    for (let i = 0; i < this.params.length; i++) {
      const param = this.params[i];

      const res = await this.device.commands.typedCall('NEMGetAddress', 'NEMAddress', {
        ...param,
      });

      const path = serializedPath(param.address_n);
      responses.push({
        path,
        ...res.message,
      });
      this.postPreviousAddressMessage({
        path,
        address: res.message.address,
      });
    }

    validateResult(responses, ['address'], {
      expectedLength: this.params.length,
    });

    return Promise.resolve(this.hasBundle ? responses : responses[0]);
  }
}
