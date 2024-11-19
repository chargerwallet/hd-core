import { SolanaAddress as HardwareSolanaAddress } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';

export type SolanaAddress = {
  path: string;
} & HardwareSolanaAddress;

export type SolanaGetAddressParams = {
  path: string | number[];
  showOnChargerWallet?: boolean;
};

export declare function solGetAddress(
  connectId: string,
  deviceId: string,
  params: CommonParams & SolanaGetAddressParams
): Response<SolanaAddress>;

export declare function solGetAddress(
  connectId: string,
  deviceId: string,
  params: CommonParams & { bundle?: SolanaGetAddressParams[] }
): Response<Array<SolanaAddress>>;
