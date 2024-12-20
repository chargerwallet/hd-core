import { CosmosSignedTx as HardwareCosmosSignedTx } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';
export type CosmosSignedTx = {
    path: string;
} & HardwareCosmosSignedTx;
export type CosmosSignTransactionParams = {
    path: string | number[];
    rawTx?: string;
};
export declare function cosmosSignTransaction(connectId: string, deviceId: string, params: CommonParams & CosmosSignTransactionParams): Response<CosmosSignedTx>;
//# sourceMappingURL=cosmosSignTransaction.d.ts.map