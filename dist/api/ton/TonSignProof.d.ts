import { TonSignProof as HardwareTonSignProof } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class TonSignProof extends BaseMethod<HardwareTonSignProof> {
    init(): void;
    getVersionRange(): {
        model_touch: {
            min: string;
        };
    };
    run(): Promise<import("@chargerwallet/hd-transport").TonSignedProof>;
}
//# sourceMappingURL=TonSignProof.d.ts.map