import { Success } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';

export declare function deviceLock(connectId: string, params: CommonParams): Response<Success>;
