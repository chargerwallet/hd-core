import { MessageResponse, TypedCall } from '@chargerwallet/hd-transport';
import { Device } from '../../../device/Device';
export declare const signTypedHash: ({ typedCall, addressN, device, chainId, domainHash, messageHash, }: {
    typedCall: TypedCall;
    addressN: number[];
    device: Device;
    chainId: number | undefined;
    domainHash: string;
    messageHash: string | undefined;
}) => Promise<MessageResponse<'EthereumTypedDataSignatureChargerWallet'>>;
//# sourceMappingURL=signTypedHash.d.ts.map