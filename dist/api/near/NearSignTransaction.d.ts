import { NearSignTx as HardwareNearSignTx } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class NearSignTransaction extends BaseMethod<HardwareNearSignTx> {
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
    };
    run(): Promise<import("@chargerwallet/hd-transport").NearSignedTx>;
}
//# sourceMappingURL=NearSignTransaction.d.ts.map