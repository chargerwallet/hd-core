import { TronSignTx } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { TronTransaction } from '../../types/api/tronSignTransaction';
export default class TronSignTransaction extends BaseMethod<TronSignTx> {
    parseTx(tx: TronTransaction, address_n: number[]): TronSignTx;
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
    };
    run(): Promise<import("@chargerwallet/hd-transport").TronSignedTx>;
}
//# sourceMappingURL=TronSignTransaction.d.ts.map