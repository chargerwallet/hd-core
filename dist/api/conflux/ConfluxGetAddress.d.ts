import { ConfluxGetAddress as HardwareConfluxGetAddress } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { ConfluxAddress } from '../../types/api/confluxGetAddress';
export default class ConfluxGetAddress extends BaseMethod<HardwareConfluxGetAddress[]> {
    hasBundle: boolean;
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
    };
    run(): Promise<ConfluxAddress | ConfluxAddress[]>;
}
//# sourceMappingURL=ConfluxGetAddress.d.ts.map