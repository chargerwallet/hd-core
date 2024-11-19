/// <reference types="node" />
import EventEmitter from 'events';
import DeviceConnector from './DeviceConnector';
import { Device, InitOptions } from './Device';
export declare class DeviceList extends EventEmitter {
    devices: Record<string, Device>;
    connector?: DeviceConnector;
    getDeviceLists(connectId?: string, initOptions?: InitOptions): Promise<Device[]>;
    allDevices(): Device[];
    getDevice(connectId: string): Device;
}
//# sourceMappingURL=DeviceList.d.ts.map