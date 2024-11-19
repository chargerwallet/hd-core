import { BaseMethod } from './BaseMethod';
export default class RequestWebUsbDevice extends BaseMethod {
    init(): void;
    run(): Promise<{
        device: import("..").KnownDevice | null;
    }>;
}
//# sourceMappingURL=RequestWebUsbDevice.d.ts.map