/// <reference types="node" />
import { StellarSignedTx, StellarSignTx as HardwareStellarSignTx } from '@chargerwallet/hd-transport';
import { BaseMethod } from '../BaseMethod';
import { StellarOperation } from '../../types';
export default class StellarSignTransaction extends BaseMethod<HardwareStellarSignTx> {
    operations: any[];
    parseOperation: (op: StellarOperation) => {
        type: string;
        source_account: string | undefined;
        new_account: string;
        starting_balance: string;
        destination_account?: undefined;
        asset?: undefined;
        amount?: undefined;
        send_asset?: undefined;
        send_max?: undefined;
        destination_asset?: undefined;
        destination_amount?: undefined;
        paths?: undefined;
        buying_asset?: undefined;
        selling_asset?: undefined;
        price_n?: undefined;
        price_d?: undefined;
        offer_id?: undefined;
        limit?: undefined;
        trusted_account?: undefined;
        asset_type?: undefined;
        asset_code?: undefined;
        is_authorized?: undefined;
        key?: undefined;
        value?: undefined;
        bump_to?: undefined;
    } | {
        type: string;
        source_account: string | undefined;
        destination_account: string;
        asset: import("../../types").StellarAsset | undefined;
        amount: string;
        new_account?: undefined;
        starting_balance?: undefined;
        send_asset?: undefined;
        send_max?: undefined;
        destination_asset?: undefined;
        destination_amount?: undefined;
        paths?: undefined;
        buying_asset?: undefined;
        selling_asset?: undefined;
        price_n?: undefined;
        price_d?: undefined;
        offer_id?: undefined;
        limit?: undefined;
        trusted_account?: undefined;
        asset_type?: undefined;
        asset_code?: undefined;
        is_authorized?: undefined;
        key?: undefined;
        value?: undefined;
        bump_to?: undefined;
    } | {
        type: string;
        source_account: string | undefined;
        send_asset: import("../../types").StellarAsset;
        send_max: string;
        destination_account: string;
        destination_asset: import("../../types").StellarAsset;
        destination_amount: string;
        paths: import("../../types").StellarAsset[] | undefined;
        new_account?: undefined;
        starting_balance?: undefined;
        asset?: undefined;
        amount?: undefined;
        buying_asset?: undefined;
        selling_asset?: undefined;
        price_n?: undefined;
        price_d?: undefined;
        offer_id?: undefined;
        limit?: undefined;
        trusted_account?: undefined;
        asset_type?: undefined;
        asset_code?: undefined;
        is_authorized?: undefined;
        key?: undefined;
        value?: undefined;
        bump_to?: undefined;
    } | {
        type: string;
        source_account: string | undefined;
        buying_asset: import("../../types").StellarAsset;
        selling_asset: import("../../types").StellarAsset;
        amount: string;
        price_n: number;
        price_d: number;
        new_account?: undefined;
        starting_balance?: undefined;
        destination_account?: undefined;
        asset?: undefined;
        send_asset?: undefined;
        send_max?: undefined;
        destination_asset?: undefined;
        destination_amount?: undefined;
        paths?: undefined;
        offer_id?: undefined;
        limit?: undefined;
        trusted_account?: undefined;
        asset_type?: undefined;
        asset_code?: undefined;
        is_authorized?: undefined;
        key?: undefined;
        value?: undefined;
        bump_to?: undefined;
    } | {
        type: string;
        source_account: string | undefined;
        buying_asset: import("../../types").StellarAsset;
        selling_asset: import("../../types").StellarAsset;
        amount: string;
        offer_id: string | undefined;
        price_n: number;
        price_d: number;
        new_account?: undefined;
        starting_balance?: undefined;
        destination_account?: undefined;
        asset?: undefined;
        send_asset?: undefined;
        send_max?: undefined;
        destination_asset?: undefined;
        destination_amount?: undefined;
        paths?: undefined;
        limit?: undefined;
        trusted_account?: undefined;
        asset_type?: undefined;
        asset_code?: undefined;
        is_authorized?: undefined;
        key?: undefined;
        value?: undefined;
        bump_to?: undefined;
    } | {
        signer_type?: 0 | 1 | 2 | undefined;
        signer_key?: string | Buffer | undefined;
        signer_weight?: number | undefined;
        type: string;
        source_account: string | undefined;
        clear_flags: number | undefined;
        set_flags: number | undefined;
        master_weight: string | number | undefined;
        low_threshold: string | number | undefined;
        medium_threshold: string | number | undefined;
        high_threshold: string | number | undefined;
        home_domain: string | undefined;
        inflation_destination_account: string | undefined;
        new_account?: undefined;
        starting_balance?: undefined;
        destination_account?: undefined;
        asset?: undefined;
        amount?: undefined;
        send_asset?: undefined;
        send_max?: undefined;
        destination_asset?: undefined;
        destination_amount?: undefined;
        paths?: undefined;
        buying_asset?: undefined;
        selling_asset?: undefined;
        price_n?: undefined;
        price_d?: undefined;
        offer_id?: undefined;
        limit?: undefined;
        trusted_account?: undefined;
        asset_type?: undefined;
        asset_code?: undefined;
        is_authorized?: undefined;
        key?: undefined;
        value?: undefined;
        bump_to?: undefined;
    } | {
        type: string;
        source_account: string | undefined;
        asset: import("../../types").StellarAsset;
        limit: string | undefined;
        new_account?: undefined;
        starting_balance?: undefined;
        destination_account?: undefined;
        amount?: undefined;
        send_asset?: undefined;
        send_max?: undefined;
        destination_asset?: undefined;
        destination_amount?: undefined;
        paths?: undefined;
        buying_asset?: undefined;
        selling_asset?: undefined;
        price_n?: undefined;
        price_d?: undefined;
        offer_id?: undefined;
        trusted_account?: undefined;
        asset_type?: undefined;
        asset_code?: undefined;
        is_authorized?: undefined;
        key?: undefined;
        value?: undefined;
        bump_to?: undefined;
    } | {
        type: string;
        source_account: string | undefined;
        trusted_account: string;
        asset_type: number;
        asset_code: string;
        is_authorized: number;
        new_account?: undefined;
        starting_balance?: undefined;
        destination_account?: undefined;
        asset?: undefined;
        amount?: undefined;
        send_asset?: undefined;
        send_max?: undefined;
        destination_asset?: undefined;
        destination_amount?: undefined;
        paths?: undefined;
        buying_asset?: undefined;
        selling_asset?: undefined;
        price_n?: undefined;
        price_d?: undefined;
        offer_id?: undefined;
        limit?: undefined;
        key?: undefined;
        value?: undefined;
        bump_to?: undefined;
    } | {
        type: string;
        source_account: string | undefined;
        destination_account: string;
        new_account?: undefined;
        starting_balance?: undefined;
        asset?: undefined;
        amount?: undefined;
        send_asset?: undefined;
        send_max?: undefined;
        destination_asset?: undefined;
        destination_amount?: undefined;
        paths?: undefined;
        buying_asset?: undefined;
        selling_asset?: undefined;
        price_n?: undefined;
        price_d?: undefined;
        offer_id?: undefined;
        limit?: undefined;
        trusted_account?: undefined;
        asset_type?: undefined;
        asset_code?: undefined;
        is_authorized?: undefined;
        key?: undefined;
        value?: undefined;
        bump_to?: undefined;
    } | {
        type: string;
        source_account: string | undefined;
        key: string;
        value: string | Buffer | undefined;
        new_account?: undefined;
        starting_balance?: undefined;
        destination_account?: undefined;
        asset?: undefined;
        amount?: undefined;
        send_asset?: undefined;
        send_max?: undefined;
        destination_asset?: undefined;
        destination_amount?: undefined;
        paths?: undefined;
        buying_asset?: undefined;
        selling_asset?: undefined;
        price_n?: undefined;
        price_d?: undefined;
        offer_id?: undefined;
        limit?: undefined;
        trusted_account?: undefined;
        asset_type?: undefined;
        asset_code?: undefined;
        is_authorized?: undefined;
        bump_to?: undefined;
    } | {
        type: string;
        source_account: string | undefined;
        bump_to: string;
        new_account?: undefined;
        starting_balance?: undefined;
        destination_account?: undefined;
        asset?: undefined;
        amount?: undefined;
        send_asset?: undefined;
        send_max?: undefined;
        destination_asset?: undefined;
        destination_amount?: undefined;
        paths?: undefined;
        buying_asset?: undefined;
        selling_asset?: undefined;
        price_n?: undefined;
        price_d?: undefined;
        offer_id?: undefined;
        limit?: undefined;
        trusted_account?: undefined;
        asset_type?: undefined;
        asset_code?: undefined;
        is_authorized?: undefined;
        key?: undefined;
        value?: undefined;
    } | {
        type?: undefined;
        source_account?: undefined;
        new_account?: undefined;
        starting_balance?: undefined;
        destination_account?: undefined;
        asset?: undefined;
        amount?: undefined;
        send_asset?: undefined;
        send_max?: undefined;
        destination_asset?: undefined;
        destination_amount?: undefined;
        paths?: undefined;
        buying_asset?: undefined;
        selling_asset?: undefined;
        price_n?: undefined;
        price_d?: undefined;
        offer_id?: undefined;
        limit?: undefined;
        trusted_account?: undefined;
        asset_type?: undefined;
        asset_code?: undefined;
        is_authorized?: undefined;
        key?: undefined;
        value?: undefined;
        bump_to?: undefined;
    };
    init(): void;
    processTxRequest: (operations: any, index: number) => Promise<StellarSignedTx>;
    run(): Promise<StellarSignedTx>;
}
//# sourceMappingURL=StellarSignTransaction.d.ts.map