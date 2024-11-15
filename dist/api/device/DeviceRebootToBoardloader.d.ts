import { BaseMethod } from '../BaseMethod';
import type { RebootToBoardloaderParams } from '../../types/api/deviceRebootToBoardloader';
export default class DeviceRebootToBoardloader extends BaseMethod<RebootToBoardloaderParams> {
    init(): void;
    getVersionRange(): {
        classic: {
            min: string;
        };
        mini: {
            min: string;
        };
    };
    run(): Promise<import("packages/hd-transport/dist").Success>;
}
//# sourceMappingURL=DeviceRebootToBoardloader.d.ts.map