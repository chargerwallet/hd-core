import { TxInputType, TxOutputType, TypedCall } from '@chargerwallet/hd-transport';
import { RefTransaction, SignedTransaction, TransactionOptions } from '../../../types/api/btcSignTransaction';
declare const _default: (typedCall: TypedCall, inputs: TxInputType[], outputs: TxOutputType[], refTxsArray: RefTransaction[], options: TransactionOptions, coinName: string) => Promise<SignedTransaction>;
export default _default;
//# sourceMappingURL=signtxLegacy.d.ts.map