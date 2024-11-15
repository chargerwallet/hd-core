import { Features, IVersionArray } from '../../types';
export declare function shouldUpdateBootloaderForClassicAndMini({ currentVersion, bootloaderVersion, willUpdateFirmware, targetBootloaderVersion, bootloaderRelatedFirmwareVersion, }: {
    currentVersion: string;
    bootloaderVersion: string;
    willUpdateFirmware: string;
    targetBootloaderVersion?: IVersionArray;
    bootloaderRelatedFirmwareVersion: IVersionArray;
}): boolean;
export declare function isEnteredManuallyBoot(features: Features, updateType: string): boolean;
//# sourceMappingURL=bootloaderHelper.d.ts.map