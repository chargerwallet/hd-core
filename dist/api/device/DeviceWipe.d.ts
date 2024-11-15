import { WipeDevice } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class DeviceWipe extends BaseMethod<WipeDevice> {
    init(): void;
    run(): Promise<import("@chargerwallet/hd-transport").Success>;
}
//# sourceMappingURL=DeviceWipe.d.ts.map