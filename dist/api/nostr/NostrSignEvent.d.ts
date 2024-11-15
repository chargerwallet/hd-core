import { NostrSignEvent as SignEvent } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class NostrSignEvent extends BaseMethod<SignEvent> {
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
        rawTx: string;
        event: any;
    }>;
}
//# sourceMappingURL=NostrSignEvent.d.ts.map