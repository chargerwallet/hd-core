/// <reference types="node" />
import EventEmitter from 'events';
import { LowlevelTransportSharedPlugin } from '@chargerwallet/hd-transport';
import { CoreMessage } from '../events';
import type { ConnectSettings } from '../types';
import DeviceConnector from '../device/DeviceConnector';
export declare const callAPI: (message: CoreMessage) => Promise<any>;
export declare const cancel: (connectId?: string) => void;
export default class Core extends EventEmitter {
    handleMessage(message: CoreMessage): Promise<any>;
    dispose(): void;
}
export declare const initCore: () => Core;
export declare const initConnector: () => DeviceConnector;
export declare const init: (settings: ConnectSettings, Transport: any, plugin?: LowlevelTransportSharedPlugin) => Promise<Core | undefined>;
//# sourceMappingURL=index.d.ts.map