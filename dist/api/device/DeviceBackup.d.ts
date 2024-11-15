import { BackupDevice } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class DeviceBackup extends BaseMethod<BackupDevice> {
    init(): void;
    run(): Promise<import("@chargerwallet/hd-transport").Success>;
}
//# sourceMappingURL=DeviceBackup.d.ts.map