import { DeviceCommands } from '../device/DeviceCommands';
import type { Features, SupportFeatureType } from '../types';
import { FirmwareField, MessageVersion } from '../data-manager/DataManager';
import { Device } from '../device/Device';
export declare const getSupportMessageVersion: (features: Features | undefined) => {
    messages: JSON;
    messageVersion: MessageVersion;
};
export declare const supportInputPinOnSoftware: (features: Features) => SupportFeatureType;
export declare const supportNewPassphrase: (features?: Features) => SupportFeatureType;
export declare const getPassphraseStateWithRefreshDeviceInfo: (device: Device) => Promise<string | false>;
export declare const getPassphraseState: (features: Features | undefined, commands: DeviceCommands) => Promise<string | false>;
export declare const supportBatchPublicKey: (features?: Features) => boolean;
export declare const supportModifyHomescreen: (features?: Features) => SupportFeatureType;
export declare const getFirmwareUpdateField: ({ features, updateType, targetVersion, }: {
    features: Features;
    updateType: 'firmware' | 'ble';
    targetVersion?: string | undefined;
}) => 'ble' | FirmwareField;
export declare function fixVersion(version: string): string;
export declare const fixFeaturesFirmwareVersion: (features: Features) => Features;
//# sourceMappingURL=deviceFeaturesUtils.d.ts.map