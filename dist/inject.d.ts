/// <reference types="node" />
import { EventEmitter } from 'events';
import { CallMethod } from './events';
import { CoreApi } from './types/api';
export interface InjectApi {
    call: CallMethod;
    eventEmitter: EventEmitter;
    init: CoreApi['init'];
    updateSettings: CoreApi['updateSettings'];
    dispose: CoreApi['dispose'];
    uiResponse: CoreApi['uiResponse'];
    cancel: CoreApi['cancel'];
}
export declare const inject: ({ call, cancel, dispose, eventEmitter, init, updateSettings, uiResponse, }: InjectApi) => CoreApi;
export declare const createCoreApi: (call: CoreApi['call']) => Omit<CoreApi, 'on' | 'off' | 'emit' | 'removeAllListeners' | 'init' | 'call' | 'dispose' | 'uiResponse' | 'cancel' | 'updateSettings'>;
//# sourceMappingURL=inject.d.ts.map