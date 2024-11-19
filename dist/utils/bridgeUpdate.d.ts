import { Features } from '@chargerwallet/hd-transport';
export declare function getBridgeReleaseInfo(features: Features, willUpdateFirmwareVersion: string): Promise<{
    shouldUpdate: boolean;
    status: string;
    releaseVersion: string;
    changelog: {
        "zh-CN": string;
        "en-US": string;
    } | undefined;
}>;
//# sourceMappingURL=bridgeUpdate.d.ts.map