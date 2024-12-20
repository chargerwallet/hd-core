import type { PROTO } from '../../../constants';
export type Path = number[];
export type InputWithPath = {
    input: PROTO.CardanoTxInput;
    path?: Path;
};
export type CollateralInputWithPath = {
    collateralInput: PROTO.CardanoTxCollateralInput;
    path?: Path;
};
export declare const transformInput: (input: any) => InputWithPath;
export declare const transformCollateralInput: (collateralInput: any) => CollateralInputWithPath;
export declare const transformReferenceInput: (referenceInput: any) => PROTO.CardanoTxReferenceInput;
//# sourceMappingURL=cardanoInputs.d.ts.map