import { CoreMessage } from '../events';
type LogMessage = {
    level: string;
    prefix: string;
    message: any[];
    timestamp: number;
};
declare class Log {
    prefix: string;
    enabled: boolean;
    messages: LogMessage[];
    constructor(prefix: string, enabled: boolean);
    addMessage(level: string, prefix: string, ...args: any[]): void;
    log(...args: any[]): void;
    error(...args: any[]): void;
    warn(...args: any[]): void;
    debug(...args: any[]): void;
}
export declare const initLog: (prefix: string, enabled?: boolean) => Log;
export declare const enableLog: (enabled?: boolean) => void;
export declare const enableLogByPrefix: (prefix: string, enabled: boolean) => void;
export declare const getLog: () => LogMessage[];
export declare const setLoggerPostMessage: (postMessageFn: (message: CoreMessage) => void) => void;
export declare enum LoggerNames {
    Core = "@chargerwallet/hd-core",
    Transport = "Transport",
    Device = "Device",
    DeviceCommands = "DeviceCommands",
    DeviceConnector = "DeviceConnector",
    DeviceList = "DeviceList",
    DevicePool = "DevicePool",
    HdCommonConnectSdk = "@chargerwallet/common-connect-sdk",
    HdBleSdk = "@chargerwallet/hd-ble-sdk",
    HdTransportHttp = "@chargerwallet/hd-transport-http",
    HdTransportLowLevel = "@chargerwallet/hd-transport-lowlevel",
    HdBleTransport = "@chargerwallet/hd-ble-transport",
    Connect = "@chargerwallet/connect",
    Iframe = "IFrame",
    SendMessage = "[SendMessage]",
    Method = "[Method]"
}
export declare const LoggerMap: {
    "@chargerwallet/hd-core": Log;
    Transport: Log;
    Device: Log;
    DeviceCommands: Log;
    DeviceConnector: Log;
    DeviceList: Log;
    DevicePool: Log;
    "@chargerwallet/hd-ble-sdk": Log;
    "@chargerwallet/hd-transport-http": Log;
    "@chargerwallet/hd-ble-transport": Log;
    "@chargerwallet/hd-transport-lowlevel": Log;
    "@chargerwallet/connect": Log;
    IFrame: Log;
    "[SendMessage]": Log;
    "[Method]": Log;
    "@chargerwallet/common-connect-sdk": Log;
};
export declare const getLogger: (key: LoggerNames) => Log;
export {};
//# sourceMappingURL=logger.d.ts.map