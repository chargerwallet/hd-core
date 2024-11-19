import { Success } from '@chargerwallet/hd-transport';
import type { Response } from '../params';

export declare function deviceUpdateBootloader(
  connectId: string,
  params?: {
    binary?: ArrayBuffer;
  }
): Response<Success>;
