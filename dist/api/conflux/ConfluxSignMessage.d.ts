import { ConfluxSignMessage as HardwareConfluxSignMessage } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class ConfluxSignMessage extends BaseMethod<HardwareConfluxSignMessage> {
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
    };
    run(): Promise<import("@chargerwallet/hd-transport").ConfluxMessageSignature>;
}
//# sourceMappingURL=ConfluxSignMessage.d.ts.map