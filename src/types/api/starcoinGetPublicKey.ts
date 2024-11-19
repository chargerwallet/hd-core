import { StarcoinPublicKey as HardwareStarcoinPublicKey } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';

export type StarcoinPublicKey = {
  path: string;
} & HardwareStarcoinPublicKey;

export type StarcoinGetPublicKeyParams = {
  path: string | number[];
  showOnChargerWallet?: boolean;
};

export declare function starcoinGetPublicKey(
  connectId: string,
  deviceId: string,
  params: CommonParams & StarcoinGetPublicKeyParams
): Response<StarcoinPublicKey>;

export declare function starcoinGetPublicKey(
  connectId: string,
  deviceId: string,
  params: CommonParams & { bundle?: StarcoinGetPublicKeyParams[] }
): Response<Array<StarcoinPublicKey>>;