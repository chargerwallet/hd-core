import { NostrDecryptMessage as DecryptMessage } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class NostrDecryptMessage extends BaseMethod<DecryptMessage> {
    hasBundle: boolean;
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
        model_touch: {
            min: string;
        };
    };
    run(): Promise<{
        path: string;
        pubkey: string;
        ciphertext: string;
        decryptedMessage: string;
    }>;
}
//# sourceMappingURL=NostrDecryptMessage.d.ts.map