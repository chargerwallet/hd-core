import { BaseMethod } from '../BaseMethod';
import { AptosPublicKey } from '../../types';
export default class AptosGetPublicKey extends BaseMethod<any> {
    hasBundle: boolean;
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
    };
    run(): Promise<AptosPublicKey | AptosPublicKey[]>;
}
//# sourceMappingURL=AptosGetPublicKey.d.ts.map