import { TypedCall } from '@chargerwallet/hd-transport';
import { EthereumSignTypedDataMessage, EthereumSignTypedDataTypes } from '../../../types';
export declare const signTypedData: ({ typedCall, addressN, data, metamaskV4Compat, chainId, }: {
    typedCall: TypedCall;
    addressN: number[];
    data: EthereumSignTypedDataMessage<EthereumSignTypedDataTypes>;
    metamaskV4Compat: boolean;
    chainId?: number | undefined;
}) => Promise<import("@chargerwallet/hd-transport").MessageResponse<keyof import("@chargerwallet/hd-transport").MessageType>>;
//# sourceMappingURL=signTypedData.d.ts.map