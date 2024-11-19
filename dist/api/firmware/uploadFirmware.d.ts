import { Success } from '@chargerwallet/hd-transport';
import { CoreMessage } from '../../events';
import { PROTO } from '../../constants';
import type { Device } from '../../device/Device';
import type { TypedCall } from '../../device/DeviceCommands';
export declare const waitBleInstall: (updateType: string) => Promise<void>;
export declare const uploadFirmware: (updateType: 'firmware' | 'ble', typedCall: TypedCall, postMessage: (message: CoreMessage) => void, device: Device, { payload, rebootOnSuccess, }: import("@chargerwallet/hd-transport").FirmwareUpload & {
    rebootOnSuccess?: boolean | undefined;
}) => Promise<Success>;
export declare const updateResource: (typedCall: TypedCall, fileName: string, data: ArrayBuffer) => Promise<Success>;
export declare const updateResources: (typedCall: TypedCall, postMessage: (message: CoreMessage) => void, device: Device, source: ArrayBuffer) => Promise<boolean>;
export declare const updateBootloader: (typedCall: TypedCall, postMessage: (message: CoreMessage) => void, device: Device, source: ArrayBuffer) => Promise<boolean>;
//# sourceMappingURL=uploadFirmware.d.ts.map