import { ResourceUpload, Success } from '@chargerwallet/hd-transport';
import { TypedResponseMessage } from '../../device/DeviceCommands';
import { BaseMethod } from '../BaseMethod';
export default class DeviceUploadResource extends BaseMethod<ResourceUpload> {
    paramsData: {
        data: Uint8Array;
        thumbnailData: Uint8Array;
    };
    getVersionRange(): {
        model_touch: {
            min: string;
        };
    };
    checkUploadNFTSupport(): void;
    init(): void;
    processResourceRequest: (res: TypedResponseMessage<'ResourceRequest'> | TypedResponseMessage<'ZoomRequest'> | TypedResponseMessage<'Success'>) => Promise<Success>;
    run(): Promise<Success>;
}
//# sourceMappingURL=DeviceUploadResource.d.ts.map