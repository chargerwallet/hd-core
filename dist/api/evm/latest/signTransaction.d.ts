import { EthereumTxRequestChargerWallet, TypedCall } from '@chargerwallet/hd-transport';
import { EVMSignedTx, EVMTransaction, EVMTransactionEIP1559 } from '../../../types';
export declare const processTxRequest: ({ typedCall, request, data, chainId, supportTrezor, }: {
    typedCall: TypedCall;
    request: EthereumTxRequestChargerWallet;
    data: string;
    chainId?: number | undefined;
    supportTrezor?: boolean | undefined;
}) => Promise<EVMSignedTx>;
export declare const evmSignTx: ({ typedCall, addressN, tx, supportTrezor, }: {
    typedCall: TypedCall;
    addressN: number[];
    tx: EVMTransaction;
    supportTrezor?: boolean | undefined;
}) => Promise<EVMSignedTx>;
export declare const evmSignTxEip1559: ({ typedCall, addressN, tx, supportTrezor, }: {
    typedCall: TypedCall;
    addressN: number[];
    tx: EVMTransactionEIP1559;
    supportTrezor?: boolean | undefined;
}) => Promise<EVMSignedTx>;
export declare const signTransaction: ({ typedCall, isEIP1559, addressN, tx, }: {
    addressN: number[];
    tx: EVMTransaction | EVMTransactionEIP1559;
    isEIP1559: boolean;
    typedCall: TypedCall;
}) => Promise<EVMSignedTx>;
//# sourceMappingURL=signTransaction.d.ts.map