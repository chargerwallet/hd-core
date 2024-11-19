import { BaseMethod } from '../BaseMethod';
import { CardanoPublicKeyParams, CardanoPublicKey } from '../../types/api/cardanoGetPublicKey';
export default class CardanoGetPublicKey extends BaseMethod<CardanoPublicKeyParams[]> {
    hasBundle?: boolean;
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
        model_touch: {
            min: string;
        };
    };
    run(): Promise<CardanoPublicKey | CardanoPublicKey[]>;
}
//# sourceMappingURL=CardanoGetPublicKey.d.ts.map