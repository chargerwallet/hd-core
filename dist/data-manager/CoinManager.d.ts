export type BitcoinInfo = {
    name: string;
    slip44: number;
    label: string;
};
export default class CoinManager {
    static getCoins(): string[];
    static getBitcoinCoinInfo(info: {
        name?: string;
        path?: number[];
    }): BitcoinInfo | undefined;
}
//# sourceMappingURL=CoinManager.d.ts.map