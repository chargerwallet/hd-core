import { SolanaGetAddress } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { SolanaAddress } from '../../types';
export default class SolGetAddress extends BaseMethod<SolanaGetAddress[]> {
    hasBundle: boolean;
    init(): void;
    run(): Promise<SolanaAddress | SolanaAddress[]>;
}
//# sourceMappingURL=SolGetAddress.d.ts.map