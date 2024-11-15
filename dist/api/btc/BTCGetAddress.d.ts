import { GetAddress } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { BTCAddress } from '../../types/api/btcGetAddress';
export default class BTCGetAddress extends BaseMethod<GetAddress[]> {
    hasBundle: boolean;
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
    run(): Promise<BTCAddress | BTCAddress[]>;
}
//# sourceMappingURL=BTCGetAddress.d.ts.map