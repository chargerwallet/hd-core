import { Deferred } from '@chargerwallet/hd-shared';
import { BaseMethod } from './BaseMethod';
type Params = {
    binary?: ArrayBuffer;
    version?: number[];
    updateType: 'firmware' | 'ble';
};
export default class FirmwareUpdate extends BaseMethod<Params> {
    checkPromise: Deferred<any> | null;
    init(): void;
    postTipMessage: (message: string) => void;
    checkDeviceToBootloader(connectId: string | undefined): void;
    run(): Promise<import("packages/hd-transport/dist").Success>;
}
export {};
//# sourceMappingURL=FirmwareUpdate.d.ts.map