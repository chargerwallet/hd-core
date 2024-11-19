import { TonGetAddress as HardwareTonGetAddress } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { TonAddress } from '../../types';
export default class TonGetAddress extends BaseMethod<HardwareTonGetAddress[]> {
    hasBundle: boolean;
    shouldConfirm: boolean;
    init(): void;
    getVersionRange(): {
        model_touch: {
            min: string;
        };
    };
    run(): Promise<TonAddress | TonAddress[]>;
}
//# sourceMappingURL=TonGetAddress.d.ts.map