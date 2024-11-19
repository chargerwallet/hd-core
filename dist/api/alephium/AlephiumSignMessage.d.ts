import { AlephiumSignMessage as HardwareAlephiumSignMessage } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class AlephiumSignMessage extends BaseMethod<HardwareAlephiumSignMessage> {
    init(): void;
    getVersionRange(): {
        model_touch: {
            min: string;
        };
    };
    run(): Promise<import("@chargerwallet/hd-transport").AlephiumMessageSignature>;
}
//# sourceMappingURL=AlephiumSignMessage.d.ts.map