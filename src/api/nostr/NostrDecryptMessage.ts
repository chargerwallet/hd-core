import { NostrDecryptMessage as DecryptMessage } from '@chargerwallet/hd-transport';
import { UI_REQUEST } from '../../constants/ui-request';
import { serializedPath, validatePath } from '../helpers/pathUtils';
import { BaseMethod } from '../BaseMethod';
import { validateParams } from '../helpers/paramsValidator';

export default class NostrDecryptMessage extends BaseMethod<DecryptMessage> {
  hasBundle = false;

  init() {
    this.checkDeviceId = true;
    this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];

    const { payload } = this;
    validateParams(payload, [
      { name: 'path', required: true },
      { name: 'pubkey', required: true, type: 'string' },
      { name: 'ciphertext', required: true, type: 'string' },
      { name: 'showOnChargerWallet', type: 'boolean' },
    ]);
    const addressN = validatePath(payload.path, 5);

    this.params = {
      address_n: addressN,
      pubkey: payload.pubkey,
      msg: payload.ciphertext,
      show_display: payload.showOnChargerWallet ?? true,
    };
  }

  getVersionRange() {
    return {
      model_mini: {
        min: '3.6.0',
      },
      model_touch: {
        min: '4.7.0',
      },
    };
  }

  async run() {
    const { message } = await this.device.commands.typedCall(
      'NostrDecryptMessage',
      'NostrDecryptedMessage',
      this.params
    );

    return {
      path: serializedPath(this.params.address_n),
      pubkey: this.params.pubkey,
      ciphertext: this.params.msg,
      decryptedMessage: message.msg,
    };
  }
}
