import { PolkadotAddress as HardwarePolkadotAddress } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';
export type PolkadotAddress = {
    path: string;
    pub: string;
    publicKey?: string;
} & HardwarePolkadotAddress;
export type PolkadotGetAddressParams = {
    path: string | number[];
    prefix: number;
    network: string;
    showOnChargerWallet?: boolean;
};
export declare function polkadotGetAddress(connectId: string, deviceId: string, params: CommonParams & PolkadotGetAddressParams): Response<PolkadotAddress>;
export declare function polkadotGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: PolkadotGetAddressParams[];
}): Response<Array<PolkadotAddress>>;
//# sourceMappingURL=polkadotGetAddress.d.ts.map