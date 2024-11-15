import type { ConnectSettings } from '../types';
import { UI_EVENT } from './ui-request';
import { MessageFactoryFn } from './utils';
export declare const IFRAME: {
    readonly INIT: "iframe-init";
    readonly INIT_BRIDGE: "iframe-init-bridge";
    readonly CALL: "iframe-call";
    readonly CANCEL: "iframe-cancel";
};
export interface IFrameInit {
    type: typeof IFRAME.INIT;
    payload: {
        settings: ConnectSettings;
    };
}
export interface IFrameBridge {
    type: typeof IFRAME.INIT_BRIDGE;
    payload: unknown;
}
export type IFrameEvent = IFrameInit | IFrameBridge;
export type IFrameEventMessage = IFrameEvent & {
    event: typeof UI_EVENT;
};
export declare const createIFrameMessage: MessageFactoryFn<typeof UI_EVENT, IFrameEvent>;
//# sourceMappingURL=iframe.d.ts.map