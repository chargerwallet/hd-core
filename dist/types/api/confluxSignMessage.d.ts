import { ConfluxMessageSignature } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';
export type ConfluxSignMessageParams = {
    path: string | number[];
    messageHex: string;
};
export declare function confluxSignMessage(connectId: string, deviceId: string, params: CommonParams & ConfluxSignMessageParams): Response<ConfluxMessageSignature>;
//# sourceMappingURL=confluxSignMessage.d.ts.map