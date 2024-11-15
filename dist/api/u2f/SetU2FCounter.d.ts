import { SetU2FCounter as HardwareSetU2FCounter } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class SetU2FCounter extends BaseMethod<HardwareSetU2FCounter> {
    init(): void;
    run(): Promise<import("@chargerwallet/hd-transport").Success>;
}
//# sourceMappingURL=SetU2FCounter.d.ts.map