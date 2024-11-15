import { SignMessage } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class BTCSignMessage extends BaseMethod<SignMessage> {
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
        model_touch: {
            min: string;
        };
    } | {
        model_mini?: undefined;
        model_touch?: undefined;
    } | {
        pro: {
            min: string;
        };
    };
    run(): Promise<import("@chargerwallet/hd-transport").MessageSignature>;
}
//# sourceMappingURL=BTCSignMessage.d.ts.map