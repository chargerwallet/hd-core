/// <reference types="node" />
import type { NervosSignTx as HardwareNervosSignTx, TypedCall } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import type { NervosSignedTx } from '../../types';
import type { TypedResponseMessage } from '../../device/DeviceCommands';
type NervosSignTx = Omit<HardwareNervosSignTx, 'data_initial_chunk' | 'data_length'> & {
    raw_tx: Buffer;
};
export default class NervosSignTransaction extends BaseMethod<NervosSignTx> {
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
    chunkByteSize: number;
    processTxRequest: (typedCall: TypedCall, res: TypedResponseMessage<'NervosSignedTx'> | TypedResponseMessage<'NervosTxRequest'>, data: Buffer, offset?: number) => Promise<NervosSignedTx>;
    run(): Promise<NervosSignedTx>;
}
export {};
//# sourceMappingURL=NervosSignTransaction.d.ts.map