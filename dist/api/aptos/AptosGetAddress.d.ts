import { AptosGetAddress as HardwareAptosGetAddress } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { AptosAddress } from '../../types';
export default class AptosGetAddress extends BaseMethod<HardwareAptosGetAddress[]> {
    hasBundle: boolean;
    shouldConfirm: boolean;
    init(): void;
    publicKeyToAddress(publicKey: string): string;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
    };
    run(): Promise<AptosAddress | AptosAddress[]>;
}
//# sourceMappingURL=AptosGetAddress.d.ts.map