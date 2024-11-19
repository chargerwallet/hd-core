import type { Messages } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';
export type XrpSignTransactionParams = Messages.RippleSignTx;
export type XrpSignTransactionResponse = {
    serializedTx: string;
    signature: string;
};
type XrpPayment = {
    amount: string;
    destination: string;
    destinationTag?: number;
};
type XrpTransaction = {
    fee: string;
    flags?: number;
    sequence: number;
    maxLedgerVersion?: number;
    payment: XrpPayment;
};
export declare function xrpSignTransaction(connectId: string, deviceId: string, params: CommonParams & XrpTransaction): Response<XrpSignTransactionResponse>;
export {};
//# sourceMappingURL=xrpSignTransaction.d.ts.map