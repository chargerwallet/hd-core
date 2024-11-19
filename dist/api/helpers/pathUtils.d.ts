import { ChangeOutputScriptType, InputScriptType } from '@chargerwallet/hd-transport';
export declare const toHardened: (n: number) => number;
export declare const fromHardened: (n: number) => number;
export declare const getSlip44ByPath: (path: number[]) => number;
export declare const getHDPath: (path: string) => Array<number>;
export declare const isMultisigPath: (path: Array<number>) => boolean;
export declare const isSegwitPath: (path: Array<number>) => boolean;
export declare const isBech32Path: (path: Array<number>) => boolean;
export declare const isTaprootPath: (path: number[] | undefined) => boolean;
export declare const getScriptType: (path: Array<number>) => InputScriptType;
export declare const getOutputScriptType: (path?: number[]) => ChangeOutputScriptType;
export declare const serializedPath: (path: Array<number>) => string;
export declare const validatePath: (path: string | Array<number>, length?: number, base?: boolean) => Array<number>;
//# sourceMappingURL=pathUtils.d.ts.map