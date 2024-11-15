import { Deferred } from '@chargerwallet/hd-shared';
import { BaseMethod } from './BaseMethod';
import type { Features } from '../types';
type Params = {
    binary?: ArrayBuffer;
    version?: number[];
    updateType: 'firmware' | 'ble';
    forcedUpdateRes?: boolean;
    isUpdateBootloader?: boolean;
};
export default class FirmwareUpdateV2 extends BaseMethod<Params> {
    checkPromise: Deferred<any> | null;
    init(): void;
    postTipMessage: (message: string) => void;
    checkDeviceToBootloader(connectId: string | undefined): void;
    isEnteredManuallyBoot(features: Features): boolean;
    isSupportResourceUpdate(features: Features, updateType: string): boolean;
    checkVersionForCopyTouchResource(features?: Features): void;
    run(): Promise<import("packages/hd-transport/dist").Success>;
}
export {};
//# sourceMappingURL=FirmwareUpdateV2.d.ts.map