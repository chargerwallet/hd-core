import { XrpAddress } from '../../types/api/xrpGetAddress';
import { BaseMethod } from '../BaseMethod';
export default class XrpGetAddress extends BaseMethod<{
    address_n: number[];
    show_display: boolean;
}[]> {
    hasBundle: boolean;
    shouldConfirm: boolean;
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
    };
    run(): Promise<XrpAddress | XrpAddress[] | {
        path: string;
        publicKey: string;
        address: string;
    }[]>;
}
//# sourceMappingURL=XrpGetAddress.d.ts.map