/// <reference types="node" />
import { SuiSignTx as HardwareSuiSignTx, TypedCall, SuiSignedTx } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import type { TypedResponseMessage } from '../../device/DeviceCommands';
type SuiSignTx = Omit<HardwareSuiSignTx, 'data_initial_chunk' | 'data_length'> & HardwareSuiSignTx;
export default class SuiSignTransaction extends BaseMethod<SuiSignTx> {
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
        model_touch: {
            min: string;
        };
    };
    supportChunkTransfer(): boolean;
    chunkByteSize: number;
    processTxRequest: (typedCall: TypedCall, res: TypedResponseMessage<'SuiSignedTx'> | TypedResponseMessage<'SuiTxRequest'>, data: Buffer, offset?: number) => Promise<SuiSignedTx>;
    run(): Promise<SuiSignedTx>;
}
export {};
//# sourceMappingURL=SuiSignTransaction.d.ts.map