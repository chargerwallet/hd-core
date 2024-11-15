import { Device } from '../device/Device';
import DeviceConnector from '../device/DeviceConnector';
import { DeviceFirmwareRange } from '../types';
import { CoreMessage } from '../events';
export declare abstract class BaseMethod<Params = undefined> {
    responseID: number;
    device: Device;
    params: Params;
    connectId?: string;
    deviceId?: string;
    deviceState?: string;
    name: string;
    payload: Record<string, any>;
    connector?: DeviceConnector;
    useDevice: boolean;
    notAllowDeviceMode: string[];
    requireDeviceMode: string[];
    shouldEnsureConnected: boolean;
    checkDeviceId: boolean;
    useDevicePassphraseState: boolean;
    skipForceUpdateCheck: boolean;
    postMessage: (message: CoreMessage) => void;
    constructor(message: {
        id?: number;
        payload: any;
    });
    abstract init(): void;
    abstract run(): Promise<any>;
    getVersionRange(): DeviceFirmwareRange;
    setDevice(device: Device): void;
    checkFirmwareRelease(): void;
    checkDeviceSupportFeature(): void;
    checkSafetyLevelOnTestNet(): Promise<void>;
    dispose(): void;
    postPreviousAddressMessage: (data: {
        address?: string;
        path?: string;
    }) => void;
}
//# sourceMappingURL=BaseMethod.d.ts.map