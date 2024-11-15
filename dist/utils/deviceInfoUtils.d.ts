import type { Features, IDeviceModel, IDeviceType, IVersionRange } from '../types';
export declare const getDeviceType: (features?: Features) => IDeviceType;
export declare const getDeviceTypeByBleName: (name?: string) => IDeviceType;
export declare const getDeviceBleName: (features?: Features) => string | null;
export declare const getDeviceUUID: (features: Features) => string;
export declare const getDeviceLabel: (features?: Features) => string | null;
export declare const getMethodVersionRange: (features: Features | undefined, getVersionRange: (deviceModel: IDeviceType | IDeviceModel) => IVersionRange | undefined) => IVersionRange | undefined;
//# sourceMappingURL=deviceInfoUtils.d.ts.map