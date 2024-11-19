import type { CardanoAuxiliaryData } from '../../../types/api/cardano';
import { PROTO } from '../../../constants';
export declare const transformAuxiliaryData: (auxiliaryData: CardanoAuxiliaryData) => PROTO.CardanoTxAuxiliaryData;
export declare const modifyAuxiliaryDataForBackwardsCompatibility: (auxiliary_data: PROTO.CardanoTxAuxiliaryData) => PROTO.CardanoTxAuxiliaryData;
//# sourceMappingURL=auxiliaryData.d.ts.map