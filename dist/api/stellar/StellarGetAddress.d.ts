import { StellarGetAddress as HardwareStellarGetAddress } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { StellarAddress } from '../../types';
export default class StellarGetAddress extends BaseMethod<HardwareStellarGetAddress[]> {
    hasBundle: boolean;
    init(): void;
    run(): Promise<StellarAddress | StellarAddress[]>;
}
//# sourceMappingURL=StellarGetAddress.d.ts.map