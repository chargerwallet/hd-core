import type { CommonParams, Response } from '../params';
export type XrpAddress = {
    path: string;
    pub?: string;
    publicKey?: string;
    address: string;
};
export type XrpGetAddressParams = {
    path: string | number[];
    showOnChargerWallet?: boolean;
};
export declare function xrpGetAddress(connectId: string, deviceId: string, params: CommonParams & XrpGetAddressParams): Response<XrpAddress>;
export declare function xrpGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: XrpGetAddressParams[];
}): Response<XrpAddress[]>;
//# sourceMappingURL=xrpGetAddress.d.ts.map