import type { IDeviceType } from './device';
export type ConnectSettings = {
    connectSrc?: string;
    debug?: boolean;
    transportReconnect?: boolean;
    lazyLoad?: boolean;
    origin?: string;
    parentOrigin?: string;
    configSrc: string;
    iframeSrc: string;
    version: string;
    priority: number;
    trustedHost: boolean;
    supportedBrowser?: boolean;
    env: 'node' | 'web' | 'webextension' | 'electron' | 'react-native' | 'webusb' | 'lowlevel';
    timestamp: number;
    isFrame?: boolean;
    preRelease?: boolean;
    fetchConfig?: boolean;
    extension?: string;
};
export type IVersionArray = [number, number, number];
export type ILocale = 'zh-CN' | 'en-US';
export type IFirmwareReleaseInfo = {
    required: boolean;
    url: string;
    resource?: string;
    fullResource?: string;
    fullResourceRange?: string[];
    bootloaderResource?: string;
    bootloaderVersion?: IVersionArray;
    displayBootloaderVersion?: IVersionArray;
    bootloaderRelatedFirmwareVersion?: IVersionArray;
    bootloaderChangelog?: {
        [k in ILocale]: string;
    };
    fingerprint: string;
    version: IVersionArray;
    changelog: {
        [k in ILocale]: string;
    };
};
export type IBLEFirmwareReleaseInfo = {
    required: boolean;
    url: string;
    webUpdate: string;
    fingerprint: string;
    fingerprintWeb: string;
    version: IVersionArray;
    changelog: {
        [k in ILocale]: string;
    };
};
type IKnownDevice = Exclude<IDeviceType, 'unknown'>;
export type DeviceTypeMap = {
    [k in IKnownDevice]: {
        firmware: IFirmwareReleaseInfo[];
        'firmware-v2'?: IFirmwareReleaseInfo[];
        'firmware-v5'?: IFirmwareReleaseInfo[];
        ble: IBLEFirmwareReleaseInfo[];
    };
};
export type AssetsMap = {
    bridge: {
        version: IVersionArray;
        linux32Rpm: string;
        linux64Rpm: string;
        linux32Deb: string;
        linux64Deb: string;
        win: string;
        mac: string;
        sha256sumAsc: string;
        changelog: {
            [k in ILocale]: string;
        };
    };
};
export type RemoteConfigResponse = {
    bridge: AssetsMap['bridge'];
} & DeviceTypeMap;
export {};
//# sourceMappingURL=settings.d.ts.map