import { VerifyMessage } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class BTCVerifyMessage extends BaseMethod<VerifyMessage> {
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
    };
    run(): Promise<import("@chargerwallet/hd-transport").Success>;
}
//# sourceMappingURL=BTCVerifyMessage.d.ts.map