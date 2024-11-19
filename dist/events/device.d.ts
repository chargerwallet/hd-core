import type { PROTO } from '../constants';
import type { Features, KnownDevice as Device, SupportFeatures } from '../types/device';
import { MessageFactoryFn } from './utils';
export declare const DEVICE_EVENT = "DEVICE_EVENT";
export declare const DEVICE: {
    readonly CONNECT: "device-connect";
    readonly CONNECT_UNACQUIRED: "device-connect_unacquired";
    readonly DISCONNECT: "device-disconnect";
    readonly CHANGED: "device-changed";
    readonly ACQUIRE: "device-acquire";
    readonly RELEASE: "device-release";
    readonly ACQUIRED: "device-acquired";
    readonly RELEASED: "device-released";
    readonly USED_ELSEWHERE: "device-used_elsewhere";
    readonly UNREADABLE: "unreadable-device";
    readonly LOADING: "device-loading";
    readonly BUTTON: "button";
    readonly PIN: "pin";
    readonly PASSPHRASE: "passphrase";
    readonly PASSPHRASE_ON_DEVICE: "passphrase_on_device";
    readonly WORD: "word";
    readonly SUPPORT_FEATURES: "support_features";
    readonly FEATURES: "features";
};
export interface DeviceConnnectRequest {
    type: typeof DEVICE.CONNECT;
    payload: {
        device: Device;
    };
}
export interface DeviceDisconnnectRequest {
    type: typeof DEVICE.DISCONNECT;
    payload: {
        device: Device;
    };
}
export interface DeviceButtonRequestPayload extends Omit<PROTO.ButtonRequest, 'code'> {
    code?: PROTO.ButtonRequest['code'] | 'ButtonRequest_FirmwareUpdate';
}
export interface DeviceButtonRequest {
    type: typeof DEVICE.BUTTON;
    payload: DeviceButtonRequestPayload & {
        device: Device | null;
    };
}
export type DeviceFeaturesPayload = Features;
export interface DeviceSendFeatures {
    type: typeof DEVICE.FEATURES;
    payload: DeviceFeaturesPayload;
}
export type DeviceSupportFeaturesPayload = SupportFeatures & {
    device: Device | null;
};
export interface DeviceSendSupportFeatures {
    type: typeof DEVICE.SUPPORT_FEATURES;
    payload: DeviceSupportFeaturesPayload;
}
export type DeviceEvent = DeviceButtonRequest | DeviceSendFeatures | DeviceSendSupportFeatures | DeviceDisconnnectRequest | DeviceConnnectRequest;
export type DeviceEventMessage = DeviceEvent & {
    event: typeof DEVICE_EVENT;
};
export type DeviceEventListenerFn = (type: typeof DEVICE_EVENT, cb: (event: DeviceEventMessage) => void) => void;
export declare const createDeviceMessage: MessageFactoryFn<typeof DEVICE_EVENT, DeviceEvent>;
//# sourceMappingURL=device.d.ts.map