import { Deferred } from '@chargerwallet/hd-shared';
import { BaseMethod } from '../BaseMethod';
import type { Device } from '../../device/Device';
import type { Features } from '../../types';
export default class DeviceUpdateBootloader extends BaseMethod {
    checkPromise: Deferred<any> | null;
    init(): void;
    postTipMessage: (message: string) => void;
    updateTouchBootloader(device: Device, features?: Features): Promise<boolean>;
    run(): Promise<boolean>;
}
//# sourceMappingURL=DeviceUpdateBootloader.d.ts.map