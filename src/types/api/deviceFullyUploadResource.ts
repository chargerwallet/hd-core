import { Success } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';

export declare function deviceFullyUploadResource(
  connectId: string,
  params: CommonParams & {
    binary?: ArrayBuffer;
  }
): Response<Success>;
