import { TonSignMessage as HardwareTonSignMessage } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { DeviceFirmwareRange } from '../../types';
export default class TonSignMessage extends BaseMethod<HardwareTonSignMessage> {
    init(): void;
    getVersionRange(): {
        model_touch: {
            min: string;
        };
        classic1s: {
            min: string;
        };
    };
    getSupportJettonAmountBytesVersionRange(): DeviceFirmwareRange;
    checkSupportJettonAmountBytes(): boolean;
    getFixCommentErrorVersionRange(): DeviceFirmwareRange;
    checkFixCommentError(): void;
    run(): Promise<{
        skip_validate: boolean;
        signature?: string | undefined;
        signning_message?: string | undefined;
    }>;
}
//# sourceMappingURL=TonSignMessage.d.ts.map