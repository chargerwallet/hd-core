import { SuiSignMessage as HardwareSuiSignMessage } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class SuiSignMessage extends BaseMethod<HardwareSuiSignMessage> {
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
        model_touch: {
            min: string;
        };
    };
    run(): Promise<import("@chargerwallet/hd-transport").SuiMessageSignature>;
}
//# sourceMappingURL=SuiSignMessage.d.ts.map