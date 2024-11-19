import { LowlevelTransportSharedPlugin, Transport } from '@chargerwallet/hd-transport';
import { MessageVersion } from './DataManager';
import { Features } from '../types';
export default class TransportManager {
    static transport: Transport;
    static defaultMessages: JSON | Record<string, any>;
    static currentMessages: JSON | Record<string, any>;
    static reactNativeInit: boolean;
    static messageVersion: MessageVersion;
    static plugin: LowlevelTransportSharedPlugin | null;
    static load(): void;
    static configure(): Promise<void>;
    static reconfigure(features?: Features | undefined): Promise<void>;
    static setTransport(TransportConstructor: any, plugin?: LowlevelTransportSharedPlugin): void;
    static getTransport(): Transport;
    static getDefaultMessages(): JSON | Record<string, any>;
    static getCurrentMessages(): JSON | Record<string, any>;
    static getMessageVersion(): MessageVersion;
}
//# sourceMappingURL=TransportManager.d.ts.map