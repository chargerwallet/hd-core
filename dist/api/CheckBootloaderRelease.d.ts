import { BaseMethod } from './BaseMethod';
export default class CheckBootloaderRelease extends BaseMethod {
    init(): void;
    run(): Promise<{
        status: string;
        changelog: ({
            "zh-CN": string;
            "en-US": string;
        } | undefined)[];
        release: import("..").IFirmwareReleaseInfo | undefined;
        bootloaderMode: boolean;
    } | null>;
}
//# sourceMappingURL=CheckBootloaderRelease.d.ts.map