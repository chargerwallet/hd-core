import { UI_EVENT } from './ui-request';
import type { MessageFactoryFn } from './utils';
export declare const UI_RESPONSE: {
    readonly RECEIVE_PIN: "ui-receive_pin";
    readonly RECEIVE_PASSPHRASE: "ui-receive_passphrase";
};
export interface UiResponsePin {
    type: typeof UI_RESPONSE.RECEIVE_PIN;
    payload: string;
}
export interface UiResponsePassphrase {
    type: typeof UI_RESPONSE.RECEIVE_PASSPHRASE;
    payload: {
        value: string;
        passphraseOnDevice?: boolean;
        save?: boolean;
    };
}
export type UiResponseEvent = UiResponsePin | UiResponsePassphrase;
export type UiResponseMessage = UiResponseEvent & {
    event: typeof UI_EVENT;
};
export declare const createUiResponse: MessageFactoryFn<typeof UI_EVENT, UiResponseEvent>;
//# sourceMappingURL=ui-response.d.ts.map