import { AptosSignedTx as HardwareAptosSignedTx } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';

export type SuiSignedTx = {
  path: string;
} & HardwareAptosSignedTx;

export type SuiSignTransactionParams = {
  path: string | number[];
  rawTx?: string;
};

export declare function suiSignTransaction(
  connectId: string,
  deviceId: string,
  params: CommonParams & SuiSignTransactionParams
): Response<SuiSignedTx>;
