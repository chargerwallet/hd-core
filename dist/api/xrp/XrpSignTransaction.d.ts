import { XrpSignTransactionParams } from '../../types/api/xrpSignTransaction';
import { BaseMethod } from '../BaseMethod';
export default class XrpGetAddress extends BaseMethod<XrpSignTransactionParams> {
    hasBundle: boolean;
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
    };
    run(): Promise<{
        serializedTx: string;
        signature: string;
    }>;
}
//# sourceMappingURL=XrpSignTransaction.d.ts.map