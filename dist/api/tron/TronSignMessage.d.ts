import { TronSignMessage as HardwareTronSignMessage } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class TronSignMessage extends BaseMethod<HardwareTronSignMessage> {
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
    };
    run(): Promise<import("@chargerwallet/hd-transport").TronMessageSignature>;
}
//# sourceMappingURL=TronSignMessage.d.ts.map