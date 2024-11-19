import type { Transport, Messages } from '@chargerwallet/hd-transport';
import type { Device } from './Device';
type MessageType = Messages.MessageType;
type MessageKey = keyof MessageType;
export type TypedResponseMessage<T extends MessageKey> = {
    type: T;
    message: MessageType[T];
};
type TypedCallResponseMap = {
    [K in keyof MessageType]: TypedResponseMessage<K>;
};
export type DefaultMessageResponse = TypedCallResponseMap[keyof MessageType];
export type PassphrasePromptResponse = {
    passphrase?: string;
    passphraseOnDevice?: boolean;
    cache?: boolean;
};
export declare class DeviceCommands {
    device: Device;
    transport: Transport;
    mainId: string;
    disposed: boolean;
    callPromise?: Promise<DefaultMessageResponse>;
    _cancelableRequest?: (error?: any) => void;
    constructor(device: Device, mainId: string);
    dispose(cancelRequest: boolean): Promise<void>;
    call(type: MessageKey, msg?: DefaultMessageResponse['message']): Promise<DefaultMessageResponse>;
    typedCall<T extends MessageKey, R extends MessageKey[]>(type: T, resType: R, msg?: MessageType[T]): Promise<TypedCallResponseMap[R[number]]>;
    typedCall<T extends MessageKey, R extends MessageKey>(type: T, resType: R, msg?: MessageType[T]): Promise<TypedResponseMessage<R>>;
    _commonCall(type: MessageKey, msg?: DefaultMessageResponse['message']): Promise<DefaultMessageResponse>;
    _filterCommonTypes(res: DefaultMessageResponse, callType: MessageKey): Promise<DefaultMessageResponse>;
    _promptPin(type?: Messages.PinMatrixRequestType): Promise<string>;
    _promptPassphrase(): Promise<PassphrasePromptResponse>;
}
export type TypedCall = DeviceCommands['typedCall'];
export {};
//# sourceMappingURL=DeviceCommands.d.ts.map