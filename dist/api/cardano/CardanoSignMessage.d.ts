import { BaseMethod } from '../BaseMethod';
import { CardanoSignMessageParams } from '../../types/api/cardanoSignMessage';
export default class CardanoSignMessage extends BaseMethod<CardanoSignMessageParams> {
    hasBundle?: boolean;
    isCheck?: boolean;
    init(): void;
    getVersionRange(): {
        model_touch: {
            min: string;
        };
    };
    run(): Promise<import("packages/hd-transport/dist").CardanoMessageSignature>;
}
//# sourceMappingURL=CardanoSignMessage.d.ts.map