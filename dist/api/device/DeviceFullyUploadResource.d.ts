import { Deferred } from '@chargerwallet/hd-shared';
import { BaseMethod } from '../BaseMethod';
import type { Features } from '../../types';
export default class DeviceFullyUploadResource extends BaseMethod {
    checkPromise: Deferred<any> | null;
    init(): void;
    postTipMessage: (message: string) => void;
    isSupportResourceUpdate(features: Features, updateType: string): boolean;
    run(): Promise<void>;
}
//# sourceMappingURL=DeviceFullyUploadResource.d.ts.map