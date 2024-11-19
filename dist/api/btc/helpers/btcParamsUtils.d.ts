export type BitcoinInfo = {
    name: string;
    slip44: number;
    label: string;
};
export declare const getCoinInfo: (path: number[] | undefined, coin: string | undefined) => BitcoinInfo;
export declare const getCoinAndScriptType: (path: number[], coin: string | undefined, multisig?: boolean) => {
    coinName: string;
    scriptType: "SPENDADDRESS" | "SPENDMULTISIG" | "EXTERNAL" | "SPENDWITNESS" | "SPENDP2SHWITNESS" | "SPENDTAPROOT";
};
//# sourceMappingURL=btcParamsUtils.d.ts.map