import { StarcoinGetPublicKey as HardwareStarcoinGetPublicKey } from '@chargerwallet/hd-transport';
import { UI_REQUEST } from '../../constants/ui-request';
import { validatePath, serializedPath } from '../helpers/pathUtils';
import { BaseMethod } from '../BaseMethod';
import { validateParams, validateResult } from '../helpers/paramsValidator';
import {
  StarcoinPublicKey,
  StarcoinGetPublicKeyParams,
} from '../../types/api/starcoinGetPublicKey';

export default class StarcoinGetPublicKey extends BaseMethod<HardwareStarcoinGetPublicKey[]> {
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
    payload.bundle.forEach((batch: StarcoinGetPublicKeyParams) => {
      const addressN = validatePath(batch.path, 3);

      validateParams(batch, [
        { name: 'path', required: true },
        { name: 'showOnChargerWallet', type: 'boolean' },
      ]);

      const showOnChargerWallet = batch.showOnChargerWallet ?? true;

      this.params.push({
        address_n: addressN,
        show_display: showOnChargerWallet,
      });
    });
  }

  async run() {
    const responses: StarcoinPublicKey[] = [];

    for (let i = 0; i < this.params.length; i++) {
      const param = this.params[i];

      const res = await this.device.commands.typedCall(
        'StarcoinGetPublicKey',
        'StarcoinPublicKey',
        {
          ...param,
        }
      );

      responses.push({
        path: serializedPath(param.address_n),
        ...res.message,
      });
    }

    validateResult(responses, ['public_key'], {
      expectedLength: this.params.length,
    });

    return Promise.resolve(this.hasBundle ? responses : responses[0]);
  }
}
