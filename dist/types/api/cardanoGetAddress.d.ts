import type { CardanoAddressParametersType } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';
import type { CardanoAddressParameters } from './cardano';
export type CardanoGetAddressMethodParams = {
    addressParameters: CardanoAddressParameters;
    networkId: number;
    protocolMagic: number;
    derivationType: number;
    address?: string;
    isCheck?: boolean;
    showOnChargerWallet: boolean;
};
export type CardanoGetAddressParams = {
    address_parameters: CardanoAddressParametersType;
    network_id: number;
    protocol_magic: number;
    derivation_type: number;
    address: string;
    show_display: boolean;
};
export type CardanoAddress = {
    addressParameters: CardanoAddressParameters;
    protocolMagic: number;
    networkId: number;
    serializedPath: string;
    serializedStakingPath: string;
    address: string;
    xpub?: string;
    stakeAddress?: string;
};
export declare function cardanoGetAddress(connectId: string, deviceId: string, params: CommonParams & CardanoGetAddressMethodParams): Response<CardanoAddress>;
export declare function cardanoGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: CardanoGetAddressMethodParams[];
}): Response<CardanoAddress[]>;
//# sourceMappingURL=cardanoGetAddress.d.ts.map