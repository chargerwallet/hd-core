import { Transport, ChargerWalletDeviceInfo as DeviceDescriptor } from '@chargerwallet/hd-transport';
import { DeviceDescriptorDiff } from './DevicePool';
export default class DeviceConnector {
    transport: Transport;
    listenTimestamp: number;
    current: DeviceDescriptor[] | null;
    upcoming: DeviceDescriptor[];
    listening: boolean;
    constructor();
    enumerate(): Promise<DeviceDescriptorDiff | undefined>;
    listen(): Promise<void>;
    stop(): void;
    acquire(path: string, session?: string | null, forceCleanRunPromise?: boolean): Promise<string | undefined>;
    release(session: string, onclose: boolean): Promise<void>;
    _reportDevicesChange(): void;
}
//# sourceMappingURL=DeviceConnector.d.ts.map