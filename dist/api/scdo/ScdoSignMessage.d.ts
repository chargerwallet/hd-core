import { ScdoSignMessage as HardwareScdoSignMessage } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class ScdoSignMessage extends BaseMethod<HardwareScdoSignMessage> {
    init(): void;
    getVersionRange(): {
        model_touch: {
            min: string;
        };
    };
    run(): Promise<import("@chargerwallet/hd-transport").ScdoSignedMessage>;
}
//# sourceMappingURL=ScdoSignMessage.d.ts.map