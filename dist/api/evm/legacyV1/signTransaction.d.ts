import { TypedCall } from '@chargerwallet/hd-transport';
import { EVMTransaction, EVMTransactionEIP1559 } from '../../../types';
export declare const signTransaction: ({ typedCall, isEIP1559, addressN, tx, }: {
    addressN: number[];
    tx: EVMTransaction | EVMTransactionEIP1559;
    isEIP1559: boolean;
    typedCall: TypedCall;
}) => Promise<import("../../../types").EVMSignedTx>;
//# sourceMappingURL=signTransaction.d.ts.map