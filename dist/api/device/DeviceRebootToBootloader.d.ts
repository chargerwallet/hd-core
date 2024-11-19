import { RebootToBootloader } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class DeviceRebootToBootloader extends BaseMethod<RebootToBootloader> {
    init(): void;
    getVersionRange(): {
        classic: {
            min: string;
        };
        mini: {
            min: string;
        };
    };
    run(): Promise<import("@chargerwallet/hd-transport").Success>;
}
//# sourceMappingURL=DeviceRebootToBootloader.d.ts.map