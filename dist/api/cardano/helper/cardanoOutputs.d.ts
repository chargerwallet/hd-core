import type { PROTO } from '../../../constants';
import type { AssetGroupWithTokens } from '../../../types/api/cardano';
export type OutputWithData = {
    output: PROTO.CardanoTxOutput;
    tokenBundle?: AssetGroupWithTokens[];
    inlineDatum?: string;
    referenceScript?: string;
};
export declare const transformOutput: (output: any) => OutputWithData;
export declare const sendOutput: (typedCall: any, outputWithData: OutputWithData) => Promise<void>;
//# sourceMappingURL=cardanoOutputs.d.ts.map