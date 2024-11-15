import { PolkadotSignTx as HardwarePolkadotSignTx } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class PolkadotSignTransaction extends BaseMethod<HardwarePolkadotSignTx> {
    hasBundle: boolean;
    init(): void;
    getVersionRange(): import("../../types").DeviceFirmwareRange;
    run(): Promise<{
        path: string;
        signature: string;
    }>;
}
//# sourceMappingURL=PolkadotSignTransaction.d.ts.map