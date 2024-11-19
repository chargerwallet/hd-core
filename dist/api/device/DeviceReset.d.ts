import { ResetDevice } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class DeviceReset extends BaseMethod<ResetDevice> {
    init(): void;
    run(): Promise<import("@chargerwallet/hd-transport").Success>;
}
//# sourceMappingURL=DeviceReset.d.ts.map