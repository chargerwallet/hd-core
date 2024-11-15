import { Features } from '../../types';
export interface GetInfoProps {
    features: Features;
    updateType: 'firmware' | 'ble';
    isUpdateBootloader?: boolean;
    targetVersion?: string;
}
interface GetBinaryProps extends GetInfoProps {
    version?: number[];
}
export declare const getBinary: ({ features, updateType, version, isUpdateBootloader, }: GetBinaryProps) => Promise<{
    binary: any;
    version: import("../../types").IVersionArray;
}>;
export declare const getSysResourceBinary: (url: string) => Promise<{
    binary: any;
}>;
export declare const getInfo: ({ features, updateType, targetVersion }: GetInfoProps) => {
    version: import("../../types").IVersionArray;
} | undefined;
export {};
//# sourceMappingURL=getBinary.d.ts.map