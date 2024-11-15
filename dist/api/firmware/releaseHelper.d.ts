import { type Features } from '../../types';
export declare const getFirmwareReleaseInfo: (features: Features) => {
    status: import("../../types").IDeviceFirmwareStatus;
    changelog: {
        "zh-CN": string;
        "en-US": string;
    }[];
    release: import("../../types").IFirmwareReleaseInfo | undefined;
    bootloaderMode: boolean;
};
export declare const getBleFirmwareReleaseInfo: (features: Features) => {
    status: import("../../types").IDeviceBLEFirmwareStatus;
    changelog: {
        "zh-CN": string;
        "en-US": string;
    }[];
    release: import("../../types").IBLEFirmwareReleaseInfo | undefined;
    bootloaderMode: boolean;
};
export declare const getBootloaderReleaseInfo: (features: Features, willUpdateFirmwareVersion?: string) => {
    status: string;
    changelog: ({
        "zh-CN": string;
        "en-US": string;
    } | undefined)[];
    release: import("../../types").IFirmwareReleaseInfo | undefined;
    bootloaderMode: boolean;
};
//# sourceMappingURL=releaseHelper.d.ts.map