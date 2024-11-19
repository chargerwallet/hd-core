import {
  EthereumMessageSignature,
  EthereumSignMessageChargerWallet,
  TypedCall,
} from '@chargerwallet/hd-transport';

export default async function ({
  typedCall,
  params,
}: {
  typedCall: TypedCall;
  params: EthereumSignMessageChargerWallet;
}): Promise<EthereumMessageSignature> {
  const res = await typedCall('EthereumSignMessage', 'EthereumMessageSignature', {
    address_n: params.address_n,
    message: params.message,
    // @ts-ignore
    chain_id: params.chain_id,
  });

  return Promise.resolve(res.message);
}
