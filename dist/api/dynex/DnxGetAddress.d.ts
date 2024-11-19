import type { DnxGetAddress as HardwareDnxGetAddress } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import type { DnxAddress } from '../../types';
export default class DnxGetAddress extends BaseMethod<HardwareDnxGetAddress[]> {
    hasBundle: boolean;
    init(): void;
    getVersionRange(): {
        classic: {
            min: string;
        };
    };
    run(): Promise<DnxAddress | DnxAddress[]>;
}
//# sourceMappingURL=DnxGetAddress.d.ts.map