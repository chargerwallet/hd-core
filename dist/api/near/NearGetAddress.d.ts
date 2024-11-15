import { NearGetAddress as HardwareNearGetAddress } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { NearAddress } from '../../types';
export default class NearGetAddress extends BaseMethod<HardwareNearGetAddress[]> {
    hasBundle: boolean;
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
    };
    run(): Promise<NearAddress | NearAddress[]>;
}
//# sourceMappingURL=NearGetAddress.d.ts.map