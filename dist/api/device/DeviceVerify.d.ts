import { BixinVerifyDeviceRequest } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import type { DeviceVerifySignature } from '../../types';
export default class DeviceVerify extends BaseMethod<BixinVerifyDeviceRequest> {
    init(): void;
    run(): Promise<DeviceVerifySignature>;
}
//# sourceMappingURL=DeviceVerify.d.ts.map