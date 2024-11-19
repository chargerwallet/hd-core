import { FilecoinSignTx as HardwareFilecoinSignTx } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class FilecoinSignTransaction extends BaseMethod<HardwareFilecoinSignTx> {
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
//# sourceMappingURL=FilecoinSignTransaction.d.ts.map