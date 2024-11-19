import { TypedCall } from '@chargerwallet/hd-transport';
import { TypedResponseMessage } from '../../device/DeviceCommands';
import { BaseMethod } from '../BaseMethod';
import { NexaSignTransactionParams, NexaSignature } from '../../types';
export default class NexaSignTransaction extends BaseMethod<NexaSignTransactionParams> {
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
    processTxRequest(typedCall: TypedCall, res: TypedResponseMessage<'NexaTxInputRequest'> | TypedResponseMessage<'NexaSignedTx'>, index: number, signatures: NexaSignature[]): Promise<NexaSignature[]>;
    run(): Promise<NexaSignature[]>;
}
//# sourceMappingURL=NexaSignTransaction.d.ts.map