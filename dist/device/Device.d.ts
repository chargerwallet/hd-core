/// <reference types="node" />
import EventEmitter from 'events';
import { ChargerWalletDeviceInfo as DeviceDescriptor } from '@chargerwallet/hd-transport';
import { Deferred } from '@chargerwallet/hd-shared';
import type DeviceConnector from './DeviceConnector';
import { DeviceCommands, PassphrasePromptResponse } from './DeviceCommands';
import { EChargerWalletDeviceMode, type Device as DeviceTyped, type Features, type UnavailableCapabilities } from '../types';
import { DEVICE, DeviceButtonRequestPayload, DeviceFeaturesPayload } from '../events';
import { PROTO } from '../constants';
export type InitOptions = {
    initSession?: boolean;
    deviceId?: string;
    passphraseState?: string;
    deriveCardano?: boolean;
};
export type RunOptions = {
    keepSession?: boolean;
} & InitOptions;
export interface DeviceEvents {
    [DEVICE.PIN]: [Device, PROTO.PinMatrixRequestType | undefined, (err: any, pin: string) => void];
    [DEVICE.PASSPHRASE_ON_DEVICE]: [Device, ((response: any) => void)?];
    [DEVICE.BUTTON]: [Device, DeviceButtonRequestPayload];
    [DEVICE.FEATURES]: [Device, DeviceFeaturesPayload];
    [DEVICE.PASSPHRASE]: [Device, (response: PassphrasePromptResponse, error?: Error) => void];
}
export interface Device {
    on<K extends keyof DeviceEvents>(type: K, listener: (...event: DeviceEvents[K]) => void): this;
    off<K extends keyof DeviceEvents>(type: K, listener: (...event: DeviceEvents[K]) => void): this;
    emit<K extends keyof DeviceEvents>(type: K, ...args: DeviceEvents[K]): boolean;
}
export declare class Device extends EventEmitter {
    originalDescriptor: DeviceDescriptor;
    mainId?: string | null;
    deviceConnector?: DeviceConnector | null;
    commands: DeviceCommands;
    features: Features | undefined;
    featuresNeedsReload: boolean;
    runPromise?: Deferred<void> | null;
    externalState: string[];
    unavailableCapabilities: UnavailableCapabilities;
    instance: number;
    internalState: string[];
    needReloadDevice: boolean;
    keepSession: boolean;
    passphraseState: string | undefined;
    constructor(descriptor: DeviceDescriptor);
    static fromDescriptor(originalDescriptor: DeviceDescriptor): Device;
    toMessageObject(): DeviceTyped | null;
    connect(): Promise<boolean>;
    acquire(): Promise<void>;
    release(): Promise<void>;
    getCommands(): DeviceCommands;
    private generateStateKey;
    getInternalState(_deviceId?: string): string | undefined;
    tryFixInternalState(state: string, deviceId: string, sessionId?: string | null): void;
    private setInternalState;
    clearInternalState(_deviceId?: string): void;
    initialize(options?: InitOptions): Promise<void>;
    getFeatures(): Promise<void>;
    _updateFeatures(feat: Features, initSession?: boolean): void;
    updateDescriptor(descriptor: DeviceDescriptor, forceUpdate?: boolean): void;
    updateFromCache(device: Device): void;
    run(fn?: () => Promise<void>, options?: RunOptions): Promise<void>;
    _runInner<T>(fn: (() => Promise<T>) | undefined, options: RunOptions): Promise<undefined>;
    interruptionFromOutside(): Promise<void>;
    interruptionFromUser(): Promise<void>;
    getMode(): EChargerWalletDeviceMode;
    getFirmwareVersion(): import("../types").IVersionArray | null;
    getBLEFirmwareVersion(): import("../types").IVersionArray | null;
    isUsed(): boolean;
    isUsedHere(): boolean;
    isUsedElsewhere(): boolean;
    isBootloader(): boolean | undefined;
    isInitialized(): boolean | undefined;
    isSeedless(): boolean | undefined;
    isUnacquired(): boolean;
    hasUnexpectedMode(allow: string[], require: string[]): "ui-device_bootloader_mode" | "ui-device_not_in_bootloader_mode" | "ui-device_not_initialized" | "ui-device_seedless" | null;
    hasUsePassphrase(): boolean | undefined;
    checkDeviceId(deviceId: string): boolean;
    checkPassphraseStateSafety(passphraseState?: string): Promise<boolean>;
}
export default Device;
//# sourceMappingURL=Device.d.ts.map