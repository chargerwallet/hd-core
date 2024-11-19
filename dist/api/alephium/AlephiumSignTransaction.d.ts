/// <reference types="node" />
import { type AlephiumSignedTx, type AlephiumSignTx as HardwareAlephiumSignTx, TypedCall } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import type { TypedResponseMessage } from '../../device/DeviceCommands';
export default class AlephiumSignTransaction extends BaseMethod<HardwareAlephiumSignTx> {
    init(): void;
    getVersionRange(): {
        model_touch: {
            min: string;
        };
    };
    chunkByteSize: number;
    processTxRequest: (typedCall: TypedCall, res: TypedResponseMessage<'AlephiumSignedTx'> | TypedResponseMessage<'AlephiumTxRequest'> | TypedResponseMessage<'AlephiumBytecodeRequest'>, data: Buffer, scriptOpt?: Buffer, dataOffset?: number) => Promise<AlephiumSignedTx>;
    run(): Promise<AlephiumSignedTx>;
}
//# sourceMappingURL=AlephiumSignTransaction.d.ts.map