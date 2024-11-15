/// <reference types="node" />
import { KaspaSignTransactionParams } from '../../../types';
export declare function zeroHash(): Buffer;
export declare function zeroSubnetworkID(): Buffer;
export declare function serialize(transaction: KaspaSignTransactionParams, inputNumber: number): {
    hash: Buffer;
    raw: Buffer;
};
//# sourceMappingURL=TransferSerialize.d.ts.map