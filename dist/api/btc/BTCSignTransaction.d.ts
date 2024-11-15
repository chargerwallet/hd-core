import { TxInputType, TxOutputType } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { AccountAddresses, RefTransaction, TransactionOptions } from '../../types/api/btcSignTransaction';
type Params = {
    inputs: TxInputType[];
    outputs: TxOutputType[];
    refTxs: RefTransaction[];
    addresses?: AccountAddresses;
    options: TransactionOptions;
    coinName: string;
};
export default class BTCSignTransaction extends BaseMethod<Params> {
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
        model_touch: {
            min: string;
        };
    } | {
        model_mini?: undefined;
        model_touch?: undefined;
    };
    run(): Promise<import("../../types/api/btcSignTransaction").SignedTransaction>;
}
export {};
//# sourceMappingURL=BTCSignTransaction.d.ts.map