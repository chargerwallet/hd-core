import { EthereumSignMessageEIP712 } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class EVMSignMessageEIP712 extends BaseMethod<EthereumSignMessageEIP712> {
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
    };
    run(): Promise<import("@chargerwallet/hd-transport").EthereumMessageSignature>;
}
//# sourceMappingURL=EVMSignMessageEIP712.d.ts.map