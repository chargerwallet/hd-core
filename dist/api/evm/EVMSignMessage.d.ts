import { EthereumSignMessageChargerWallet } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class EVMSignMessage extends BaseMethod<EthereumSignMessageChargerWallet> {
    init(): void;
    run(): Promise<import("@chargerwallet/hd-transport").EthereumMessageSignature>;
}
//# sourceMappingURL=EVMSignMessage.d.ts.map