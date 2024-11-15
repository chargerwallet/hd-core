import { BaseMethod } from './BaseMethod';
export default class CheckFirmwareRelease extends BaseMethod {
    init(): void;
    run(): Promise<{
        status: import("..").IDeviceFirmwareStatus;
        changelog: {
            "zh-CN": string;
            "en-US": string;
        }[];
        release: import("..").IFirmwareReleaseInfo | undefined;
        bootloaderMode: boolean;
    }> | Promise<null>;
}
//# sourceMappingURL=CheckFirmwareRelease.d.ts.map