import type { AssetsMap, ConnectSettings, DeviceTypeMap, Features, IDeviceBLEFirmwareStatus, IDeviceFirmwareStatus, ITransportStatus, IVersionArray } from '../types';
export type FirmwareField = 'firmware' | 'firmware-v2' | 'firmware-v5';
export type MessageVersion = 'latest' | 'v1';
export default class DataManager {
    static deviceMap: DeviceTypeMap;
    static assets: AssetsMap | null;
    static settings: ConnectSettings;
    static messages: {
        [version in MessageVersion]: JSON;
    };
    static lastCheckTimestamp: number;
    static getFirmwareStatus: (features: Features) => IDeviceFirmwareStatus;
    static getSysResourcesLatestRelease: (features: Features, forcedUpdateRes?: boolean) => string | undefined;
    static getSysFullResource: (features: Features) => string | undefined;
    static getBootloaderResource: (features: Features) => string | undefined;
    static getBootloaderTargetVersion: (features: Features) => IVersionArray | undefined;
    static getBootloaderRelatedFirmwareVersion: (features: Features) => IVersionArray | undefined;
    static getFirmwareChangelog: (features: Features) => {
        "zh-CN": string;
        "en-US": string;
    }[];
    static getFirmwareLatestRelease: (features: Features) => import("../types").IFirmwareReleaseInfo | undefined;
    static getBLEFirmwareStatus: (features: Features) => IDeviceBLEFirmwareStatus;
    static getBleFirmwareChangelog: (features: Features) => {
        "zh-CN": string;
        "en-US": string;
    }[];
    static getBleFirmwareLatestRelease: (features: Features) => import("../types").IBLEFirmwareReleaseInfo | undefined;
    static getTransportStatus: (localVersion: string) => ITransportStatus;
    static getBridgeChangelog: () => {
        "zh-CN": string;
        "en-US": string;
    } | undefined;
    static load(settings: ConnectSettings): Promise<void>;
    static checkAndReloadData(): Promise<void>;
    static getProtobufMessages(messageVersion?: MessageVersion): JSON;
    static getSettings(key?: undefined): ConnectSettings;
    static getSettings<T extends keyof ConnectSettings>(key: T): ConnectSettings[T];
    static isBleConnect: (env: ConnectSettings['env']) => boolean;
}
//# sourceMappingURL=DataManager.d.ts.map