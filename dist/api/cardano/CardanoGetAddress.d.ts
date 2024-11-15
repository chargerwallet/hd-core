import { BaseMethod } from '../BaseMethod';
import { CardanoGetAddressParams, CardanoAddress } from '../../types/api/cardanoGetAddress';
export default class CardanoGetAddress extends BaseMethod<CardanoGetAddressParams[]> {
    hasBundle?: boolean;
    isCheck?: boolean;
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
        model_touch: {
            min: string;
        };
    };
    run(): Promise<CardanoAddress | CardanoAddress[]>;
}
//# sourceMappingURL=CardanoGetAddress.d.ts.map