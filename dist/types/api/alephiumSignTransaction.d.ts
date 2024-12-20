import { AlephiumSignedTx as HardwareAlephiumSignedTx } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';
export type AlephiumSignedTx = {
    path: string;
} & HardwareAlephiumSignedTx;
export type AlephiumSignTransactionParams = {
    path: string | number[];
    rawTx: string;
    scriptOpt?: string;
};
export declare function alephiumSignTransaction(connectId: string, deviceId: string, params: CommonParams & AlephiumSignTransactionParams): Response<AlephiumSignedTx>;
//# sourceMappingURL=alephiumSignTransaction.d.ts.map