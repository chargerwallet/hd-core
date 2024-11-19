import type { PROTO } from '../constants';
import { IVersionArray } from './settings';
export type DeviceStatus = 'available' | 'occupied' | 'used';
export declare enum EChargerWalletDeviceMode {
    bootloader = "bootloader",
    normal = "normal",
    notInitialized = "notInitialized",
    backupMode = "backupMode"
}
export type UnavailableCapability = 'no-capability' | 'no-support' | 'update-required' | 'trezor-connect-outdated';
export type UnavailableCapabilities = {
    [key: string]: UnavailableCapability;
};
export type KnownDevice = {
    connectId: string | null;
    uuid: string;
    deviceId: string | null;
    deviceType: IDeviceType | null;
    path: string;
    label: string;
    bleName: string | null;
    name: string;
    error?: typeof undefined;
    mode: EChargerWalletDeviceMode;
    features: PROTO.Features;
    unavailableCapabilities: UnavailableCapabilities;
    bleFirmwareVersion: IVersionArray | null;
    firmwareVersion: IVersionArray | null;
};
export type SearchDevice = {
    connectId: string | null;
    uuid: string;
    deviceId: string | null;
    deviceType: IDeviceType;
    name: string;
};
export type Device = KnownDevice;
export type Features = PROTO.Features;
export type ChargerwalletFeatures = PROTO.ChargerwalletFeatures;
export type IDeviceType = 'unknown' | 'classic' | 'classic1s' | 'mini' | 'touch' | 'pro';
export type IDeviceModel = 'model_classic' | 'model_mini' | 'model_touch';
export declare const DeviceModelToTypes: {
    [deviceModel in IDeviceModel]: IDeviceType[];
};
export declare const DeviceTypeToModels: {
    [deviceType in IDeviceType]: IDeviceModel[];
};
export type IDeviceFirmwareStatus = 'valid' | 'outdated' | 'required' | 'unknown' | 'none';
export type IDeviceBLEFirmwareStatus = 'valid' | 'outdated' | 'required' | 'unknown' | 'none';
export type ITransportStatus = 'valid' | 'outdated';
export type IVersionRange = {
    min: string;
    max?: string;
};
export type DeviceFirmwareRange = {
    [deviceType in IDeviceType | IDeviceModel]?: IVersionRange;
};
type FeaturesNarrowing = {
    major_version: 2;
    fw_major: null;
    fw_minor: null;
    fw_patch: null;
    bootloader_mode: true;
    firmware_present: false;
} | {
    major_version: 2;
    fw_major: null;
    fw_minor: null;
    fw_patch: null;
    bootloader_mode: null;
    firmware_present: null;
} | {
    major_version: 2;
    fw_major: 2;
    fw_minor: number;
    fw_patch: number;
    bootloader_mode: true;
    firmware_present: true;
} | {
    major_version: 1;
    fw_major: null;
    fw_minor: null;
    fw_patch: null;
    bootloader_mode: true;
    firmware_present: false;
} | {
    major_version: 1;
    fw_major: null;
    fw_minor: null;
    fw_patch: null;
    bootloader_mode: true;
    firmware_present: true;
};
export type StrictFeatures = Features & FeaturesNarrowing;
export type SupportFeatureType = {
    support: boolean;
    require?: string;
};
export type SupportFeatures = {
    inputPinOnSoftware: SupportFeatureType;
    modifyHomescreen: SupportFeatureType;
};
export {};
//# sourceMappingURL=device.d.ts.map