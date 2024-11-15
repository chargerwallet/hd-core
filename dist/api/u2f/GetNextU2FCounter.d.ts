import { GetNextU2FCounter as HardwareGetNextU2FCounter } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class GetNextU2FCounter extends BaseMethod<HardwareGetNextU2FCounter> {
    init(): void;
    run(): Promise<import("@chargerwallet/hd-transport").NextU2FCounter>;
}
//# sourceMappingURL=GetNextU2FCounter.d.ts.map