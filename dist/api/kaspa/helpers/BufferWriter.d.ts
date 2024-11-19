/// <reference types="node" />
import BigNumber from 'bignumber.js';
import { Buffer } from 'buffer';
declare class BufferWriter {
    bufLen: number;
    bufs: Buffer[];
    constructor(obj?: Partial<BufferWriter>);
    set(obj: Partial<BufferWriter>): this;
    toBuffer(): Buffer;
    concat(): Buffer;
    write(buf: Buffer): this;
    writeReverse(buf: Buffer): this;
    writeVarBytes(buf: Buffer): this;
    writeUInt8(n: number): this;
    writeUInt16BE(n: number): this;
    writeUInt16LE(n: number): this;
    writeUInt32BE(n: number): this;
    writeInt32LE(n: number): this;
    writeUInt32LE(n: number): this;
    writeUInt64BEBN(bn: BigNumber): this;
    writeUInt64LE(bn: BigNumber): this;
    writeVarintNum(n: number): this;
    writeVarintBN(bn: BigNumber): this;
    static varintBufNum(n: number): Buffer;
    static varintBufBN(bn: BigNumber): Buffer;
}
export default BufferWriter;
//# sourceMappingURL=BufferWriter.d.ts.map