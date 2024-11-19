import { AptosSignMessage as HardwareAptosSignMessage } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { AptosMessageSignature } from '../../types';
export default class AptosSignMessage extends BaseMethod<HardwareAptosSignMessage> {
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
    };
    run(): Promise<AptosMessageSignature>;
}
//# sourceMappingURL=AptosSignMessage.d.ts.map