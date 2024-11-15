import type { ConnectSettings } from '../types';
import { getSDKVersion } from '../data/config';
export declare const DEFAULT_PRIORITY = 2;
declare global {
    var CHARGERWALLET_CONNECT_SRC: string;
}
export declare const getEnv: () => "web" | "webextension" | "electron" | "react-native";
export declare const corsValidator: (url?: string) => string | undefined;
export declare const parseConnectSettings: (input?: Partial<ConnectSettings>) => ConnectSettings;
export { getSDKVersion };
//# sourceMappingURL=connectSettings.d.ts.map