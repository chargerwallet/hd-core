import { CoreApi } from './types/api';
export interface TopLevelInjectApi {
    init: CoreApi['init'];
    call: CoreApi['call'];
}
export declare const topLevelInject: () => CoreApi;
//# sourceMappingURL=topLevelInject.d.ts.map