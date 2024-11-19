import { BaseMethod } from './BaseMethod';
import DeviceConnector from '../device/DeviceConnector';
export default class SearchDevices extends BaseMethod {
    connector?: DeviceConnector;
    init(): void;
    run(): Promise<(import("..").KnownDevice | null)[] | {
        connectId: string;
        deviceType: import("..").IDeviceType;
        path: string;
        session?: string | null | undefined;
        debugSession?: string | null | undefined;
        debug: boolean;
        id: string;
        name: string | null;
    }[]>;
}
//# sourceMappingURL=SearchDevices.d.ts.map