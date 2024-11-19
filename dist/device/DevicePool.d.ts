/// <reference types="node" />
import EventEmitter from 'events';
import { ChargerWalletDeviceInfo as DeviceDescriptor } from '@chargerwallet/hd-transport';
import { Device, InitOptions } from './Device';
import type DeviceConnector from './DeviceConnector';
export type DeviceDescriptorDiff = {
    didUpdate: boolean;
    connected: DeviceDescriptor[];
    disconnected: DeviceDescriptor[];
    changedSessions: DeviceDescriptor[];
    changedDebugSessions: DeviceDescriptor[];
    acquired: DeviceDescriptor[];
    debugAcquired: DeviceDescriptor[];
    released: DeviceDescriptor[];
    debugReleased: DeviceDescriptor[];
    descriptors: DeviceDescriptor[];
};
export declare class DevicePool extends EventEmitter {
    static current: DeviceDescriptor[] | null;
    static upcoming: DeviceDescriptor[];
    static connectedPool: DeviceDescriptor[];
    static disconnectPool: DeviceDescriptor[];
    static devicesCache: Record<string, Device>;
    static emitter: EventEmitter;
    static connector: DeviceConnector;
    static setConnector(connector: DeviceConnector): void;
    static getDevices(descriptorList: DeviceDescriptor[], connectId?: string, initOptions?: InitOptions): Promise<{
        devices: Record<string, Device>;
        deviceList: Device[];
    }>;
    static clearDeviceCache(connectId?: string): void;
    static _createDevice(descriptor: DeviceDescriptor, initOptions?: InitOptions): Promise<Device>;
    static _checkDevicePool(initOptions?: InitOptions): Promise<void>;
    static _sendConnectMessage(initOptions?: InitOptions): Promise<void>;
    static _sendDisconnectMessage(): void;
    static reportDeviceChange(upcoming: DeviceDescriptor[]): void;
    static getDeviceByPath(path: string): Device | undefined;
    static _addConnectedDeviceToPool(descriptor: DeviceDescriptor): void;
    static _removeDeviceFromConnectedPool(path: string): void;
    static _addDisconnectedDeviceToPool(descriptor: DeviceDescriptor): void;
}
//# sourceMappingURL=DevicePool.d.ts.map