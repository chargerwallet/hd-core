import { AlephiumGetAddress as HardwareAlephiumGetAddress } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { AlephiumAddress } from '../../types';
export default class AlephiumGetAddress extends BaseMethod<HardwareAlephiumGetAddress[]> {
    hasBundle: boolean;
    init(): void;
    getVersionRange(): {
        model_touch: {
            min: string;
        };
    };
    run(): Promise<AlephiumAddress | AlephiumAddress[]>;
}
//# sourceMappingURL=AlephiumGetAddress.d.ts.map