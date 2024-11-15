import { SuiGetAddress as HardwareSuiGetAddress } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { SuiAddress } from '../../types';
export default class SuiGetAddress extends BaseMethod<HardwareSuiGetAddress[]> {
    hasBundle: boolean;
    shouldConfirm: boolean;
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
        model_touch: {
            min: string;
        };
    };
    run(): Promise<SuiAddress | SuiAddress[]>;
}
//# sourceMappingURL=SuiGetAddress.d.ts.map