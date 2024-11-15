import { ConfluxSignMessageCIP23 as HardwareConfluxSignMessageCIP23 } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class ConfluxSignMessageCIP23 extends BaseMethod<HardwareConfluxSignMessageCIP23> {
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
    };
    run(): Promise<import("@chargerwallet/hd-transport").ConfluxMessageSignature>;
}
//# sourceMappingURL=ConfluxSignMessageCIP23.d.ts.map