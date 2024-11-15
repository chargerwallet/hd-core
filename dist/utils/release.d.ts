import { IBLEFirmwareReleaseInfo, IDeviceFirmwareStatus, IFirmwareReleaseInfo, IVersionArray } from '../types';
export declare const getReleaseStatus: (releases: (IFirmwareReleaseInfo | IBLEFirmwareReleaseInfo)[], currentVersion: string) => IDeviceFirmwareStatus;
export declare const getReleaseChangelog: (releases: (IFirmwareReleaseInfo | IBLEFirmwareReleaseInfo)[], currentVersion: string) => IFirmwareReleaseInfo['changelog'][];
export declare const findLatestRelease: <T extends {
    version: IVersionArray;
}>(releases: T[]) => T | undefined;
//# sourceMappingURL=release.d.ts.map