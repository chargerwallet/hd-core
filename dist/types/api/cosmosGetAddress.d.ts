import { CosmosAddress as HardwareCosmosAddress } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';
export type CosmosAddress = {
    path: string;
} & HardwareCosmosAddress;
export type CosmosGetAddressParams = {
    path: string | number[];
    hrp?: string;
    showOnChargerWallet?: boolean;
};
export declare function cosmosGetAddress(connectId: string, deviceId: string, params: CommonParams & CosmosGetAddressParams): Response<CosmosAddress>;
export declare function cosmosGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: CosmosGetAddressParams[];
}): Response<Array<CosmosAddress>>;
//# sourceMappingURL=cosmosGetAddress.d.ts.map