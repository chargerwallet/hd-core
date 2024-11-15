import { StarcoinGetPublicKey as HardwareStarcoinGetPublicKey } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { StarcoinPublicKey } from '../../types/api/starcoinGetPublicKey';
export default class StarcoinGetPublicKey extends BaseMethod<HardwareStarcoinGetPublicKey[]> {
    hasBundle: boolean;
    init(): void;
    run(): Promise<StarcoinPublicKey | StarcoinPublicKey[]>;
}
//# sourceMappingURL=StarcoinGetPublicKey.d.ts.map