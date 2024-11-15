import type { PROTO } from '../constants';
import type { Device } from '../types';
import type { DeviceButtonRequest } from './device';
import type { MessageFactoryFn } from './utils';
export declare const UI_EVENT = "UI_EVENT";
export declare const UI_REQUEST: {
    readonly REQUEST_PIN: "ui-request_pin";
    readonly INVALID_PIN: "ui-invalid_pin";
    readonly REQUEST_BUTTON: "ui-button";
    readonly REQUEST_PASSPHRASE: "ui-request_passphrase";
    readonly REQUEST_PASSPHRASE_ON_DEVICE: "ui-request_passphrase_on_device";
    readonly CLOSE_UI_WINDOW: "ui-close_window";
    readonly DEVICE_PROGRESS: "ui-device_progress";
    readonly BLUETOOTH_PERMISSION: "ui-bluetooth_permission";
    readonly BLUETOOTH_CHARACTERISTIC_NOTIFY_CHANGE_FAILURE: "ui-bluetooth_characteristic_notify_change_failure";
    readonly LOCATION_PERMISSION: "ui-location_permission";
    readonly LOCATION_SERVICE_PERMISSION: "ui-location_service_permission";
    readonly FIRMWARE_PROGRESS: "ui-firmware-progress";
    readonly FIRMWARE_TIP: "ui-firmware-tip";
    readonly PREVIOUS_ADDRESS_RESULT: "ui-previous_address_result";
};
export interface UiRequestWithoutPayload {
    type: typeof UI_REQUEST.CLOSE_UI_WINDOW | typeof UI_REQUEST.BLUETOOTH_PERMISSION | typeof UI_REQUEST.BLUETOOTH_CHARACTERISTIC_NOTIFY_CHANGE_FAILURE | typeof UI_REQUEST.LOCATION_PERMISSION | typeof UI_REQUEST.LOCATION_SERVICE_PERMISSION;
    payload?: typeof undefined;
}
export type UiRequestDeviceAction = {
    type: typeof UI_REQUEST.REQUEST_PIN;
    payload: {
        device: Device;
        type?: PROTO.PinMatrixRequestType | 'ButtonRequest_PinEntry';
    };
};
export interface UiRequestButton {
    type: typeof UI_REQUEST.REQUEST_BUTTON;
    payload: DeviceButtonRequest['payload'];
}
export interface UiRequestPassphrase {
    type: typeof UI_REQUEST.REQUEST_PASSPHRASE;
    payload: {
        device: Device;
        passphraseState?: string;
    };
}
export interface UiRequestPassphraseOnDevice {
    type: typeof UI_REQUEST.REQUEST_PASSPHRASE_ON_DEVICE;
    payload: {
        device: Device;
        passphraseState?: string;
    };
}
export interface FirmwareProgress {
    type: typeof UI_REQUEST.FIRMWARE_PROGRESS;
    payload: {
        device: Device;
        progress: number;
    };
}
export interface FirmwareTip {
    type: typeof UI_REQUEST.FIRMWARE_TIP;
    payload: {
        device: Device;
        data: {
            message: string;
        };
    };
}
export interface DeviceProgress {
    type: typeof UI_REQUEST.DEVICE_PROGRESS;
    payload: {
        progress?: number;
    };
}
export interface PreviousAddressResult {
    type: typeof UI_REQUEST.PREVIOUS_ADDRESS_RESULT;
    payload: {
        device: Device;
        data: {
            address?: string;
            path?: string;
        };
    };
}
export type UiEvent = UiRequestWithoutPayload | UiRequestDeviceAction | UiRequestButton | UiRequestPassphraseOnDevice | UiRequestPassphrase | FirmwareProgress | FirmwareTip | DeviceProgress | PreviousAddressResult;
export type UiEventMessage = UiEvent & {
    event: typeof UI_EVENT;
};
export declare const createUiMessage: MessageFactoryFn<typeof UI_EVENT, UiEvent>;
//# sourceMappingURL=ui-request.d.ts.map