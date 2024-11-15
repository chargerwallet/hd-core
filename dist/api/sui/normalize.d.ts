export declare const SUI_ADDRESS_LENGTH = 32;
export declare const PUBLIC_KEY_SIZE = 32;
export declare const SIGNATURE_SCHEME_TO_FLAG: {
    ED25519: number;
    Secp256k1: number;
};
export declare function normalizeSuiAddress(value: string, forceAdd0x?: boolean): string;
export declare function publicKeyToAddress(publicKey: string): string;
//# sourceMappingURL=normalize.d.ts.map