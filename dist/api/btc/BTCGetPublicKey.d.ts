import { GetPublicKey } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { BTCPublicKey } from '../../types/api/btcGetPublicKey';
export default class BTCGetPublicKey extends BaseMethod<GetPublicKey[]> {
    hasBundle: boolean;
    init(): void;
    private isBtcNetwork;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
        model_touch: {
            min: string;
        };
    } | {
        model_mini?: undefined;
        model_touch?: undefined;
    };
    run(): Promise<BTCPublicKey | BTCPublicKey[]>;
}
//# sourceMappingURL=BTCGetPublicKey.d.ts.map