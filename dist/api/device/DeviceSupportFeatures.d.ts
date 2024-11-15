import { BaseMethod } from '../BaseMethod';
export default class DeviceSupportFeatures extends BaseMethod {
    init(): void;
    run(): Promise<{
        inputPinOnSoftware: import("../..").SupportFeatureType;
        modifyHomescreen: import("../..").SupportFeatureType;
        device: import("../..").KnownDevice | null;
    }>;
}
//# sourceMappingURL=DeviceSupportFeatures.d.ts.map