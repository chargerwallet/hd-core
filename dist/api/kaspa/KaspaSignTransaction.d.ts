import { TypedCall } from '@chargerwallet/hd-transport';
import { TypedResponseMessage } from '../../device/DeviceCommands';
import { BaseMethod } from '../BaseMethod';
import { KaspaSignTransactionParams, KaspaSignature } from '../../types';
export default class KaspaSignTransaction extends BaseMethod<KaspaSignTransactionParams> {
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
    processTxRequest(typedCall: TypedCall, res: TypedResponseMessage<'KaspaTxInputRequest'> | TypedResponseMessage<'KaspaSignedTx'>, index: number, signature: KaspaSignature[]): Promise<KaspaSignature[]>;
    run(): Promise<KaspaSignature[]>;
}
//# sourceMappingURL=KaspaSignTransaction.d.ts.map