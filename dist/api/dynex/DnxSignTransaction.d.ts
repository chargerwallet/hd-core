import type { DnxSignTx, TypedCall } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import type { DnxSignature } from '../../types';
import { TypedResponseMessage } from '../../device/DeviceCommands';
export default class DnxSignTransaction extends BaseMethod<DnxSignTx> {
    hasBundle: boolean;
    init(): void;
    getVersionRange(): {
        classic: {
            min: string;
        };
    };
    processTxRequest(typedCall: TypedCall, res: TypedResponseMessage<'DnxInputRequest'>, signature: Partial<DnxSignature>): Promise<DnxSignature>;
    run(): Promise<DnxSignature>;
}
//# sourceMappingURL=DnxSignTransaction.d.ts.map