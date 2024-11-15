import { AptosSignTx as HardwareAptosSignTx } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class AptosSignTransaction extends BaseMethod<HardwareAptosSignTx> {
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
    };
    run(): Promise<import("@chargerwallet/hd-transport").AptosSignedTx>;
}
//# sourceMappingURL=AptosSignTransaction.d.ts.map