import { EthereumMessageSignature } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';
export type EVMSignMessageParams = {
    path: string | number[];
    messageHex: string;
    chainId?: number;
};
export declare function evmSignMessage(connectId: string, deviceId: string, params: CommonParams & EVMSignMessageParams): Response<EthereumMessageSignature>;
//# sourceMappingURL=evmSignMessage.d.ts.map