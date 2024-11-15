import { NostrGetPublicKey as GetPublicKey } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { NostrPublicKey } from '../../types/api/nostrGetPublicKey';
export default class NostrGetPublicKey extends BaseMethod<GetPublicKey[]> {
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
    run(): Promise<NostrPublicKey | NostrPublicKey[]>;
}
//# sourceMappingURL=NostrGetPublicKey.d.ts.map