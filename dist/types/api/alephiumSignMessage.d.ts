import { AlephiumMessageSignature } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';
export type AlephiumSignMessageParams = {
    path: string | number[];
    messageHex: string;
    messageType: 'alephium' | 'sha256' | 'blake2b' | 'identity';
};
export declare function alephiumSignMessage(connectId: string, deviceId: string, params: CommonParams & AlephiumSignMessageParams): Response<AlephiumMessageSignature>;
//# sourceMappingURL=alephiumSignMessage.d.ts.map