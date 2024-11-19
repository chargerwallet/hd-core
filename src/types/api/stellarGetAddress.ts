import { StellarAddress as HardwareStellarAddress } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';

export type StellarAddress = {
  path: string;
} & HardwareStellarAddress;

export type StellarGetAddressParams = {
  path: string | number[];
  showOnChargerWallet?: boolean;
};

export declare function stellarGetAddress(
  connectId: string,
  deviceId: string,
  params: CommonParams & StellarGetAddressParams
): Response<StellarAddress>;

export declare function stellarGetAddress(
  connectId: string,
  deviceId: string,
  params: CommonParams & { bundle?: StellarGetAddressParams[] }
): Response<Array<StellarAddress>>;
