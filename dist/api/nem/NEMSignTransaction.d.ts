import { NEMAggregateModification, NEMImportanceTransfer, NEMMosaicCreation, NEMMosaicSupplyChange, NEMProvisionNamespace, NEMSignTx, NEMTransactionCommon, NEMTransfer } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { NEMAggregateModificationTransaction, NEMImportanceTransaction, NEMMosaicCreationTransaction, NEMProvisionNamespaceTransaction, NEMSupplyChangeTransaction, NEMTransaction, NEMTransferTransaction } from '../../types';
export default class NEMSignTransaction extends BaseMethod<NEMSignTx> {
    NEM_MOSAIC_LEVY_TYPES: Record<number, string>;
    NEM_SUPPLY_CHANGE_TYPES: Record<number, string>;
    NEM_AGGREGATE_MODIFICATION_TYPES: Record<number, string>;
    NEM_IMPORTANCE_TRANSFER_MODES: Record<number, string>;
    getCommon: (tx: NEMTransaction, address_n?: number[]) => NEMTransactionCommon;
    transferMessage: (tx: NEMTransferTransaction) => NEMTransfer;
    importanceTransferMessage: (tx: NEMImportanceTransaction) => NEMImportanceTransfer;
    aggregateModificationMessage: (tx: NEMAggregateModificationTransaction) => NEMAggregateModification;
    provisionNamespaceMessage: (tx: NEMProvisionNamespaceTransaction) => NEMProvisionNamespace;
    mosaicCreationMessage: (tx: NEMMosaicCreationTransaction) => NEMMosaicCreation;
    supplyChangeMessage: (tx: NEMSupplyChangeTransaction) => NEMMosaicSupplyChange;
    parseTx: (tx: NEMTransaction, address_n: number[]) => NEMSignTx;
    init(): void;
    run(): Promise<import("../../device/DeviceCommands").TypedResponseMessage<"NEMSignedTx">>;
}
//# sourceMappingURL=NEMSignTransaction.d.ts.map