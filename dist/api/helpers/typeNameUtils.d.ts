import { EthereumFieldType } from '@chargerwallet/hd-transport';
import { EthereumSignTypedDataTypes } from '../../types/api/evmSignTypedData';
export declare const parseArrayType: (arrayTypeName: string) => {
    entryTypeName: string;
    arraySize: number | null;
};
export declare const encodeData: (typeName: string, data: any) => string;
export declare const getFieldType: (typeName: string, types: EthereumSignTypedDataTypes) => EthereumFieldType;
//# sourceMappingURL=typeNameUtils.d.ts.map