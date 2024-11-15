import { ConfluxTxRequest } from '@chargerwallet/hd-transport';
import { ConfluxSignedTx, ConfluxTransaction } from '../../types/api/confluxSignTransaction';
import { BaseMethod } from '../BaseMethod';
export default class ConfluxSignTransaction extends BaseMethod {
    addressN: number[];
    formattedTx: ConfluxTransaction | undefined;
    init(): void;
    processTxRequest: (request: ConfluxTxRequest, data: string) => Promise<ConfluxSignedTx>;
    evmSignTx: (addressN: number[], tx: ConfluxTransaction) => Promise<ConfluxSignedTx>;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
    };
    run(): Promise<ConfluxSignedTx>;
}
//# sourceMappingURL=ConfluxSignTransaction.d.ts.map