import { IDeviceModel, IDeviceType } from '../types';
import { MessageVersion } from './DataManager';
type DeviceVersionConfig = {
    [deviceType in IDeviceType | IDeviceModel]?: {
        minVersion: string;
        messageVersion: MessageVersion;
    }[];
};
export declare const PROTOBUF_MESSAGE_CONFIG: DeviceVersionConfig;
export {};
//# sourceMappingURL=MessagesConfig.d.ts.map