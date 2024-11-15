import { BaseMethod } from '../BaseMethod';
import type { CardanoSignedTxData } from '../../types/api/cardano';
export default class CardanoSignTransaction extends BaseMethod<any> {
    hasBundle?: boolean;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
        model_touch: {
            min: string;
        };
    };
    init(): void;
    signTx(): Promise<CardanoSignedTxData>;
    run(): Promise<CardanoSignedTxData>;
}
//# sourceMappingURL=CardanoSignTransaction.d.ts.map