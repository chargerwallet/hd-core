import { EthereumGetAddressChargerWallet } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { EVMAddress } from '../../types';
export default class EvmGetAddress extends BaseMethod<EthereumGetAddressChargerWallet[]> {
    hasBundle: boolean;
    init(): void;
    getEvmAddress(param: EthereumGetAddressChargerWallet): Promise<import("@chargerwallet/hd-transport").MessageResponse<"EthereumAddress"> | import("@chargerwallet/hd-transport").MessageResponse<"EthereumAddressChargerWallet">>;
    run(): Promise<EVMAddress | EVMAddress[]>;
}
//# sourceMappingURL=EVMGetAddress.d.ts.map