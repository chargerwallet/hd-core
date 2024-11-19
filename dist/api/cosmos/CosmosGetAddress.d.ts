import { CosmosGetAddress as HardwareCosmosGetAddress } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { CosmosAddress } from '../../types';
export default class CosmosGetAddress extends BaseMethod<HardwareCosmosGetAddress[]> {
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
    run(): Promise<CosmosAddress | CosmosAddress[]>;
}
//# sourceMappingURL=CosmosGetAddress.d.ts.map