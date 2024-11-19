import { CipherKeyValue as HardwareCipherKeyValue } from '@chargerwallet/hd-transport';
import { BaseMethod } from './BaseMethod';
import { CipheredKeyValue } from '../types';
export default class CipherKeyValue extends BaseMethod<HardwareCipherKeyValue[]> {
    hasBundle: boolean;
    init(): void;
    run(): Promise<CipheredKeyValue | CipheredKeyValue[]>;
}
//# sourceMappingURL=CipherKeyValue.d.ts.map