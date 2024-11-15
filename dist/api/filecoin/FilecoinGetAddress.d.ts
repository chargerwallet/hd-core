import { FilecoinGetAddress as HardwareFilecoinGetAddress } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { FilecoinAddress } from '../../types';
export default class FilecoinGetAddress extends BaseMethod<HardwareFilecoinGetAddress[]> {
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
    run(): Promise<FilecoinAddress | FilecoinAddress[]>;
}
//# sourceMappingURL=FilecoinGetAddress.d.ts.map