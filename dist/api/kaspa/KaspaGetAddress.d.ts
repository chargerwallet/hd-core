import { KaspaGetAddress as HardwareKaspaGetAddress } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { KaspaAddress } from '../../types';
export default class KaspaGetAddress extends BaseMethod<HardwareKaspaGetAddress[]> {
    hasBundle: boolean;
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
        model_touch: {
            min: string;
        };
    };
    run(): Promise<KaspaAddress | KaspaAddress[]>;
}
//# sourceMappingURL=KaspaGetAddress.d.ts.map