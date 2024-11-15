import { NostrSignSchnorr as SignSchnorr } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class NostrSignSchnorr extends BaseMethod<SignSchnorr> {
    hasBundle: boolean;
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
        model_touch: {
            min: string;
        };
    };
    run(): Promise<{
        path: string;
        rawHash: string;
        signature: string;
    }>;
}
//# sourceMappingURL=NostrSignSchnorr.d.ts.map