import { StarcoinVerifyMessage as HardwareStarcoinVerifyMessage } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class EVMSignMessage extends BaseMethod<HardwareStarcoinVerifyMessage> {
    init(): void;
    run(): Promise<import("@chargerwallet/hd-transport").Success>;
}
//# sourceMappingURL=StarcoinVerifyMessage.d.ts.map