import type { NervosGetAddress as HardwareNervosGetAddress } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import type { NervosAddress } from '../../types';
export default class NervosGetAddress extends BaseMethod<HardwareNervosGetAddress[]> {
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
    run(): Promise<NervosAddress | NervosAddress[]>;
}
//# sourceMappingURL=NervosGetAddress.d.ts.map