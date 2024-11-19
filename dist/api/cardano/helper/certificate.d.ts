import type { CardanoCertificate, CertificateWithPoolOwnersAndRelays } from '../../../types/api/cardano';
import { PROTO } from '../../../constants';
export type PoolParametersWithOwnersAndRelays = {
    poolParameters?: PROTO.CardanoPoolParametersType;
    poolOwners: PROTO.CardanoPoolOwner[];
    poolRelays: PROTO.CardanoPoolRelayParameters[];
};
export declare const transformCertificate: (certificate: CardanoCertificate) => CertificateWithPoolOwnersAndRelays;
//# sourceMappingURL=certificate.d.ts.map