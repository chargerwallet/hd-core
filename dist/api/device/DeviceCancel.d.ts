import { Cancel } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class DeviceCancel extends BaseMethod<Cancel> {
    init(): void;
    run(): Promise<import("@chargerwallet/hd-transport").Success>;
}
//# sourceMappingURL=DeviceCancel.d.ts.map