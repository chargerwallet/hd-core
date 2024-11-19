export * from './assets';
export * from './versionUtils';
export * from './patch';
export { getDeviceTypeByBleName, getDeviceType, getDeviceBleName, getDeviceUUID, getDeviceLabel, getMethodVersionRange, } from './deviceInfoUtils';
export { getDeviceBoardloaderVersion, getDeviceBootloaderVersion, getDeviceFirmwareVersion, getDeviceBLEFirmwareVersion, } from './deviceVersionUtils';
export { getFirmwareUpdateField, supportInputPinOnSoftware } from './deviceFeaturesUtils';
export { checkNeedUpdateBootForTouch, checkNeedUpdateBootForClassicAndMini, } from '../api/firmware/updateBootloader';
export { getLogger, enableLog, LoggerNames, getLog, setLoggerPostMessage } from './logger';
export { getHDPath, getScriptType, getOutputScriptType } from '../api/helpers/pathUtils';
export declare const isBleConnect: (env: string) => boolean;
export { getHomeScreenHex, getHomeScreenDefaultList, getHomeScreenSize } from './homescreen';
export declare const wait: (ms: number) => Promise<unknown>;
//# sourceMappingURL=index.d.ts.map