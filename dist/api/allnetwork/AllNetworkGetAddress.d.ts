import { BaseMethod } from '../BaseMethod';
import { CoreApi } from '../../types';
import type { AllNetworkAddress, AllNetworkAddressParams, CommonResponseParams, INetwork } from '../../types/api/allNetworkGetAddress';
export default class AllNetworkGetAddress extends BaseMethod<{
    address_n: number[];
    show_display: boolean;
    network: string;
    chain_name?: string;
}[]> {
    init(): void;
    generateMethodName({ network, payload, }: {
        network: INetwork;
        payload: AllNetworkAddressParams;
    }): {
        methodName: keyof CoreApi;
        params: Parameters<CoreApi[keyof CoreApi]>[0] & {
            originPayload: AllNetworkAddressParams;
        };
        dependOnMethods: {
            methodName: keyof CoreApi;
            params: Parameters<CoreApi[keyof CoreApi]>[0];
        }[] | undefined;
    };
    callMethod(methodName: keyof CoreApi, params: any, baseParams: CommonResponseParams): Promise<AllNetworkAddress>;
    run(): Promise<AllNetworkAddress[]>;
}
//# sourceMappingURL=AllNetworkGetAddress.d.ts.map