import { SignPsbt } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class BTCSignPsbt extends BaseMethod<SignPsbt> {
    init(): void;
    getVersionRange(): {
        pro: {
            min: string;
        };
    };
    run(): Promise<import("@chargerwallet/hd-transport").SignedPsbt>;
}
//# sourceMappingURL=BTCSignPsbt.d.ts.map