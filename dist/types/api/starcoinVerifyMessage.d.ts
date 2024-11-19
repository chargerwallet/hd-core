import { Success } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';
export type StarcoinVerifyMessageParams = {
    publicKey: string;
    messageHex: string;
    signature: string;
};
export declare function starcoinVerifyMessage(connectId: string, deviceId: string, params: CommonParams & StarcoinVerifyMessageParams): Response<Success>;
//# sourceMappingURL=starcoinVerifyMessage.d.ts.map