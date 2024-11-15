import { TronGetAddress as HardwareTronGetAddress } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { TronAddress } from '../../types';
export default class TronGetAddress extends BaseMethod<HardwareTronGetAddress[]> {
    hasBundle: boolean;
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
    };
    run(): Promise<TronAddress | TronAddress[]>;
}
//# sourceMappingURL=TronGetAddress.d.ts.map