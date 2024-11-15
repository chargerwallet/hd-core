import { PolkadotGetAddress as HardwarePolkadotGetAddress } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { PolkadotAddress } from '../../types';
export default class PolkadotGetAddress extends BaseMethod<HardwarePolkadotGetAddress[]> {
    hasBundle: boolean;
    init(): void;
    getVersionRange(): import("../../types").DeviceFirmwareRange | {
        model_mini: {
            min: string;
        };
        model_touch: {
            min: string;
        };
    };
    run(): Promise<PolkadotAddress | PolkadotAddress[]>;
}
//# sourceMappingURL=PolkadotGetAddress.d.ts.map