import { NEMGetAddress as HardwareNEMGetAddress } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { NEMAddress } from '../../types';
export default class NEMGetAddress extends BaseMethod<HardwareNEMGetAddress[]> {
    hasBundle: boolean;
    init(): void;
    run(): Promise<NEMAddress | NEMAddress[]>;
}
//# sourceMappingURL=NEMGetAddress.d.ts.map