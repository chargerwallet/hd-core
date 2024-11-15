import { ApplySettings } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class DeviceSettings extends BaseMethod<ApplySettings> {
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
    } | {
        model_mini?: undefined;
    };
    run(): Promise<import("@chargerwallet/hd-transport").Success>;
}
//# sourceMappingURL=DeviceSettings.d.ts.map