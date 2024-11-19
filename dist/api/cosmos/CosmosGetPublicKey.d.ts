import { BaseMethod } from '../BaseMethod';
import { CosmosAddress } from '../../types';
export default class CosmosGetPublicKey extends BaseMethod<any> {
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
//# sourceMappingURL=CosmosGetPublicKey.d.ts.map