import type { CommonParams, Response } from '../params';
export type EVMAddress = {
    path: string;
    address: string;
};
export type EVMGetAddressParams = {
    path: string | number[];
    showOnChargerWallet?: boolean;
    chainId?: number;
};
export declare function evmGetAddress(connectId: string, deviceId: string, params: CommonParams & EVMGetAddressParams): Response<EVMAddress>;
export declare function evmGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: EVMGetAddressParams[];
}): Response<Array<EVMAddress>>;
//# sourceMappingURL=evmGetAddress.d.ts.map