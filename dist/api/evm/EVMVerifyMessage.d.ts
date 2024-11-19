import { EthereumVerifyMessageChargerWallet } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class EVMSignMessage extends BaseMethod<EthereumVerifyMessageChargerWallet> {
    init(): void;
    run(): Promise<import("@chargerwallet/hd-transport").Success>;
}
//# sourceMappingURL=EVMVerifyMessage.d.ts.map