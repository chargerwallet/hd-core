import { BaseMethod } from './BaseMethod';
export default class CheckBridgeRelease extends BaseMethod {
    init(): void;
    run(): Promise<{
        shouldUpdate: boolean;
        status: string;
        releaseVersion: string;
    } | null>;
}
//# sourceMappingURL=CheckBridgeRelease.d.ts.map