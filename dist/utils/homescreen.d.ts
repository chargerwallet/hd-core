import type { Features, IDeviceType } from '../types';
type IScreenData = {
    name: string;
    hex: string;
};
export declare const getT1Data: () => Record<string, IScreenData>;
export declare const getTouchData: () => Record<string, IScreenData>;
export declare const getProData: () => Record<string, IScreenData>;
export declare const getHomeScreenHex: (deviceType: IDeviceType, name: string) => string;
export declare const getHomeScreenDefaultList: (features: Features) => string[];
type SizeConfig = {
    width: number;
    height: number;
    radius?: number;
};
export declare const getHomeScreenSize: ({ deviceType, homeScreenType, thumbnail, }: {
    deviceType: IDeviceType;
    homeScreenType: 'WallPaper' | 'Nft';
    thumbnail?: boolean | undefined;
}) => SizeConfig | undefined;
export {};
//# sourceMappingURL=homescreen.d.ts.map