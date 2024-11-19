import { BaseMethod } from '../BaseMethod';
import { EVMTransaction, EVMTransactionEIP1559 } from '../../types';
export default class EVMSignTransaction extends BaseMethod {
    addressN: number[];
    isEIP1559: boolean;
    formattedTx: EVMTransaction | EVMTransactionEIP1559 | undefined;
    init(): void;
    getVersionRange(): {
        model_mini: {
            min: string;
        };
    };
    run(): Promise<import("../../types").EVMSignedTx>;
}
//# sourceMappingURL=EVMSignTransaction.d.ts.map