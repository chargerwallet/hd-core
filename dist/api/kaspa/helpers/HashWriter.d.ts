/// <reference types="node" />
import BigNumber from 'bignumber.js';
import BufferWriter from './BufferWriter';
declare class HashWriter {
    private blake2b;
    bw: BufferWriter;
    hash: {
        update: (buf: Buffer) => void;
        digest: () => Buffer;
    };
    constructor();
    writeUInt8(value: number): void;
    writeUInt16LE(value: number): void;
    writeUInt32LE(value: number): void;
    writeUInt64LE(value: BigNumber.Value): void;
    writeVarBytes(buf: Buffer): void;
    writeHash(buf: Buffer): void;
    finalize(): Buffer;
    toBuffer(): Buffer;
}
export { HashWriter };
//# sourceMappingURL=HashWriter.d.ts.map