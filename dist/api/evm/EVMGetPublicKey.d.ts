import { EthereumGetPublicKey, EthereumGetPublicKeyChargerWallet } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { EVMPublicKey } from '../../types';
export default class EVMGetPublicKey extends BaseMethod<EthereumGetPublicKeyChargerWallet[]> {
    hasBundle: boolean;
    useBatch: boolean;
    init(): void;
    getEvmPublicKey(param: EthereumGetPublicKey): Promise<import("@chargerwallet/hd-transport").MessageResponse<"EthereumPublicKeyChargerWallet">> | Promise<import("@chargerwallet/hd-transport").MessageResponse<"EthereumPublicKey">>;
    run(): Promise<EVMPublicKey | EVMPublicKey[] | {
        path: string;
        pub: string;
        publicKey: string;
    }[]>;
}
//# sourceMappingURL=EVMGetPublicKey.d.ts.map