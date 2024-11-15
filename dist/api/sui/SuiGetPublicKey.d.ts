import { BaseMethod } from '../BaseMethod';
import { SuiPublicKey } from '../../types';
export default class SuiGetPublicKey extends BaseMethod<any> {
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
    run(): Promise<SuiPublicKey | SuiPublicKey[]>;
}
//# sourceMappingURL=SuiGetPublicKey.d.ts.map