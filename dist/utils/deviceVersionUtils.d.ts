import type { Features, IVersionArray } from '../types';
export declare const getDeviceFirmwareVersion: (features: Features | undefined) => IVersionArray;
export declare const getDeviceBLEFirmwareVersion: (features: Features) => IVersionArray | null;
export declare const getDeviceBootloaderVersion: (features: Features | undefined) => IVersionArray;
export declare const getDeviceBoardloaderVersion: (features: Features) => IVersionArray;
//# sourceMappingURL=deviceVersionUtils.d.ts.map