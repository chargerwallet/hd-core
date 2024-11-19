import { BaseMethod } from './BaseMethod';
export default class GetFeatures extends BaseMethod {
    init(): void;
    run(): Promise<import("packages/hd-transport/dist").Features | undefined>;
}
//# sourceMappingURL=GetFeatures.d.ts.map