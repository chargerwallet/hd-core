import { StarcoinSignMessage as HardwareStarcoinSignMessage } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class StarcoinSignMessage extends BaseMethod<HardwareStarcoinSignMessage> {
    init(): void;
    run(): Promise<import("@chargerwallet/hd-transport").StarcoinMessageSignature>;
}
//# sourceMappingURL=StarcoinSignMessage.d.ts.map