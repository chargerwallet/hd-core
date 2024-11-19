import { SignedPsbt } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';
export type BTCSignPsbtParams = {
    psbt: string;
    coin?: string;
};
export declare function btcSignPsbt(connectId: string, deviceId: string, params: CommonParams & BTCSignPsbtParams): Response<SignedPsbt>;
//# sourceMappingURL=btcSignPsbt.d.ts.map