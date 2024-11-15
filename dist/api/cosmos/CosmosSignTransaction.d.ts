import { CosmosSignTx as HardwareCosmosSignTx } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class CosmosSignTransaction extends BaseMethod<HardwareCosmosSignTx> {
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
        signature: string;
    }>;
}
//# sourceMappingURL=CosmosSignTransaction.d.ts.map