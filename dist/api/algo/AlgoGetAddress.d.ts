import { AlgorandGetAddress as HardwareAlgoGetAddress } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { AlgoAddress } from '../../types';
export default class AlgoGetAddress extends BaseMethod<HardwareAlgoGetAddress[]> {
    hasBundle: boolean;
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
    };
    run(): Promise<AlgoAddress | AlgoAddress[]>;
}
//# sourceMappingURL=AlgoGetAddress.d.ts.map