import { AlgorandSignTx as HardwareAlgorandSignTx } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class AlgoSignTransaction extends BaseMethod<HardwareAlgorandSignTx> {
    hasBundle: boolean;
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
    };
    run(): Promise<{
        path: string;
        signature: string;
    }>;
}
//# sourceMappingURL=AlgoSignTransaction.d.ts.map