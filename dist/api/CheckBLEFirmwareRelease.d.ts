import { BaseMethod } from './BaseMethod';
export default class CheckBLEFirmwareRelease extends BaseMethod {
    init(): void;
    run(): Promise<null> | Promise<{
        status: import("..").IDeviceBLEFirmwareStatus;
        changelog: {
            "zh-CN": string;
            "en-US": string;
        }[];
        release: import("..").IBLEFirmwareReleaseInfo | undefined;
        bootloaderMode: boolean;
    }>;
}
//# sourceMappingURL=CheckBLEFirmwareRelease.d.ts.map