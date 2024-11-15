import { PROTO } from '../../../constants';
import type { CardanoAddressParameters } from '../../../types/api/cardano';
export declare const validateAddressParameters: (addressParameters: CardanoAddressParameters) => void;
export declare const addressParametersToProto: (addressParameters: CardanoAddressParameters) => PROTO.CardanoAddressParametersType;
export declare const addressParametersFromProto: (addressParameters: PROTO.CardanoAddressParametersType) => CardanoAddressParameters;
export declare const modifyAddressParametersForBackwardsCompatibility: (address_parameters: PROTO.CardanoAddressParametersType) => PROTO.CardanoAddressParametersType;
//# sourceMappingURL=addressParameters.d.ts.map