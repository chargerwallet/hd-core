import { EthereumMessageSignature } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';
export type EthereumSignTypedDataTypeProperty = {
    name: string;
    type: string;
};
export type EthereumSignTypedDataTypes = {
    EIP712Domain: EthereumSignTypedDataTypeProperty[];
    [additionalProperties: string]: EthereumSignTypedDataTypeProperty[];
};
export type EthereumSignTypedDataMessage<T extends EthereumSignTypedDataTypes> = {
    types: T;
    primaryType: keyof T;
    domain: {
        name?: string;
        version?: string;
        chainId?: number;
        verifyingContract?: string;
        salt?: ArrayBuffer;
    };
    message: {
        [fieldName: string]: any;
    };
};
export type EVMSignTypedDataParams = {
    path: string | number[];
    metamaskV4Compat: boolean;
    data: EthereumSignTypedDataMessage<EthereumSignTypedDataTypes>;
    domainHash?: string;
    messageHash?: string;
    chainId?: number;
};
export declare function evmSignTypedData(connectId: string, deviceId: string, params: CommonParams & EVMSignTypedDataParams): Response<EthereumMessageSignature>;
//# sourceMappingURL=evmSignTypedData.d.ts.map