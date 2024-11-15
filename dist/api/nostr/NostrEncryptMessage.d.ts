import { NostrEncryptMessage as EncryptMessage } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class NostrEncryptMessage extends BaseMethod<EncryptMessage> {
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
        plaintext: string;
        encryptedMessage: string;
    }>;
}
//# sourceMappingURL=NostrEncryptMessage.d.ts.map