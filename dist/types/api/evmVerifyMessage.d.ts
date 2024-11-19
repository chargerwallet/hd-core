import { Success } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';
export type EVMVerifyMessageParams = {
    address: string;
    messageHex: string;
    signature: string;
    chainId?: number;
};
export declare function evmVerifyMessage(connectId: string, deviceId: string, params: CommonParams & EVMVerifyMessageParams): Response<Success>;
//# sourceMappingURL=evmVerifyMessage.d.ts.map