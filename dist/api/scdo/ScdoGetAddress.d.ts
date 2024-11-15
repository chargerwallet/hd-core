import { ScdoGetAddress as HardwareScdoGetAddress } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { ScdoAddress } from '../../types';
export default class ScdoGetAddress extends BaseMethod<HardwareScdoGetAddress[]> {
    hasBundle: boolean;
    init(): void;
    getVersionRange(): {
        model_touch: {
            min: string;
        };
    };
    run(): Promise<ScdoAddress | ScdoAddress[]>;
}
//# sourceMappingURL=ScdoGetAddress.d.ts.map