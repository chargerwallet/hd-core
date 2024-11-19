import type { CommonParams, Response } from '../params';
export type NostrPublicKey = {
    npub?: string;
    pub?: string;
    publicKey?: string;
    path: string;
};
export interface NostrPublicKeyParams {
    path: string | number[];
    showOnChargerWallet?: boolean;
}
export declare function nostrGetPublicKey(connectId: string, deviceId: string, params: CommonParams & NostrPublicKeyParams): Response<NostrPublicKey>;
export declare function nostrGetPublicKey(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: NostrPublicKeyParams[];
}): Response<Array<NostrPublicKey>>;
//# sourceMappingURL=nostrGetPublicKey.d.ts.map