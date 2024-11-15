import { Unsuccessful } from '../types/params';
import { IFrameCallMessage, IFrameCancelMessage } from './call';
import { DeviceEventMessage } from './device';
import { IFrameEventMessage } from './iframe';
import { UiEventMessage } from './ui-request';
import { UiResponseMessage } from './ui-response';
import { LogEventMessage } from './log';
import { FirmwareMessage } from './firmware';
export declare const CORE_EVENT = "CORE_EVENT";
export type CoreMessage = {
    id?: string;
    success?: true | false;
} & (IFrameEventMessage | IFrameCallMessage | IFrameCancelMessage | UiResponseMessage | UiEventMessage | DeviceEventMessage | LogEventMessage | FirmwareMessage);
export type PostMessageEvent = MessageEvent<any>;
export declare const parseMessage: (messageData: any) => CoreMessage;
export declare const createErrorMessage: (error: Error & {
    code?: string | number;
}) => Unsuccessful;
//# sourceMappingURL=core.d.ts.map