import { LnurlAuth as ILnurlAuth } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
export default class LnurlAuth1 extends BaseMethod<ILnurlAuth> {
    hasBundle: boolean;
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
        model_touch: {
            min: string;
        };
    };
    run(): Promise<{
        pub: string | undefined;
        publickey?: string | undefined;
        path?: string | undefined;
        signature?: string | undefined;
    }>;
}
//# sourceMappingURL=LnurlAuth.d.ts.map