/// <reference types="node" />
import { EventEmitter } from 'events';
import { CallMethod, CoreMessage } from './events';
import { CoreApi } from './types/api';
type IAddHardwareGlobalEventListener = (coreMessage: CoreMessage) => void;
export interface LowLevelInjectApi {
    call: CallMethod;
    eventEmitter: EventEmitter;
    init: CoreApi['init'];
    dispose: CoreApi['dispose'];
    uiResponse: CoreApi['uiResponse'];
    cancel: CoreApi['cancel'];
    updateSettings: CoreApi['updateSettings'];
    addHardwareGlobalEventListener: (listener: IAddHardwareGlobalEventListener) => void;
}
export type LowLevelCoreApi = Omit<CoreApi, 'on' | 'off'> & {
    addHardwareGlobalEventListener: (listener: IAddHardwareGlobalEventListener) => void;
};
export declare const lowLevelInject: ({ call, cancel, dispose, eventEmitter, init, uiResponse, updateSettings, addHardwareGlobalEventListener, }: LowLevelInjectApi) => LowLevelCoreApi;
export {};
//# sourceMappingURL=lowLevelInject.d.ts.map