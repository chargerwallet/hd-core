import { NexaGetAddress as HardwareNexaGetAddress } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class NexaGetAddress extends BaseMethod<HardwareNexaGetAddress[]> {
    hasBundle: boolean;
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
        model_touch: {
            min: string;
        };
    };
    run(): Promise<{
        path: string;
        pub: string;
        address: string;
    } | {
        path: string;
        pub: string;
        address: string;
    }[]>;
}
//# sourceMappingURL=NexaGetAddress.d.ts.map