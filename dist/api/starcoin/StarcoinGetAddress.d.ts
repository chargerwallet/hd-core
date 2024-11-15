import { StarcoinGetAddress as HardwareStarcoinGetAddress } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { StarcoinAddress } from '../../types/api/starcoinGetAddress';
export default class StarcoinGetAddress extends BaseMethod<HardwareStarcoinGetAddress[]> {
    hasBundle: boolean;
    init(): void;
    run(): Promise<StarcoinAddress | StarcoinAddress[]>;
}
//# sourceMappingURL=StarcoinGetAddress.d.ts.map