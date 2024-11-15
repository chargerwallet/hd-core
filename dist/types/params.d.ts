export interface CommonParams {
    keepSession?: boolean;
    retryCount?: number;
    pollIntervalTime?: number;
    timeout?: number;
    passphraseState?: string;
    useEmptyPassphrase?: boolean;
    initSession?: boolean;
    deriveCardano?: boolean;
    detectBootloaderDevice?: boolean;
}
export type Params<T> = CommonParams & T & {
    bundle?: undefined;
};
export interface Unsuccessful {
    success: false;
    payload: {
        error: string;
        code?: string | number;
    };
}
export interface Success<T> {
    success: true;
    payload: T;
}
export type Response<T> = Promise<Success<T> | Unsuccessful>;
//# sourceMappingURL=params.d.ts.map