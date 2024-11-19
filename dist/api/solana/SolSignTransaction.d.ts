import { SolanaSignTx as HardwareSolanaSignTx } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { SolanaSignedTx } from '../../types';
export default class SolSignTransaction extends BaseMethod<HardwareSolanaSignTx[]> {
    hasBundle: boolean;
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
        model_touch: {
            min: string;
        };
        classic?: undefined;
        mini?: undefined;
    } | {
        classic: {
            min: string;
        };
        mini: {
            min: string;
        };
        model_mini?: undefined;
        model_touch?: undefined;
    };
    isVersionedTx(hexString: string): boolean;
    existsVersionedTx(): boolean;
    run(): Promise<SolanaSignedTx | SolanaSignedTx[]>;
}
//# sourceMappingURL=SolSignTransaction.d.ts.map