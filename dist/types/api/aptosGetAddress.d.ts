import { AptosAddress as HardwareAptosAddress } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';
export type AptosAddress = {
    path: string;
    pub?: string;
    publicKey?: string;
} & HardwareAptosAddress;
export type AptosGetAddressParams = {
    path: string | number[];
    showOnChargerWallet?: boolean;
};
export declare function aptosGetAddress(connectId: string, deviceId: string, params: CommonParams & AptosGetAddressParams): Response<AptosAddress>;
export declare function aptosGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: AptosGetAddressParams[];
}): Response<Array<AptosAddress>>;
//# sourceMappingURL=aptosGetAddress.d.ts.map