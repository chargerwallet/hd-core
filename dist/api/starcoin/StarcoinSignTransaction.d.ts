import { StarcoinSignTx } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class StarcoinSignTransaction extends BaseMethod<StarcoinSignTx> {
    init(): void;
    run(): Promise<import("@chargerwallet/hd-transport").StarcoinSignedTx>;
}
//# sourceMappingURL=StarcoinSignTransaction.d.ts.map