import { MessageKey, MessageResponse, TypedCall } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { type EthereumSignTypedDataMessage, type EthereumSignTypedDataTypes } from '../../types';
export type EVMSignTypedDataParams = {
    addressN: number[];
    metamaskV4Compat: boolean;
    data: EthereumSignTypedDataMessage<EthereumSignTypedDataTypes>;
    domainHash?: string;
    messageHash?: string;
    chainId?: number;
};
export default class EVMSignTypedData extends BaseMethod<EVMSignTypedDataParams> {
    init(): void;
    handleSignTypedData({ typedCall, signData, response, supportTrezor, }: {
        typedCall: TypedCall;
        signData: EthereumSignTypedDataMessage<EthereumSignTypedDataTypes>;
        response: MessageResponse<MessageKey>;
        supportTrezor: boolean;
    }): Promise<{
        address: string;
        signature: string;
    }>;
    signTypedData(): Promise<{
        address: string;
        signature: string;
    }>;
    signTypedHash({ typedCall, addressN, chainId, domainHash, messageHash, }: {
        typedCall: TypedCall;
        addressN: number[];
        chainId: number | undefined;
        domainHash: string | undefined;
        messageHash: string | undefined;
    }): Promise<MessageResponse<"EthereumTypedDataSignature"> | MessageResponse<"EthereumTypedDataSignatureChargerWallet">>;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
    };
    hasBiggerData(item: EthereumSignTypedDataMessage<EthereumSignTypedDataTypes>): boolean;
    hasNestedArrays(item: any): boolean;
    supportSignTyped(): boolean;
    run(): Promise<import("@chargerwallet/hd-transport").EthereumMessageSignature>;
}
//# sourceMappingURL=EVMSignTypedData.d.ts.map