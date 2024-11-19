/// <reference types="node" />
import { ScdoSignTx as HardwareScdoSignTx, TypedCall, ScdoSignedTx } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import type { TypedResponseMessage } from '../../device/DeviceCommands';
export default class ScdoSignTransaction extends BaseMethod<HardwareScdoSignTx> {
    init(): void;
    getVersionRange(): {
        model_touch: {
            min: string;
        };
    };
    chunkByteSize: number;
    processTxRequest: (typedCall: TypedCall, res: TypedResponseMessage<'ScdoSignedTx'>, data: Buffer, offset?: number) => Promise<ScdoSignedTx>;
    run(): Promise<ScdoSignedTx>;
}
//# sourceMappingURL=ScdoSignTransaction.d.ts.map