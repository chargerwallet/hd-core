import EventEmitter$1, { EventEmitter } from 'events';
import { Messages, LowlevelTransportSharedPlugin, Success as Success$1, RecoveryDeviceType, SafetyCheckLevel, ResourceType, NextU2FCounter, SetU2FCounter, CipheredKeyValue as CipheredKeyValue$1, EthereumPublicKey, EthereumMessageSignature, Address, MultisigRedeemScriptType, InputScriptType, PublicKey, MessageSignature, SignedPsbt, PrevInput, TxOutputBinType, TxInput, TxOutputType, TxInputType, StarcoinAddress as StarcoinAddress$1, StarcoinPublicKey as StarcoinPublicKey$1, StarcoinMessageSignature, StarcoinSignedTx, NEMAddress as NEMAddress$1, NEMSignedTx, SolanaAddress as SolanaAddress$1, SolanaSignedTx as SolanaSignedTx$1, StellarAddress as StellarAddress$1, StellarSignedTx, TronAddress as TronAddress$1, UintType, TronResourceCode, TronSignedTx, TronMessageSignature, ConfluxAddress as ConfluxAddress$1, ConfluxMessageSignature, NearAddress as NearAddress$1, NearSignedTx, AptosAddress as AptosAddress$1, AptosMessageSignature as AptosMessageSignature$1, AptosSignedTx as AptosSignedTx$1, AlgorandAddress, AlgorandSignedTx, CosmosAddress as CosmosAddress$1, CosmosSignedTx as CosmosSignedTx$1, SuiAddress as SuiAddress$1, SuiMessageSignature, CardanoAddressParametersType, CardanoMessageSignature, FilecoinAddress as FilecoinAddress$1, FilecoinSignedTx as FilecoinSignedTx$1, PolkadotAddress as PolkadotAddress$1, PolkadotSignedTx as PolkadotSignedTx$1, KaspaAddress as KaspaAddress$1, NervosAddress as NervosAddress$1, NervosSignedTx as NervosSignedTx$1, DnxAddress as DnxAddress$1, TonWalletVersion, TonWorkChain, TonSignedMessage, TonSignedProof, ScdoAddress as ScdoAddress$1, ScdoSignedMessage, ScdoSignedTx as ScdoSignedTx$1, AlephiumMessageSignature, AlephiumSignedTx as AlephiumSignedTx$1, ChargerWalletDeviceInfo, Transport, ChangeOutputScriptType } from '@chargerwallet/hd-transport';
export { Messages as PROTO } from '@chargerwallet/hd-transport';
import { Deferred } from '@chargerwallet/hd-shared';

interface CommonParams {
    keepSession?: boolean;
    retryCount?: number;
    pollIntervalTime?: number;
    timeout?: number;
    passphraseState?: string;
    useEmptyPassphrase?: boolean;
    initSession?: boolean;
    deriveCardano?: boolean;
    detectBootloaderDevice?: boolean;
}
type Params<T> = CommonParams & T & {
    bundle?: undefined;
};
interface Unsuccessful {
    success: false;
    payload: {
        error: string;
        code?: string | number;
    };
}
interface Success<T> {
    success: true;
    payload: T;
}
type Response<T> = Promise<Success<T> | Unsuccessful>;

declare const on: <T extends string, P extends (...args: any[]) => any>(type: T, fn: P) => void;
declare const off: (type: any, fn: any) => void;
declare const removeAllListeners: (type: any) => void;

declare function uiResponse(response: UiResponseEvent): void;

type IAddHardwareGlobalEventListener = (coreMessage: CoreMessage) => void;
interface LowLevelInjectApi {
    call: CallMethod;
    eventEmitter: EventEmitter;
    init: CoreApi['init'];
    dispose: CoreApi['dispose'];
    uiResponse: CoreApi['uiResponse'];
    cancel: CoreApi['cancel'];
    updateSettings: CoreApi['updateSettings'];
    addHardwareGlobalEventListener: (listener: IAddHardwareGlobalEventListener) => void;
}
type LowLevelCoreApi = Omit<CoreApi, 'on' | 'off'> & {
    addHardwareGlobalEventListener: (listener: IAddHardwareGlobalEventListener) => void;
};

declare const safeThrowError: (error: any) => never;

type DeviceStatus = 'available' | 'occupied' | 'used';
declare enum EChargerWalletDeviceMode {
    bootloader = "bootloader",
    normal = "normal",
    notInitialized = "notInitialized",
    backupMode = "backupMode"
}
type UnavailableCapability = 'no-capability' | 'no-support' | 'update-required' | 'trezor-connect-outdated';
type UnavailableCapabilities = {
    [key: string]: UnavailableCapability;
};
type KnownDevice = {
    connectId: string | null;
    uuid: string;
    deviceId: string | null;
    deviceType: IDeviceType | null;
    path: string;
    label: string;
    bleName: string | null;
    name: string;
    error?: typeof undefined;
    mode: EChargerWalletDeviceMode;
    features: Messages.Features;
    unavailableCapabilities: UnavailableCapabilities;
    bleFirmwareVersion: IVersionArray | null;
    firmwareVersion: IVersionArray | null;
};
type SearchDevice = {
    connectId: string | null;
    uuid: string;
    deviceId: string | null;
    deviceType: IDeviceType;
    name: string;
};
type Device$1 = KnownDevice;
type Features = Messages.Features;
type ChargerwalletFeatures = Messages.ChargerwalletFeatures;
type IDeviceType = 'unknown' | 'classic' | 'classic1s' | 'mini' | 'touch' | 'pro';
type IDeviceModel = 'model_classic' | 'model_mini' | 'model_touch';
declare const DeviceModelToTypes: {
    [deviceModel in IDeviceModel]: IDeviceType[];
};
declare const DeviceTypeToModels: {
    [deviceType in IDeviceType]: IDeviceModel[];
};
type IDeviceFirmwareStatus = 'valid' | 'outdated' | 'required' | 'unknown' | 'none';
type IDeviceBLEFirmwareStatus = 'valid' | 'outdated' | 'required' | 'unknown' | 'none';
type ITransportStatus = 'valid' | 'outdated';
type IVersionRange = {
    min: string;
    max?: string;
};
type DeviceFirmwareRange = {
    [deviceType in IDeviceType | IDeviceModel]?: IVersionRange;
};
type FeaturesNarrowing = {
    major_version: 2;
    fw_major: null;
    fw_minor: null;
    fw_patch: null;
    bootloader_mode: true;
    firmware_present: false;
} | {
    major_version: 2;
    fw_major: null;
    fw_minor: null;
    fw_patch: null;
    bootloader_mode: null;
    firmware_present: null;
} | {
    major_version: 2;
    fw_major: 2;
    fw_minor: number;
    fw_patch: number;
    bootloader_mode: true;
    firmware_present: true;
} | {
    major_version: 1;
    fw_major: null;
    fw_minor: null;
    fw_patch: null;
    bootloader_mode: true;
    firmware_present: false;
} | {
    major_version: 1;
    fw_major: null;
    fw_minor: null;
    fw_patch: null;
    bootloader_mode: true;
    firmware_present: true;
};
type StrictFeatures = Features & FeaturesNarrowing;
type SupportFeatureType = {
    support: boolean;
    require?: string;
};
type SupportFeatures = {
    inputPinOnSoftware: SupportFeatureType;
    modifyHomescreen: SupportFeatureType;
};

type ConnectSettings = {
    connectSrc?: string;
    debug?: boolean;
    transportReconnect?: boolean;
    lazyLoad?: boolean;
    origin?: string;
    parentOrigin?: string;
    configSrc: string;
    iframeSrc: string;
    version: string;
    priority: number;
    trustedHost: boolean;
    supportedBrowser?: boolean;
    env: 'node' | 'web' | 'webextension' | 'electron' | 'react-native' | 'webusb' | 'lowlevel';
    timestamp: number;
    isFrame?: boolean;
    preRelease?: boolean;
    fetchConfig?: boolean;
    extension?: string;
};
type IVersionArray = [number, number, number];
type ILocale = 'zh-CN' | 'en-US';
type IFirmwareReleaseInfo = {
    required: boolean;
    url: string;
    resource?: string;
    fullResource?: string;
    fullResourceRange?: string[];
    bootloaderResource?: string;
    bootloaderVersion?: IVersionArray;
    displayBootloaderVersion?: IVersionArray;
    bootloaderRelatedFirmwareVersion?: IVersionArray;
    bootloaderChangelog?: {
        [k in ILocale]: string;
    };
    fingerprint: string;
    version: IVersionArray;
    changelog: {
        [k in ILocale]: string;
    };
};
type IBLEFirmwareReleaseInfo = {
    required: boolean;
    url: string;
    webUpdate: string;
    fingerprint: string;
    fingerprintWeb: string;
    version: IVersionArray;
    changelog: {
        [k in ILocale]: string;
    };
};
type IKnownDevice = Exclude<IDeviceType, 'unknown'>;
type DeviceTypeMap = {
    [k in IKnownDevice]: {
        firmware: IFirmwareReleaseInfo[];
        'firmware-v2'?: IFirmwareReleaseInfo[];
        'firmware-v5'?: IFirmwareReleaseInfo[];
        ble: IBLEFirmwareReleaseInfo[];
    };
};
type AssetsMap = {
    bridge: {
        version: IVersionArray;
        linux32Rpm: string;
        linux64Rpm: string;
        linux32Deb: string;
        linux64Deb: string;
        win: string;
        mac: string;
        sha256sumAsc: string;
        changelog: {
            [k in ILocale]: string;
        };
    };
};
type RemoteConfigResponse = {
    bridge: AssetsMap['bridge'];
} & DeviceTypeMap;

declare function init$1(settings: Partial<ConnectSettings>, lowLevelApi?: LowLevelCoreApi, pulgin?: LowlevelTransportSharedPlugin): Promise<boolean>;
declare function updateSettings(settings: Partial<ConnectSettings>): Promise<boolean>;

declare function testInitializeDeviceDuration(connectId?: string, params?: CommonParams): Response<number>;

declare function getLogs(): Response<string[]>;

interface FirmwareRange {
    '1': {
        min: string;
        max: string;
    };
    '2': {
        min: string;
        max: string;
    };
}
type MajorVersion = 1 | 2;
type VersionArray = [MajorVersion, number, number];
type FirmwareRelease$2 = {
    required: boolean;
    url: string;
    fingerprint: string;
    changelog: string;
    min_bridge_version: [number, number, number];
    version: VersionArray;
    min_firmware_version: VersionArray;
    min_bootloader_version: VersionArray;
    bootloader_version?: VersionArray;
    url_bitcoinonly?: string;
    fingerprint_bitcoinonly?: string;
    notes?: string;
    rollout?: number;
    channel?: string;
};
type ReleaseInfo = {
    changelog: FirmwareRelease$2[] | null;
    release: FirmwareRelease$2;
    isLatest: boolean;
    latest: FirmwareRelease$2;
    isRequired: boolean | null;
    isNewer: boolean | null;
};
type TransportReleaseStatus = 'valid' | 'outdated';

declare function checkTransportRelease(connectId?: string): Response<TransportReleaseStatus>;

declare function checkBridgeStatus(): Response<boolean>;

type CheckBridgeReleaseResponse = {
    shouldUpdate: boolean;
    status: 'outdated' | 'valid';
    releaseVersion: string;
} | null;
declare function checkBridgeRelease(connectId?: string, params?: CommonParams & {
    willUpdateFirmwareVersion?: string;
}): Response<CheckBridgeReleaseResponse>;

type CheckBootloaderReleaseResponse = {
    shouldUpdate: boolean;
    status: 'outdated' | 'valid';
    release: string | undefined;
    bootloaderMode: boolean;
} | null;
declare function checkBootloaderRelease(connectId?: string, params?: CommonParams & {
    willUpdateFirmwareVersion?: string;
}): Response<CheckBootloaderReleaseResponse>;

type FirmwareRelease$1 = {
    status: IDeviceFirmwareStatus;
    changelog?: {
        'zh-CN': string;
        'en-US': string;
    }[];
    release: IDeviceBLEFirmwareStatus | IBLEFirmwareReleaseInfo;
    bootloaderMode?: boolean;
};
type AllFirmwareRelease = {
    firmware: FirmwareRelease$1;
    ble: FirmwareRelease$1;
    bootloader?: FirmwareRelease$1;
    bridge?: FirmwareRelease$1;
};
type IPlatform$1 = 'native' | 'desktop' | 'ext' | 'web' | 'webEmbed';
type CheckAllFirmwareReleaseParams = {
    platform?: IPlatform$1;
};
declare function checkAllFirmwareRelease(connectId?: string, params?: CommonParams & CheckAllFirmwareReleaseParams): Response<AllFirmwareRelease>;

declare function searchDevices(): Response<SearchDevice[]>;

declare function getFeatures(connectId?: string, params?: CommonParams): Response<Features>;

declare function getChargerwalletFeatures(connectId?: string, params?: CommonParams): Response<ChargerwalletFeatures>;

declare function getPassphraseState(connectId?: string, params?: CommonParams): Response<string>;

type FirmwareRelease = {
    status: IDeviceFirmwareStatus;
    changelog: {
        'en-US': string;
        'zh-CN': string;
    }[];
    release: IFirmwareReleaseInfo;
    bootloaderMode: boolean;
};
declare function checkFirmwareRelease(connectId?: string): Response<FirmwareRelease>;

type BleFirmwareRelease = {
    status: IDeviceBLEFirmwareStatus;
    changelog: {
        'zh-CN': string;
        'en-US': string;
    }[];
    release: IBLEFirmwareReleaseInfo;
    bootloaderMode: boolean;
};
declare function checkBLEFirmwareRelease(connectId?: string): Response<BleFirmwareRelease>;

type IUpdateType = 'firmware' | 'ble';
interface FirmwareUpdateBinaryParams {
    binary: ArrayBuffer;
    updateType: IUpdateType;
}
interface FirmwareUpdateParams {
    version?: number[];
    btcOnly?: boolean;
    updateType: IUpdateType;
    forcedUpdateRes?: boolean;
    isUpdateBootloader?: boolean;
}
declare function firmwareUpdate(connectId: string | undefined, params: Params<FirmwareUpdateParams> & {
    rebootOnSuccess?: boolean;
}): Response<Messages.Success>;
declare function firmwareUpdate(connectId: string | undefined, params: Params<FirmwareUpdateBinaryParams> & {
    rebootOnSuccess?: boolean;
}): Response<Messages.Success>;
type IPlatform = 'native' | 'desktop' | 'ext' | 'web' | 'webEmbed';
type Platform = {
    platform: IPlatform;
};
declare function firmwareUpdateV2(connectId: string | undefined, params: Params<FirmwareUpdateParams & Platform>): Response<Messages.Success>;
declare function firmwareUpdateV2(connectId: string | undefined, params: Params<FirmwareUpdateBinaryParams & Platform>): Response<Messages.Success>;

declare function requestWebUsbDevice(): Response<{
    device: KnownDevice;
}>;

type DeviceResetParams = {
    displayRandom?: boolean;
    strength?: number;
    passphraseProtection?: boolean;
    pinProtection?: boolean;
    language?: string;
    label?: string;
    u2fCounter?: number;
    skipBackup?: boolean;
    noBackup?: boolean;
    backupType?: string | number;
};
declare function deviceReset(connectId: string, params: CommonParams & DeviceResetParams): Response<Success$1>;

type DeviceRecoveryParams = {
    wordCount?: number;
    passphraseProtection?: boolean;
    pinProtection?: boolean;
    language?: string;
    label?: string;
    enforceWordlist?: boolean;
    type?: RecoveryDeviceType;
    u2fCounter?: number;
    dryRun?: boolean;
};
declare function deviceRecovery(connectId: string, params: CommonParams & DeviceRecoveryParams): Response<Success$1>;

type DeviceVerifyParams = {
    dataHex: string;
};
type DeviceVerifySignature = {
    cert: string;
    signature: string;
};
declare function deviceVerify(connectId: string, params: CommonParams & DeviceVerifyParams): Response<DeviceVerifySignature>;

declare function deviceWipe(connectId: string): Response<Success$1>;

declare function deviceRebootToBootloader(connectId: string): Response<Success$1>;

declare function deviceRebootToBoardloader(connectId: string): Response<Success$1>;

declare function deviceBackup(connectId: string): Response<Success$1>;

type DeviceChangePinParams = {
    remove?: boolean;
};
declare function deviceChangePin(connectId: string, params: CommonParams & DeviceChangePinParams): Response<Success$1>;

type DeviceSettingsParams = {
    language?: string;
    label?: string;
    usePassphrase?: boolean;
    homescreen?: string;
    passphraseSource?: number;
    autoLockDelayMs?: number;
    displayRotation?: number;
    passphraseAlwaysOnDevice?: boolean;
    safetyChecks?: SafetyCheckLevel;
    experimentalFeatures?: boolean;
};
declare function deviceSettings(connectId: string, params: CommonParams & DeviceSettingsParams): Response<Success$1>;

type DeviceFlagsParams = {
    flags?: number;
};
declare function deviceFlags(connectId: string, params: CommonParams & DeviceFlagsParams): Response<Success$1>;

declare function deviceUpdateReboot(connectId: string): Response<boolean>;

type DeviceUploadResourceParams = {
    suffix: string;
    dataHex: string;
    thumbnailDataHex: string;
    resType: ResourceType;
    nftMetaData: string;
    fileNameNoExt?: string;
};
declare function deviceUploadResource(connectId: string, params: CommonParams & DeviceUploadResourceParams): Response<Success$1>;

type DeviceSupportFeatures = SupportFeatures & {
    device: Device$1 | null;
};
declare function deviceSupportFeatures(connectId?: string): Response<DeviceSupportFeatures>;

declare function deviceFullyUploadResource(connectId: string, params: CommonParams & {
    binary?: ArrayBuffer;
}): Response<Success$1>;

declare function deviceUpdateBootloader(connectId: string, params?: {
    binary?: ArrayBuffer;
}): Response<Success$1>;

declare function deviceLock(connectId: string, params: CommonParams): Response<Success$1>;

declare function deviceCancel(connectId: string, params: CommonParams): Response<Success$1>;

declare function getNextU2FCounter(connectId?: string, params?: CommonParams): Response<NextU2FCounter>;

declare function setU2FCounter(connectId?: string, params?: CommonParams & SetU2FCounter): Response<Success$1>;

type CipheredKeyValue = {
    path: string;
} & CipheredKeyValue$1;
type CipheredKeyValueParams = {
    path: string | number[];
    key: string;
    value: string;
    encrypt?: boolean;
    askOnEncrypt?: boolean;
    askOnDecrypt?: boolean;
    iv?: string;
};
declare function cipherKeyValue(connectId: string, deviceId: string, params: CommonParams & CipheredKeyValueParams): Response<CipheredKeyValue>;
declare function cipherKeyValue(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: CipheredKeyValueParams[];
}): Response<Array<CipheredKeyValue>>;

interface CardanoAddressParameters {
    addressType: Messages.CardanoAddressType;
    path?: string | number[];
    stakingPath?: string | number[];
    stakingKeyHash?: string;
    certificatePointer?: CardanoCertificatePointer;
    paymentScriptHash?: string;
    stakingScriptHash?: string;
}
interface CardanoCertificatePointer {
    blockIndex: number;
    txIndex: number;
    certificateIndex: number;
}
interface CardanoToken {
    assetNameBytes: string;
    amount?: string;
    mintAmount?: string;
}
interface CardanoAssetGroup {
    policyId: string;
    tokenAmounts: CardanoToken[];
}
interface CardanoCertificate {
    type: Messages.CardanoCertificateType;
    path?: string | number[];
    pool?: string;
    poolParameters?: CardanoPoolParameters;
    scriptHash?: string;
    keyHash?: string;
}
interface CardanoPoolOwner {
    stakingKeyPath?: string | number[];
    stakingKeyHash?: string;
}
interface CardanoPoolRelay {
    type: Messages.CardanoPoolRelayType;
    ipv4Address?: string;
    ipv6Address?: string;
    port?: number;
    hostName?: string;
}
interface CardanoPoolMetadata {
    url: string;
    hash: string;
}
interface CardanoPoolMargin {
    numerator: string;
    denominator: string;
}
interface CardanoPoolParameters {
    poolId: string;
    vrfKeyHash: string;
    pledge: string;
    cost: string;
    margin: CardanoPoolMargin;
    rewardAccount: string;
    owners: CardanoPoolOwner[];
    relays: CardanoPoolRelay[];
    metadata: CardanoPoolMetadata;
}
interface CardanoInput {
    path?: string | number[];
    prev_hash: string;
    prev_index: number;
}
type CardanoOutput = ({
    addressParameters: CardanoAddressParameters;
} | {
    address: string;
}) & {
    amount: string;
    tokenBundle?: CardanoAssetGroup[];
    datumHash?: string;
    format?: Messages.CardanoTxOutputSerializationFormat;
    inlineDatum?: string;
    referenceScript?: string;
};
interface CardanoWithdrawal {
    path?: string | number[];
    amount: string;
    scriptHash?: string;
    keyHash?: string;
}
type CardanoMint = CardanoAssetGroup[];
interface CardanoCollateralInput {
    path?: string | number[];
    prev_hash: string;
    prev_index: number;
}
interface CardanoRequiredSigner {
    keyPath?: string | number[];
    keyHash?: string;
}
interface CardanoReferenceInput {
    prev_hash: string;
    prev_index: number;
}
interface CardanoGovernanceRegistrationDelegation {
    votingPublicKey: string;
    weight: number;
}
interface CardanoGovernanceRegistrationParameters {
    votingPublicKey?: string;
    stakingPath: string | number[];
    rewardAddressParameters: CardanoAddressParameters;
    nonce: string;
    format?: Messages.CardanoGovernanceRegistrationFormat;
    delegations?: CardanoGovernanceRegistrationDelegation[];
    votingPurpose?: number;
}
interface CardanoAuxiliaryData {
    hash?: string;
    governanceRegistrationParameters?: CardanoGovernanceRegistrationParameters;
}
interface CardanoSignTransaction {
    inputs: CardanoInput[];
    outputs: CardanoOutput[];
    fee: string;
    ttl?: string;
    certificates?: CardanoCertificate[];
    withdrawals?: CardanoWithdrawal[];
    validityIntervalStart?: string;
    auxiliaryData?: CardanoAuxiliaryData;
    mint?: CardanoMint;
    scriptDataHash?: string;
    collateralInputs?: CardanoCollateralInput[];
    requiredSigners?: CardanoRequiredSigner[];
    collateralReturn?: CardanoOutput;
    totalCollateral?: string;
    referenceInputs?: CardanoReferenceInput[];
    additionalWitnessRequests?: (string | number[])[];
    protocolMagic: number;
    networkId: number;
    signingMode: Messages.CardanoTxSigningMode;
    derivationType?: Messages.CardanoDerivationType;
    includeNetworkId?: boolean;
}
interface CardanoSignedTxWitness {
    type: Messages.CardanoTxWitnessType;
    pubKey: string;
    signature: string;
    chainCode?: string;
}
interface CardanoAuxiliaryDataSupplement {
    type: Messages.CardanoTxAuxiliaryDataSupplementType;
    auxiliaryDataHash: string;
    catalystSignature?: string;
}
interface CardanoSignedTxData {
    hash: string;
    witnesses: CardanoSignedTxWitness[];
    auxiliaryDataSupplement?: CardanoAuxiliaryDataSupplement;
}

type INetwork = 'evm' | 'btc' | 'tbtc' | 'doge' | 'neurai' | 'ltc' | 'bch' | 'sol' | 'algo' | 'near' | 'stc' | 'cfx' | 'tron' | 'aptos' | 'xrp' | 'cosmos' | 'ada' | 'sui' | 'fil' | 'dot' | 'kaspa' | 'nexa' | 'dynex' | 'nervos' | 'scdo' | 'ton' | 'alph' | 'nostr';
type CommonResponseParams = {
    path: string;
    network: INetwork;
    chainName?: string;
    prefix?: string;
};
type AllNetworkAddressParams = {
    path: string | number[];
    network: INetwork;
    chainName?: string;
    prefix?: string;
    showOnChargerWallet?: boolean;
    includePublicKey?: boolean;
    group?: string;
};
type AllNetworkAddressPayload = {
    address: string;
    pub?: string;
    publicKey?: string;
    npub?: string;
} | {
    addressParameters: CardanoAddressParameters;
    protocolMagic: number;
    networkId: number;
    serializedPath: string;
    serializedStakingPath: string;
    address: string;
    xpub?: string;
    stakeAddress?: string;
} | {
    node: {
        depth: number;
        fingerprint: number;
        child_num: number;
        chain_code: string;
        private_key: string | null;
        public_key: string;
    };
    xpub: string;
    root_fingerprint: number;
    xpubSegwit: string;
};
type AllNetworkAddress = CommonResponseParams & {
    success: boolean;
    payload?: AllNetworkAddressPayload | {
        error: string;
        code: number;
        connectId?: string;
        deviceId?: string;
        params: any;
    };
};
type AllNetworkGetAddressParams = {
    bundle: AllNetworkAddressParams[];
};
declare function allNetworkGetAddress(connectId: string, deviceId: string, params: CommonParams & AllNetworkGetAddressParams): Response<AllNetworkAddress[]>;

type EVMAddress = {
    path: string;
    address: string;
};
type EVMGetAddressParams = {
    path: string | number[];
    showOnChargerWallet?: boolean;
    chainId?: number;
};
declare function evmGetAddress(connectId: string, deviceId: string, params: CommonParams & EVMGetAddressParams): Response<EVMAddress>;
declare function evmGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: EVMGetAddressParams[];
}): Response<Array<EVMAddress>>;

type EVMPublicKey = {
    path: string;
    pub: string;
    publicKey?: string;
} & EthereumPublicKey;
type EVMGetPublicKeyParams = {
    path: string | number[];
    showOnChargerWallet?: boolean;
    chainId?: number;
};
declare function evmGetPublicKey(connectId: string, deviceId: string, params: CommonParams & EVMGetPublicKeyParams): Response<EVMPublicKey>;
declare function evmGetPublicKey(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: EVMGetPublicKeyParams[];
}): Response<Array<EVMPublicKey>>;
declare function evmGetPublicKey(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: EVMGetPublicKeyParams[];
    useBatch?: boolean;
}): Response<Omit<EVMPublicKey, 'node' | 'xpub'>>;

type EVMSignMessageParams = {
    path: string | number[];
    messageHex: string;
    chainId?: number;
};
declare function evmSignMessage(connectId: string, deviceId: string, params: CommonParams & EVMSignMessageParams): Response<EthereumMessageSignature>;

type EVMSignMessageEIP712Params = {
    path: string | number[];
    domainHash: string;
    messageHash: string;
};
declare function evmSignMessageEIP712(connectId: string, deviceId: string, params: CommonParams & EVMSignMessageEIP712Params): Response<EthereumMessageSignature>;

type EVMSignedTx = {
    v: string;
    r: string;
    s: string;
};
type EVMTransaction = {
    to: string;
    value: string;
    gasPrice: string;
    gasLimit: string;
    maxFeePerGas?: typeof undefined;
    maxPriorityFeePerGas?: typeof undefined;
    nonce: string;
    data?: string;
    chainId: number;
    txType?: number;
};
type EVMAccessList = {
    address: string;
    storageKeys: string[];
};
type EVMTransactionEIP1559 = {
    to: string;
    value: string;
    gasLimit: string;
    gasPrice?: typeof undefined;
    nonce: string;
    data?: string;
    chainId: number;
    maxFeePerGas: string;
    maxPriorityFeePerGas: string;
    accessList?: EVMAccessList[];
};
type EVMSignTransactionParams = {
    path: string | number[];
    transaction: EVMTransaction | EVMTransactionEIP1559;
};
declare function evmSignTransaction(connectId: string, deviceId: string, params: CommonParams & EVMSignTransactionParams): Response<EVMSignedTx>;

type EthereumSignTypedDataTypeProperty = {
    name: string;
    type: string;
};
type EthereumSignTypedDataTypes = {
    EIP712Domain: EthereumSignTypedDataTypeProperty[];
    [additionalProperties: string]: EthereumSignTypedDataTypeProperty[];
};
type EthereumSignTypedDataMessage<T extends EthereumSignTypedDataTypes> = {
    types: T;
    primaryType: keyof T;
    domain: {
        name?: string;
        version?: string;
        chainId?: number;
        verifyingContract?: string;
        salt?: ArrayBuffer;
    };
    message: {
        [fieldName: string]: any;
    };
};
type EVMSignTypedDataParams = {
    path: string | number[];
    metamaskV4Compat: boolean;
    data: EthereumSignTypedDataMessage<EthereumSignTypedDataTypes>;
    domainHash?: string;
    messageHash?: string;
    chainId?: number;
};
declare function evmSignTypedData(connectId: string, deviceId: string, params: CommonParams & EVMSignTypedDataParams): Response<EthereumMessageSignature>;

type EVMVerifyMessageParams = {
    address: string;
    messageHex: string;
    signature: string;
    chainId?: number;
};
declare function evmVerifyMessage(connectId: string, deviceId: string, params: CommonParams & EVMVerifyMessageParams): Response<Success$1>;

type BTCAddress = {
    path: string;
} & Address;
type BTCGetAddressParams = {
    path: string | number[];
    coin?: string;
    showOnChargerWallet?: boolean;
    multisig?: MultisigRedeemScriptType;
    scriptType?: InputScriptType;
};
declare function btcGetAddress(connectId: string, deviceId: string, params: CommonParams & BTCGetAddressParams): Response<BTCAddress>;
declare function btcGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: BTCGetAddressParams[];
}): Response<Array<BTCAddress>>;

type BTCPublicKey = {
    path: string;
    xpubSegwit?: string;
} & PublicKey;
type BTCGetPublicKeyParams = {
    path: string | number[];
    coin?: string;
    showOnChargerWallet?: boolean;
    scriptType?: InputScriptType;
};
declare function btcGetPublicKey(connectId: string, deviceId: string, params: CommonParams & BTCGetPublicKeyParams): Response<BTCPublicKey>;
declare function btcGetPublicKey(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: BTCGetPublicKeyParams[];
}): Response<Array<BTCPublicKey>>;

type BTCSignMessageParams = {
    path: string | number[];
    messageHex: string;
    coin?: string;
    noScriptType?: boolean;
    dAppSignType?: 'ecdsa' | 'bip322-simple';
};
declare function btcSignMessage(connectId: string, deviceId: string, params: CommonParams & BTCSignMessageParams): Response<MessageSignature>;

type BTCSignPsbtParams = {
    psbt: string;
    coin?: string;
};
declare function btcSignPsbt(connectId: string, deviceId: string, params: CommonParams & BTCSignPsbtParams): Response<SignedPsbt>;

type SignedTransaction = {
    signatures: string[];
    serializedTx: string;
    txid?: string;
};
type TransactionOptions = {
    version?: number;
    lock_time?: number;
    expiry?: number;
    overwintered?: boolean;
    version_group_id?: number;
    timestamp?: number;
    branch_id?: number;
};
type RefTransaction = {
    hash: string;
    version: number;
    inputs: PrevInput[];
    bin_outputs: TxOutputBinType[];
    outputs?: typeof undefined;
    lock_time: number;
    extra_data?: string;
    expiry?: number;
    overwintered?: boolean;
    version_group_id?: number;
    timestamp?: number;
    branch_id?: number;
} | {
    hash: string;
    version: number;
    inputs: TxInput[];
    bin_outputs?: typeof undefined;
    outputs: TxOutputType[];
    lock_time: number;
    extra_data?: string;
    expiry?: number;
    overwintered?: boolean;
    version_group_id?: number;
    timestamp?: number;
    branch_id?: number;
};
type AccountAddress = {
    address: string;
    path: string;
    transfers?: number;
    balance?: string;
    sent?: string;
    received?: string;
};
type AccountAddresses = {
    change: AccountAddress[];
    used: AccountAddress[];
    unused: AccountAddress[];
};
type BTCSignTransactionParams = {
    coin: string;
    inputs: TxInputType[];
    outputs: TxOutputType[];
    refTxs: RefTransaction[];
    account?: {
        addresses: AccountAddresses;
    };
    locktime?: number;
    version?: number;
    expiry?: number;
    overwintered?: boolean;
    versionGroupId?: number;
    branchId?: number;
    timestamp?: number;
};
declare function btcSignTransaction(connectId: string, deviceId: string, params: CommonParams & BTCSignTransactionParams): Response<SignedTransaction>;

type BTCVerifyMessageParams = {
    address: string;
    messageHex: string;
    signature: string;
    coin: string;
};
declare function btcVerifyMessage(connectId: string, deviceId: string, params: CommonParams & BTCVerifyMessageParams): Response<Success$1>;

type StarcoinAddress = {
    path: string;
} & StarcoinAddress$1;
type StarcoinGetAddressParams = {
    path: string | number[];
    showOnChargerWallet?: boolean;
};
declare function starcoinGetAddress(connectId: string, deviceId: string, params: CommonParams & StarcoinGetAddressParams): Response<StarcoinAddress>;
declare function starcoinGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: StarcoinGetAddressParams[];
}): Response<Array<StarcoinAddress>>;

type StarcoinPublicKey = {
    path: string;
} & StarcoinPublicKey$1;
type StarcoinGetPublicKeyParams = {
    path: string | number[];
    showOnChargerWallet?: boolean;
};
declare function starcoinGetPublicKey(connectId: string, deviceId: string, params: CommonParams & StarcoinGetPublicKeyParams): Response<StarcoinPublicKey>;
declare function starcoinGetPublicKey(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: StarcoinGetPublicKeyParams[];
}): Response<Array<StarcoinPublicKey>>;

type StarcoinSignMessageParams = {
    path: string | number[];
    messageHex: string;
};
declare function starcoinSignMessage(connectId: string, deviceId: string, params: CommonParams & StarcoinSignMessageParams): Response<StarcoinMessageSignature>;

type StarcoinSignTransactionParams = {
    path: string | number[];
    rawTx: string;
};
declare function starcoinSignTransaction(connectId: string, deviceId: string, params: CommonParams & StarcoinSignTransactionParams): Response<StarcoinSignedTx>;

type StarcoinVerifyMessageParams = {
    publicKey: string;
    messageHex: string;
    signature: string;
};
declare function starcoinVerifyMessage(connectId: string, deviceId: string, params: CommonParams & StarcoinVerifyMessageParams): Response<Success$1>;

type NEMAddress = {
    path: string;
} & NEMAddress$1;
type NEMGetAddressParams = {
    path: string | number[];
    network?: number;
    showOnChargerWallet?: boolean;
};
declare function nemGetAddress(connectId: string, deviceId: string, params: CommonParams & NEMGetAddressParams): Response<NEMAddress>;
declare function nemGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: NEMGetAddressParams[];
}): Response<Array<NEMAddress>>;

type MosaicID = {
    namespaceId: string;
    name: string;
};
type MosaicDefinition = {
    levy?: {
        type?: number;
        fee?: number;
        recipient?: string;
        mosaicId?: MosaicID;
    };
    id: MosaicID;
    description: string;
    properties?: Array<{
        name: 'divisibility' | 'initialSupply' | 'supplyMutable' | 'transferable';
        value: string;
    }>;
};
type NEMMosaic = {
    mosaicId: MosaicID;
    quantity: number;
};
type Modification = {
    modificationType: number;
    cosignatoryAccount: string;
};
type Message = {
    payload?: string;
    type?: number;
    publicKey?: string;
};
type TransactionCommon = {
    version: number;
    timeStamp: number;
    fee: number;
    deadline?: number;
    signer?: string;
};
type NEMTransferTransaction = TransactionCommon & {
    type: 0x0101;
    recipient: string;
    amount: number | string;
    mosaics?: NEMMosaic[];
    message?: Message;
};
type NEMImportanceTransaction = TransactionCommon & {
    type: 0x0801;
    importanceTransfer: {
        mode: number;
        publicKey: string;
    };
};
type NEMAggregateModificationTransaction = TransactionCommon & {
    type: 0x1001;
    modifications?: Modification[];
    minCosignatories: {
        relativeChange: number;
    };
};
type NEMProvisionNamespaceTransaction = TransactionCommon & {
    type: 0x2001;
    newPart?: string;
    parent?: string;
    rentalFeeSink?: string;
    rentalFee?: number;
};
type NEMMosaicCreationTransaction = TransactionCommon & {
    type: 0x4001;
    mosaicDefinition: MosaicDefinition;
    creationFeeSink?: string;
    creationFee?: number;
};
type NEMSupplyChangeTransaction = TransactionCommon & {
    type: 0x4002;
    mosaicId: MosaicID;
    supplyType: number;
    delta?: number;
};
type Transaction = NEMTransferTransaction | NEMImportanceTransaction | NEMAggregateModificationTransaction | NEMProvisionNamespaceTransaction | NEMMosaicCreationTransaction | NEMSupplyChangeTransaction;
type NEMMultisigTransaction = TransactionCommon & {
    type: 0x0102 | 0x1002 | 0x1004;
    otherTrans: Transaction;
};
type NEMTransaction = Transaction | NEMMultisigTransaction;
type NEMSignTransactionParams = {
    path: string | number[];
    transaction: NEMTransaction;
};
declare function nemSignTransaction(connectId: string, deviceId: string, params: CommonParams & NEMSignTransactionParams): Response<NEMSignedTx>;

type SolanaAddress = {
    path: string;
} & SolanaAddress$1;
type SolanaGetAddressParams = {
    path: string | number[];
    showOnChargerWallet?: boolean;
};
declare function solGetAddress(connectId: string, deviceId: string, params: CommonParams & SolanaGetAddressParams): Response<SolanaAddress>;
declare function solGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: SolanaGetAddressParams[];
}): Response<Array<SolanaAddress>>;

type SolanaSignedTx = {
    path: string;
} & SolanaSignedTx$1;
type SolanaSignTransactionParams = {
    path: string | number[];
    rawTx?: string;
};
declare function solSignTransaction(connectId: string, deviceId: string, params: CommonParams & SolanaSignTransactionParams): Response<SolanaSignedTx>;
declare function solSignTransaction(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: SolanaSignTransactionParams[];
}): Response<Array<SolanaSignedTx>>;

type StellarAddress = {
    path: string;
} & StellarAddress$1;
type StellarGetAddressParams = {
    path: string | number[];
    showOnChargerWallet?: boolean;
};
declare function stellarGetAddress(connectId: string, deviceId: string, params: CommonParams & StellarGetAddressParams): Response<StellarAddress>;
declare function stellarGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: StellarGetAddressParams[];
}): Response<Array<StellarAddress>>;

type StellarAsset = {
    type: 0 | 1 | 2;
    code: string;
    issuer?: string;
};
type StellarCreateAccountOperation = {
    type: 'createAccount';
    source?: string;
    destination: string;
    startingBalance: string;
};
type StellarPaymentOperation = {
    type: 'payment';
    source?: string;
    destination: string;
    asset?: StellarAsset | typeof undefined;
    amount: string;
};
type StellarPathPaymentOperation = {
    type: 'pathPayment';
    source?: string;
    sendAsset: StellarAsset;
    sendMax: string;
    destination: string;
    destAsset: StellarAsset;
    destAmount: string;
    path?: StellarAsset[];
};
type StellarPassiveOfferOperation = {
    type: 'createPassiveOffer';
    source?: string;
    buying: StellarAsset;
    selling: StellarAsset;
    amount: string;
    price: {
        n: number;
        d: number;
    };
};
type StellarManageOfferOperation = {
    type: 'manageOffer';
    source?: string;
    buying: StellarAsset;
    selling: StellarAsset;
    amount: string;
    offerId?: string;
    price: {
        n: number;
        d: number;
    };
};
type StellarSetOptionsOperation = {
    type: 'setOptions';
    source?: string;
    signer?: {
        type: 0 | 1 | 2;
        key: string | Buffer;
        weight?: number;
    };
    inflationDest?: string;
    clearFlags?: number;
    setFlags?: number;
    masterWeight?: number | string;
    lowThreshold?: number | string;
    medThreshold?: number | string;
    highThreshold?: number | string;
    homeDomain?: string;
};
type StellarChangeTrustOperation = {
    type: 'changeTrust';
    source?: string;
    line: StellarAsset;
    limit?: string;
};
type StellarAllowTrustOperation = {
    type: 'allowTrust';
    source?: string;
    trustor: string;
    assetCode: string;
    assetType: number;
    authorize?: boolean | typeof undefined;
};
type StellarAccountMergeOperation = {
    type: 'accountMerge';
    source?: string;
    destination: string;
};
type StellarManageDataOperation = {
    type: 'manageData';
    source?: string;
    name: string;
    value?: Buffer | string;
};
type StellarBumpSequenceOperation = {
    type: 'bumpSequence';
    source?: string;
    bumpTo: string;
};
type StellarInflationOperation = {
    type: 'inflation';
    source?: string;
};
type StellarOperation = StellarCreateAccountOperation | StellarPaymentOperation | StellarPathPaymentOperation | StellarPassiveOfferOperation | StellarManageOfferOperation | StellarSetOptionsOperation | StellarChangeTrustOperation | StellarAllowTrustOperation | StellarAccountMergeOperation | StellarInflationOperation | StellarManageDataOperation | StellarBumpSequenceOperation;
type StellarTransaction = {
    source: string;
    fee: number;
    sequence: string | number;
    timebounds?: {
        minTime: number;
        maxTime: number;
    };
    memo?: {
        type: 0 | 1 | 2 | 3 | 4;
        id?: string;
        text?: string;
        hash?: string | Buffer;
    };
    operations: StellarOperation[];
};
type StellarSignTransactionParams = {
    path: string | number[];
    networkPassphrase: string;
    transaction: StellarTransaction;
};
declare function stellarSignTransaction(connectId: string, deviceId: string, params: CommonParams & StellarSignTransactionParams): Response<StellarSignedTx>;

type TronAddress = {
    path: string;
} & TronAddress$1;
type TronGetAddressParams = {
    path: string | number[];
    showOnChargerWallet?: boolean;
};
declare function tronGetAddress(connectId: string, deviceId: string, params: CommonParams & TronGetAddressParams): Response<TronAddress>;
declare function tronGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: TronGetAddressParams[];
}): Response<Array<TronAddress>>;

type TronTransferContract = {
    toAddress?: string;
    amount?: UintType;
};
type TronTriggerSmartContract = {
    contractAddress?: string;
    callValue?: number;
    data?: string;
    callTokenValue?: number;
    assetId?: number;
};
type TronFreezeBalanceV2Contract = {
    frozenBalance?: number;
    resource?: TronResourceCode;
};
type TronUnfreezeBalanceV2Contract = {
    resource?: TronResourceCode;
    unfreezeBalance?: number;
};
type TronDelegateResourceContract = {
    resource?: TronResourceCode;
    balance?: number;
    receiverAddress?: string;
    lock?: boolean;
};
type TronUnDelegateResourceContract = {
    resource?: TronResourceCode;
    balance?: number;
    receiverAddress?: string;
};
type TronWithdrawBalanceContract = {
    ownerAddress?: string;
};
type TronWithdrawExpireUnfreezeContract = undefined;
type TronTransactionContract = {
    transferContract?: TronTransferContract;
    triggerSmartContract?: TronTriggerSmartContract;
    freezeBalanceV2Contract?: TronFreezeBalanceV2Contract;
    unfreezeBalanceV2Contract?: TronUnfreezeBalanceV2Contract;
    delegateResourceContract?: TronDelegateResourceContract;
    unDelegateResourceContract?: TronUnDelegateResourceContract;
    withdrawBalanceContract?: TronWithdrawBalanceContract;
    withdrawExpireUnfreezeContract?: TronWithdrawExpireUnfreezeContract;
};
type TronTransaction = {
    refBlockBytes: string;
    refBlockHash: string;
    expiration: number;
    data?: string;
    contract: TronTransactionContract;
    timestamp: number;
    feeLimit?: number;
};
type TronSignTransactionParams = {
    path: string | number[];
    transaction: TronTransaction;
};
declare function tronSignTransaction(connectId: string, deviceId: string, params: CommonParams & TronSignTransactionParams): Response<TronSignedTx>;

type TronSignMessageParams = {
    path: string | number[];
    messageHex: string;
};
declare function tronSignMessage(connectId: string, deviceId: string, params: CommonParams & TronSignMessageParams): Response<TronMessageSignature>;

type ConfluxAddress = {
    path: string;
} & ConfluxAddress$1;
type ConfluxGetAddressParams = {
    path: string | number[];
    chainId?: number;
    showOnChargerWallet?: boolean;
};
declare function confluxGetAddress(connectId: string, deviceId: string, params: CommonParams & ConfluxGetAddressParams): Response<ConfluxAddress>;
declare function confluxGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: ConfluxGetAddressParams[];
}): Response<Array<ConfluxAddress>>;

type ConfluxSignMessageParams = {
    path: string | number[];
    messageHex: string;
};
declare function confluxSignMessage(connectId: string, deviceId: string, params: CommonParams & ConfluxSignMessageParams): Response<ConfluxMessageSignature>;

type ConfluxSignMessageCIP23Params = {
    path: string | number[];
    domainHash: string;
    messageHash: string;
};
declare function confluxSignMessageCIP23(connectId: string, deviceId: string, params: CommonParams & ConfluxSignMessageCIP23Params): Response<ConfluxMessageSignature>;

type ConfluxSignedTx = {
    v: string;
    r: string;
    s: string;
};
type ConfluxTransaction = {
    to: string;
    value: string;
    gasLimit: string;
    gasPrice: string;
    nonce: string;
    epochHeight: string;
    storageLimit: string;
    chainId?: number;
    data?: string;
    data_initial_chunk?: string;
    data_length?: string;
};
type ConfluxSignTransactionParams = {
    path: string | number[];
    transaction: ConfluxTransaction;
};
declare function confluxSignTransaction(connectId: string, deviceId: string, params: CommonParams & ConfluxSignTransactionParams): Response<ConfluxSignedTx>;

type NearAddress = {
    path: string;
} & NearAddress$1;
type NearGetAddressParams = {
    path: string | number[];
    showOnChargerWallet?: boolean;
};
declare function nearGetAddress(connectId: string, deviceId: string, params: CommonParams & NearGetAddressParams): Response<NearAddress>;
declare function nearGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: NearGetAddressParams[];
}): Response<Array<NearAddress>>;

type NearSignTransactionParams = {
    path: string | number[];
    rawTx: string;
};
declare function nearSignTransaction(connectId: string, deviceId: string, params: CommonParams & NearSignTransactionParams): Response<NearSignedTx>;

type AptosAddress = {
    path: string;
    pub?: string;
    publicKey?: string;
} & AptosAddress$1;
type AptosGetAddressParams = {
    path: string | number[];
    showOnChargerWallet?: boolean;
};
declare function aptosGetAddress(connectId: string, deviceId: string, params: CommonParams & AptosGetAddressParams): Response<AptosAddress>;
declare function aptosGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: AptosGetAddressParams[];
}): Response<Array<AptosAddress>>;

type AptosPublicKey = {
    path: string;
    pub: string;
    publicKey?: string;
};
type AptosGetPublicKeyParams = {
    path: string | number[];
    showOnChargerWallet?: boolean;
};
declare function aptosGetPublicKey(connectId: string, deviceId: string, params: CommonParams & AptosGetPublicKeyParams): Response<AptosPublicKey>;
declare function aptosGetPublicKey(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: AptosGetPublicKeyParams[];
}): Response<Array<AptosPublicKey>>;

type AptosMessageSignature = {
    path: string;
    fullMessage: string;
} & AptosMessageSignature$1;
declare type AptosMessagePayload = {
    address?: string;
    chainId?: string;
    application?: string;
    nonce: string;
    message: string;
};
type AptosSignMessageParams = {
    path: string | number[];
    payload: AptosMessagePayload;
};
declare function aptosSignMessage(connectId: string, deviceId: string, params: CommonParams & AptosSignMessageParams): Response<AptosMessageSignature>;

type AptosSignedTx = {
    path: string;
} & AptosSignedTx$1;
type AptosSignTransactionParams = {
    path: string | number[];
    rawTx?: string;
};
declare function aptosSignTransaction(connectId: string, deviceId: string, params: CommonParams & AptosSignTransactionParams): Response<AptosSignedTx>;

type AlgoAddress = {
    path: string;
} & AlgorandAddress;
type AlgoGetAddressParams = {
    path: string | number[];
    showOnChargerWallet?: boolean;
};
declare function algoGetAddress(connectId: string, deviceId: string, params: CommonParams & AlgoGetAddressParams): Response<AlgoAddress>;
declare function algoGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: AlgoGetAddressParams[];
}): Response<Array<AlgoAddress>>;

type AlgoSignedTx = {
    path: string;
} & AlgorandSignedTx;
type AlgoSignTransactionParams = {
    path: string | number[];
    rawTx?: string;
};
declare function algoSignTransaction(connectId: string, deviceId: string, params: CommonParams & AlgoSignTransactionParams): Response<AlgoSignedTx>;

type CosmosAddress = {
    path: string;
} & CosmosAddress$1;
type CosmosGetAddressParams = {
    path: string | number[];
    hrp?: string;
    showOnChargerWallet?: boolean;
};
declare function cosmosGetAddress(connectId: string, deviceId: string, params: CommonParams & CosmosGetAddressParams): Response<CosmosAddress>;
declare function cosmosGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: CosmosGetAddressParams[];
}): Response<Array<CosmosAddress>>;

type CosmosPublicKey = {
    path: string;
    pub: string;
    publicKey?: string;
};
type CosmosGetPublicKeyParams = {
    path: string | number[];
    curve?: string;
    showOnChargerWallet?: boolean;
};
declare function cosmosGetPublicKey(connectId: string, deviceId: string, params: CommonParams & CosmosGetPublicKeyParams): Response<CosmosPublicKey>;
declare function cosmosGetPublicKey(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: CosmosGetPublicKeyParams[];
}): Response<Array<CosmosPublicKey>>;

type CosmosSignedTx = {
    path: string;
} & CosmosSignedTx$1;
type CosmosSignTransactionParams = {
    path: string | number[];
    rawTx?: string;
};
declare function cosmosSignTransaction(connectId: string, deviceId: string, params: CommonParams & CosmosSignTransactionParams): Response<CosmosSignedTx>;

type XrpAddress = {
    path: string;
    pub?: string;
    publicKey?: string;
    address: string;
};
type XrpGetAddressParams = {
    path: string | number[];
    showOnChargerWallet?: boolean;
};
declare function xrpGetAddress(connectId: string, deviceId: string, params: CommonParams & XrpGetAddressParams): Response<XrpAddress>;
declare function xrpGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: XrpGetAddressParams[];
}): Response<XrpAddress[]>;

type XrpSignTransactionResponse = {
    serializedTx: string;
    signature: string;
};
type XrpPayment = {
    amount: string;
    destination: string;
    destinationTag?: number;
};
type XrpTransaction = {
    fee: string;
    flags?: number;
    sequence: number;
    maxLedgerVersion?: number;
    payment: XrpPayment;
};
declare function xrpSignTransaction(connectId: string, deviceId: string, params: CommonParams & XrpTransaction): Response<XrpSignTransactionResponse>;

type SuiAddress = {
    path: string;
    pub?: string;
    publicKey?: string;
} & SuiAddress$1;
type SuiGetAddressParams = {
    path: string | number[];
    showOnChargerWallet?: boolean;
};
declare function suiGetAddress(connectId: string, deviceId: string, params: CommonParams & SuiGetAddressParams): Response<SuiAddress>;
declare function suiGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: SuiGetAddressParams[];
}): Response<Array<SuiAddress>>;

type SuiPublicKey = {
    path: string;
    pub: string;
    publicKey?: string;
};
type SuiGetPublicKeyParams = {
    path: string | number[];
    showOnChargerWallet?: boolean;
};
declare function suiGetPublicKey(connectId: string, deviceId: string, params: CommonParams & SuiGetPublicKeyParams): Response<SuiPublicKey>;
declare function suiGetPublicKey(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: SuiGetPublicKeyParams[];
}): Response<Array<SuiPublicKey>>;

type SuiSignMessageParams = {
    path: string | number[];
    messageHex: string;
};
declare function suiSignMessage(connectId: string, deviceId: string, params: CommonParams & SuiSignMessageParams): Response<SuiMessageSignature>;

type SuiSignedTx = {
    path: string;
} & AptosSignedTx$1;
type SuiSignTransactionParams = {
    path: string | number[];
    rawTx?: string;
};
declare function suiSignTransaction(connectId: string, deviceId: string, params: CommonParams & SuiSignTransactionParams): Response<SuiSignedTx>;

type CardanoGetAddressMethodParams = {
    addressParameters: CardanoAddressParameters;
    networkId: number;
    protocolMagic: number;
    derivationType: number;
    address?: string;
    isCheck?: boolean;
    showOnChargerWallet: boolean;
};
type CardanoGetAddressParams = {
    address_parameters: CardanoAddressParametersType;
    network_id: number;
    protocol_magic: number;
    derivation_type: number;
    address: string;
    show_display: boolean;
};
type CardanoAddress = {
    addressParameters: CardanoAddressParameters;
    protocolMagic: number;
    networkId: number;
    serializedPath: string;
    serializedStakingPath: string;
    address: string;
    xpub?: string;
    stakeAddress?: string;
};
declare function cardanoGetAddress(connectId: string, deviceId: string, params: CommonParams & CardanoGetAddressMethodParams): Response<CardanoAddress>;
declare function cardanoGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: CardanoGetAddressMethodParams[];
}): Response<CardanoAddress[]>;

type CardanoPublicKey = {
    path: number[];
    serializedPath: string;
    xpub: string;
    node: Messages.HDNodeType;
};
type CardanoPublicKeyMethodParams = {
    path: string | number[];
    derivationType?: number;
    showOnChargerWallet?: boolean;
};
declare function cardanoGetPublicKey(connectId: string, deviceId: string, params: CommonParams & CardanoPublicKeyMethodParams): Response<CardanoPublicKey>;
declare function cardanoGetPublicKey(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: CardanoPublicKeyMethodParams[];
}): Response<CardanoPublicKey[]>;

declare function cardanoSignTransaction(connectId: string, deviceId: string, params: CommonParams & CardanoSignTransaction): Response<CardanoSignedTxData>;

type CardanoSignMessageMethodParams = {
    path: string;
    message: string;
    derivationType: number;
    networkId: number;
};
declare function cardanoSignMessage(connectId: string, deviceId: string, params: CommonParams & CardanoSignMessageMethodParams): Response<CardanoMessageSignature>;

type FilecoinAddress = {
    path: string;
} & FilecoinAddress$1;
type FilecoinGetAddressParams = {
    path: string | number[];
    showOnChargerWallet?: boolean;
    isTestnet?: boolean;
};
declare function filecoinGetAddress(connectId: string, deviceId: string, params: CommonParams & FilecoinGetAddressParams): Response<FilecoinAddress>;
declare function filecoinGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: FilecoinGetAddressParams[];
}): Response<Array<FilecoinAddress>>;

type FilecoinSignedTx = {
    path: string;
} & FilecoinSignedTx$1;
type FilecoinSignTransactionParams = {
    path: string | number[];
    rawTx?: string;
    isTestnet?: boolean;
};
declare function filecoinSignTransaction(connectId: string, deviceId: string, params: CommonParams & FilecoinSignTransactionParams): Response<FilecoinSignedTx>;
declare function filecoinSignTransaction(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: FilecoinSignTransactionParams[];
}): Response<Array<FilecoinSignedTx>>;

type PolkadotAddress = {
    path: string;
    pub: string;
    publicKey?: string;
} & PolkadotAddress$1;
type PolkadotGetAddressParams = {
    path: string | number[];
    prefix: number;
    network: string;
    showOnChargerWallet?: boolean;
};
declare function polkadotGetAddress(connectId: string, deviceId: string, params: CommonParams & PolkadotGetAddressParams): Response<PolkadotAddress>;
declare function polkadotGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: PolkadotGetAddressParams[];
}): Response<Array<PolkadotAddress>>;

type PolkadotSignedTx = {
    path: string;
} & PolkadotSignedTx$1;
type PolkadotSignTransactionParams = {
    path: string | number[];
    network: string;
    rawTx?: string;
};
declare function polkadotSignTransaction(connectId: string, deviceId: string, params: CommonParams & PolkadotSignTransactionParams): Response<PolkadotSignedTx>;

type KaspaAddress = {
    path: string;
} & KaspaAddress$1;
type KaspaGetAddressParams = {
    path: string | number[];
    prefix?: string;
    scheme?: string;
    showOnChargerWallet?: boolean;
};
declare function kaspaGetAddress(connectId: string, deviceId: string, params: CommonParams & KaspaGetAddressParams): Response<KaspaAddress>;
declare function kaspaGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: KaspaGetAddressParams[];
}): Response<Array<KaspaAddress>>;

declare enum SignatureType {
    SIGHASH_ALL = 1,
    SIGHASH_NONE = 2,
    SIGHASH_SINGLE = 3,
    SIGHASH_FORKID = 64,
    SIGHASH_ANYONECANPAY = 128
}

type KaspaSignature = {
    index: number;
    signature: string;
};
type KaspaSignInputParams = {
    path: string | number[];
    prevTxId: string;
    outputIndex: number;
    sequenceNumber: number | string;
    output: {
        satoshis: number | string;
        script: string;
    };
    sigOpCount?: number;
};
type KaspaSignOutputParams = {
    satoshis: number | string;
    script: string;
    scriptVersion: number;
};
type KaspaSignTransactionParams = {
    version: number;
    inputs: KaspaSignInputParams[];
    outputs: KaspaSignOutputParams[];
    lockTime: number | string;
    sigHashType?: SignatureType;
    sigOpCount?: number;
    subNetworkID?: string;
    scheme?: string;
    prefix?: string;
};
declare function kaspaSignTransaction(connectId: string, deviceId: string, params: CommonParams & KaspaSignTransactionParams): Response<KaspaSignature[]>;

type NexaAddress = {
    path: string;
    pub: string;
    address: string;
};
type NexaGetAddressParams = {
    path: string | number[];
    prefix?: string;
    scheme?: string;
    showOnChargerWallet?: boolean;
};
declare function nexaGetAddress(connectId: string, deviceId: string, params: CommonParams & NexaGetAddressParams): Response<NexaAddress>;
declare function nexaGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: NexaGetAddressParams[];
}): Response<Array<NexaAddress>>;

type NexaSignature = {
    index: number;
    signature: string;
};
type NexaSignInputParams = {
    path: string;
    message: string;
    prefix: string;
};
type NexaSignOutputParams = {
    satoshis: number | string;
    script: string;
    scriptVersion: number;
};
type NexaSignTransactionParams = {
    inputs: NexaSignInputParams[];
};
declare function nexaSignTransaction(connectId: string, deviceId: string, params: CommonParams & NexaSignTransactionParams): Response<NexaSignature[]>;

type NostrPublicKey = {
    npub?: string;
    pub?: string;
    publicKey?: string;
    path: string;
};
interface NostrPublicKeyParams {
    path: string | number[];
    showOnChargerWallet?: boolean;
}
declare function nostrGetPublicKey(connectId: string, deviceId: string, params: CommonParams & NostrPublicKeyParams): Response<NostrPublicKey>;
declare function nostrGetPublicKey(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: NostrPublicKeyParams[];
}): Response<Array<NostrPublicKey>>;

declare enum EventKind {
    Metadata = 0,
    Text = 1,
    RelayRec = 2,
    Contacts = 3,
    DM = 4,
    Deleted = 5,
    Reaction = 7,
    BadgeAward = 8,
    ChannelCreation = 40,
    ChannelMetadata = 41,
    ChannelMessage = 42,
    ChannelHideMessage = 43,
    Reporting = 1984,
    ZapRequest = 9734,
    Zap = 9735,
    RelayListMetadata = 10002,
    ClientAuthentication = 22242,
    NostrConnect = 24133,
    ProfileBadges = 30008,
    BadgeDefinition = 30009,
    LongFormContent = 30023,
    ApplicationSpecificData = 30078
}
type NostrEvent = {
    id?: string;
    kind: EventKind;
    pubkey?: string;
    content: string;
    tags: string[][];
    created_at: number;
    sig?: string;
};
type NostrSignedEvent = {
    path: string;
    event: NostrEvent;
};
interface NostrSignEventParams {
    path: string | number[];
    event: NostrEvent;
}
declare function nostrSignEvent(connectId: string, deviceId: string, params: CommonParams & NostrSignEventParams): Response<NostrSignedEvent>;

interface NostrEncryptMessageParams {
    path: string | number[];
    pubkey: string;
    plaintext: string;
    showOnChargerWallet?: boolean;
}
type NostrEncryptedMessageResponse = {
    path: string;
    pubkey: string;
    plaintext: string;
    encryptedMessage: string;
};
declare function nostrEncryptMessage(connectId: string, deviceId: string, params: CommonParams & NostrEncryptMessageParams): Response<NostrEncryptedMessageResponse>;

interface NostrDecryptMessageParams {
    path: string | number[];
    pubkey: string;
    ciphertext: string;
    showOnChargerWallet?: boolean;
}
type NostrDecryptedMessageResponse = {
    path: string;
    pubkey: string;
    ciphertext: string;
    decryptedMessage: string;
};
declare function nostrDecryptMessage(connectId: string, deviceId: string, params: CommonParams & NostrDecryptMessageParams): Response<NostrDecryptedMessageResponse>;

interface NostrSignSchnorrParams {
    path: string | number[];
    hash: string;
}
type NostrSignedSchnorrResponse = {
    path: string;
    rawHash: string;
    signature: string;
};
declare function nostrSignSchnorr(connectId: string, deviceId: string, params: CommonParams & NostrSignSchnorrParams): Response<NostrSignedSchnorrResponse>;

interface LnurlAuth {
    pub?: string;
    publickey?: string;
    path?: string;
    signature?: string;
}
interface LnurlAuthParams {
    domain: string;
    k1: string;
}
declare function lnurlAuth(connectId: string, deviceId: string, params: CommonParams & LnurlAuthParams): Response<LnurlAuth>;

type NervosAddress = {
    path: string;
} & NervosAddress$1;
type NervosGetAddressParams = {
    path: string | number[];
    network: string;
    showOnChargerWallet?: boolean;
};
declare function nervosGetAddress(connectId: string, deviceId: string, params: CommonParams & NervosGetAddressParams): Response<NervosAddress>;
declare function nervosGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: NervosGetAddressParams[];
}): Response<Array<NervosAddress>>;

type NervosSignedTx = {
    path: string;
} & NervosSignedTx$1;
type NervosSignTransactionParams = {
    path: string | number[];
    network: string;
    rawTx: string;
    witnessHex: string;
};
declare function nervosSignTransaction(connectId: string, deviceId: string, params: CommonParams & NervosSignTransactionParams): Response<NervosSignedTx>;

type DnxAddress = {
    path: string;
} & DnxAddress$1;
type DnxGetAddressParams = {
    path: string | number[];
    showOnChargerWallet?: boolean;
};
declare function dnxGetAddress(connectId: string, deviceId: string, params: CommonParams & DnxGetAddressParams): Response<DnxAddress>;
declare function dnxGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: DnxGetAddressParams[];
}): Response<Array<DnxAddress>>;

type DnxTxKey = {
    ephemeralTxSecKey: string;
    ephemeralTxPubKey: string;
};
type DnxSignTransactionParams = {
    path: string | number[];
    inputs: {
        prevIndex: number;
        globalIndex: number;
        txPubkey: string;
        prevOutPubkey: string;
        amount: UintType;
    }[];
    toAddress: string;
    amount: UintType;
    fee: UintType;
    paymentIdHex?: string;
};
type DnxSignature = {
    path: string;
    txKey: DnxTxKey;
    computedKeyImages: string[];
    signatures: string[];
    outputKeys: string[];
};
declare function dnxSignTransaction(connectId: string, deviceId: string, params: CommonParams & DnxSignTransactionParams): Response<DnxSignature>;

type TonAddress = {
    path: string;
    pub: string;
    publicKey?: string;
    address: string;
};
type TonGetAddressParams = {
    path: string | number[];
    showOnChargerWallet?: boolean;
    walletVersion?: TonWalletVersion;
    isBounceable?: boolean;
    isTestnetOnly?: boolean;
    workchain?: TonWorkChain;
    walletId?: number;
};
declare function tonGetAddress(connectId: string, deviceId: string, params: CommonParams & TonGetAddressParams): Response<TonAddress>;
declare function tonGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: TonGetAddressParams[];
}): Response<Array<TonAddress>>;

type TonSignMessageParams = {
    path: string | number[];
    destination: string;
    jettonMasterAddress?: string;
    jettonWalletAddress?: string;
    tonAmount: UintType;
    jettonAmount?: UintType;
    fwdFee?: UintType;
    comment?: string;
    isRawData?: boolean;
    mode?: number;
    seqno: number;
    expireAt: UintType;
    walletVersion?: TonWalletVersion;
    walletId?: number;
    workchain?: TonWorkChain;
    isBounceable?: boolean;
    isTestnetOnly?: boolean;
    extDestination?: string[];
    extTonAmount?: UintType[];
    extPayload?: string[];
};
type TonSignedMessageResponse = {
    skip_validate: boolean;
} & TonSignedMessage;
declare function tonSignMessage(connectId: string, deviceId: string, params: CommonParams & TonSignMessageParams): Response<TonSignedMessageResponse>;

type TonSignProofParams = {
    path: string | number[];
    appdomain: string;
    comment?: string;
    expireAt: UintType;
    walletVersion?: TonWalletVersion;
    walletId?: number;
    workchain?: TonWorkChain;
    isBounceable?: boolean;
    isTestnetOnly?: boolean;
};
declare function tonSignProof(connectId: string, deviceId: string, params: CommonParams & TonSignProofParams): Response<TonSignedProof>;

type ScdoAddress = {
    path: string;
} & ScdoAddress$1;
type ScdoGetAddressParams = {
    path: string | number[];
    showOnChargerWallet?: boolean;
};
declare function scdoGetAddress(connectId: string, deviceId: string, params: CommonParams & ScdoGetAddressParams): Response<ScdoAddress>;
declare function scdoGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: ScdoGetAddressParams[];
}): Response<Array<ScdoAddress>>;

type ScdoSignMessageParams = {
    path: string | number[];
    messageHex: string;
};
declare function scdoSignMessage(connectId: string, deviceId: string, params: CommonParams & ScdoSignMessageParams): Response<ScdoSignedMessage>;

type ScdoSignedTx = {
    path: string;
} & ScdoSignedTx$1;
type ScdoSignTransactionParams = {
    path: string | number[];
    nonce: string;
    gasPrice: string;
    gasLimit: string;
    to: string;
    value: string;
    timestamp?: string;
    data?: string;
    txType?: number;
};
declare function scdoSignTransaction(connectId: string, deviceId: string, params: CommonParams & ScdoSignTransactionParams): Response<ScdoSignedTx>;

type AlephiumAddress = {
    path: string;
    publicKey?: string;
    pub?: string;
    address: string;
    derivedPath: string;
};
type AlephiumGetAddressParams = {
    path: string | number[];
    showOnChargerWallet?: boolean;
    includePublicKey?: boolean;
    group: number | undefined | null;
};
declare function alephiumGetAddress(connectId: string, deviceId: string, params: CommonParams & AlephiumGetAddressParams): Response<AlephiumAddress>;
declare function alephiumGetAddress(connectId: string, deviceId: string, params: CommonParams & {
    bundle?: AlephiumGetAddressParams[];
}): Response<Array<AlephiumAddress>>;

type AlephiumSignMessageParams = {
    path: string | number[];
    messageHex: string;
    messageType: 'alephium' | 'sha256' | 'blake2b' | 'identity';
};
declare function alephiumSignMessage(connectId: string, deviceId: string, params: CommonParams & AlephiumSignMessageParams): Response<AlephiumMessageSignature>;

type AlephiumSignedTx = {
    path: string;
} & AlephiumSignedTx$1;
type AlephiumSignTransactionParams = {
    path: string | number[];
    rawTx: string;
    scriptOpt?: string;
};
declare function alephiumSignTransaction(connectId: string, deviceId: string, params: CommonParams & AlephiumSignTransactionParams): Response<AlephiumSignedTx>;

type CoreApi = {
    init: typeof init$1;
    on: typeof on;
    off: typeof off;
    emit: (event: string, ...args: any[]) => void;
    removeAllListeners: typeof removeAllListeners;
    dispose: () => void;
    call: (params: any) => Promise<any>;
    uiResponse: typeof uiResponse;
    cancel: (connectId?: string) => void;
    updateSettings: typeof updateSettings;
    getLogs: typeof getLogs;
    testInitializeDeviceDuration: typeof testInitializeDeviceDuration;
    checkAllFirmwareRelease: typeof checkAllFirmwareRelease;
    checkTransportRelease: typeof checkTransportRelease;
    checkBridgeStatus: typeof checkBridgeStatus;
    checkBridgeRelease: typeof checkBridgeRelease;
    checkBootloaderRelease: typeof checkBootloaderRelease;
    searchDevices: typeof searchDevices;
    requestWebUsbDevice: typeof requestWebUsbDevice;
    getFeatures: typeof getFeatures;
    getChargerwalletFeatures: typeof getChargerwalletFeatures;
    getPassphraseState: typeof getPassphraseState;
    deviceBackup: typeof deviceBackup;
    deviceChangePin: typeof deviceChangePin;
    deviceFlags: typeof deviceFlags;
    deviceRebootToBoardloader: typeof deviceRebootToBoardloader;
    deviceRebootToBootloader: typeof deviceRebootToBootloader;
    deviceRecovery: typeof deviceRecovery;
    deviceReset: typeof deviceReset;
    deviceSettings: typeof deviceSettings;
    deviceUpdateReboot: typeof deviceUpdateReboot;
    deviceUploadResource: typeof deviceUploadResource;
    deviceSupportFeatures: typeof deviceSupportFeatures;
    deviceVerify: typeof deviceVerify;
    deviceWipe: typeof deviceWipe;
    deviceFullyUploadResource: typeof deviceFullyUploadResource;
    deviceUpdateBootloader: typeof deviceUpdateBootloader;
    deviceLock: typeof deviceLock;
    deviceCancel: typeof deviceCancel;
    getNextU2FCounter: typeof getNextU2FCounter;
    setU2FCounter: typeof setU2FCounter;
    checkFirmwareRelease: typeof checkFirmwareRelease;
    checkBLEFirmwareRelease: typeof checkBLEFirmwareRelease;
    firmwareUpdate: typeof firmwareUpdate;
    firmwareUpdateV2: typeof firmwareUpdateV2;
    cipherKeyValue: typeof cipherKeyValue;
    allNetworkGetAddress: typeof allNetworkGetAddress;
    evmGetAddress: typeof evmGetAddress;
    evmGetPublicKey: typeof evmGetPublicKey;
    evmSignMessage: typeof evmSignMessage;
    evmSignMessageEIP712: typeof evmSignMessageEIP712;
    evmSignTransaction: typeof evmSignTransaction;
    evmSignTypedData: typeof evmSignTypedData;
    evmVerifyMessage: typeof evmVerifyMessage;
    btcGetAddress: typeof btcGetAddress;
    btcGetPublicKey: typeof btcGetPublicKey;
    btcSignMessage: typeof btcSignMessage;
    btcSignPsbt: typeof btcSignPsbt;
    btcSignTransaction: typeof btcSignTransaction;
    btcVerifyMessage: typeof btcVerifyMessage;
    starcoinGetAddress: typeof starcoinGetAddress;
    starcoinGetPublicKey: typeof starcoinGetPublicKey;
    starcoinSignMessage: typeof starcoinSignMessage;
    starcoinSignTransaction: typeof starcoinSignTransaction;
    starcoinVerifyMessage: typeof starcoinVerifyMessage;
    nemGetAddress: typeof nemGetAddress;
    nemSignTransaction: typeof nemSignTransaction;
    solGetAddress: typeof solGetAddress;
    solSignTransaction: typeof solSignTransaction;
    stellarGetAddress: typeof stellarGetAddress;
    stellarSignTransaction: typeof stellarSignTransaction;
    tronGetAddress: typeof tronGetAddress;
    tronSignMessage: typeof tronSignMessage;
    tronSignTransaction: typeof tronSignTransaction;
    confluxGetAddress: typeof confluxGetAddress;
    confluxSignMessage: typeof confluxSignMessage;
    confluxSignMessageCIP23: typeof confluxSignMessageCIP23;
    confluxSignTransaction: typeof confluxSignTransaction;
    nearGetAddress: typeof nearGetAddress;
    nearSignTransaction: typeof nearSignTransaction;
    aptosGetAddress: typeof aptosGetAddress;
    aptosGetPublicKey: typeof aptosGetPublicKey;
    aptosSignMessage: typeof aptosSignMessage;
    aptosSignTransaction: typeof aptosSignTransaction;
    algoGetAddress: typeof algoGetAddress;
    algoSignTransaction: typeof algoSignTransaction;
    cosmosGetAddress: typeof cosmosGetAddress;
    cosmosGetPublicKey: typeof cosmosGetPublicKey;
    cosmosSignTransaction: typeof cosmosSignTransaction;
    xrpGetAddress: typeof xrpGetAddress;
    xrpSignTransaction: typeof xrpSignTransaction;
    suiGetAddress: typeof suiGetAddress;
    suiGetPublicKey: typeof suiGetPublicKey;
    suiSignMessage: typeof suiSignMessage;
    suiSignTransaction: typeof suiSignTransaction;
    cardanoGetAddress: typeof cardanoGetAddress;
    cardanoGetPublicKey: typeof cardanoGetPublicKey;
    cardanoSignTransaction: typeof cardanoSignTransaction;
    cardanoSignMessage: typeof cardanoSignMessage;
    filecoinGetAddress: typeof filecoinGetAddress;
    filecoinSignTransaction: typeof filecoinSignTransaction;
    polkadotGetAddress: typeof polkadotGetAddress;
    polkadotSignTransaction: typeof polkadotSignTransaction;
    kaspaGetAddress: typeof kaspaGetAddress;
    kaspaSignTransaction: typeof kaspaSignTransaction;
    nexaGetAddress: typeof nexaGetAddress;
    nexaSignTransaction: typeof nexaSignTransaction;
    nostrGetPublicKey: typeof nostrGetPublicKey;
    nostrSignEvent: typeof nostrSignEvent;
    nostrEncryptMessage: typeof nostrEncryptMessage;
    nostrDecryptMessage: typeof nostrDecryptMessage;
    nostrSignSchnorr: typeof nostrSignSchnorr;
    lnurlAuth: typeof lnurlAuth;
    nervosGetAddress: typeof nervosGetAddress;
    nervosSignTransaction: typeof nervosSignTransaction;
    dnxGetAddress: typeof dnxGetAddress;
    dnxSignTransaction: typeof dnxSignTransaction;
    tonGetAddress: typeof tonGetAddress;
    tonSignMessage: typeof tonSignMessage;
    tonSignProof: typeof tonSignProof;
    scdoGetAddress: typeof scdoGetAddress;
    scdoSignMessage: typeof scdoSignMessage;
    scdoSignTransaction: typeof scdoSignTransaction;
    alephiumGetAddress: typeof alephiumGetAddress;
    alephiumSignMessage: typeof alephiumSignMessage;
    alephiumSignTransaction: typeof alephiumSignTransaction;
};

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
type MessageFactoryFn<Group, Event> = UnionToIntersection<Event extends {
    type: string;
} ? Event extends {
    payload: any;
} ? (type: Event['type'], payload: Event['payload']) => {
    event: Group;
    type: Event['type'];
    payload: Event['payload'];
} : (type: Event['type'], payload?: undefined) => {
    event: Group;
    type: Event['type'];
    payload: undefined;
} : never>;

declare const DEVICE_EVENT = "DEVICE_EVENT";
declare const DEVICE: {
    readonly CONNECT: "device-connect";
    readonly CONNECT_UNACQUIRED: "device-connect_unacquired";
    readonly DISCONNECT: "device-disconnect";
    readonly CHANGED: "device-changed";
    readonly ACQUIRE: "device-acquire";
    readonly RELEASE: "device-release";
    readonly ACQUIRED: "device-acquired";
    readonly RELEASED: "device-released";
    readonly USED_ELSEWHERE: "device-used_elsewhere";
    readonly UNREADABLE: "unreadable-device";
    readonly LOADING: "device-loading";
    readonly BUTTON: "button";
    readonly PIN: "pin";
    readonly PASSPHRASE: "passphrase";
    readonly PASSPHRASE_ON_DEVICE: "passphrase_on_device";
    readonly WORD: "word";
    readonly SUPPORT_FEATURES: "support_features";
    readonly FEATURES: "features";
};
interface DeviceConnnectRequest {
    type: typeof DEVICE.CONNECT;
    payload: {
        device: KnownDevice;
    };
}
interface DeviceDisconnnectRequest {
    type: typeof DEVICE.DISCONNECT;
    payload: {
        device: KnownDevice;
    };
}
interface DeviceButtonRequestPayload extends Omit<Messages.ButtonRequest, 'code'> {
    code?: Messages.ButtonRequest['code'] | 'ButtonRequest_FirmwareUpdate';
}
interface DeviceButtonRequest {
    type: typeof DEVICE.BUTTON;
    payload: DeviceButtonRequestPayload & {
        device: KnownDevice | null;
    };
}
type DeviceFeaturesPayload = Features;
interface DeviceSendFeatures {
    type: typeof DEVICE.FEATURES;
    payload: DeviceFeaturesPayload;
}
type DeviceSupportFeaturesPayload = SupportFeatures & {
    device: KnownDevice | null;
};
interface DeviceSendSupportFeatures {
    type: typeof DEVICE.SUPPORT_FEATURES;
    payload: DeviceSupportFeaturesPayload;
}
type DeviceEvent = DeviceButtonRequest | DeviceSendFeatures | DeviceSendSupportFeatures | DeviceDisconnnectRequest | DeviceConnnectRequest;
type DeviceEventMessage = DeviceEvent & {
    event: typeof DEVICE_EVENT;
};
type DeviceEventListenerFn = (type: typeof DEVICE_EVENT, cb: (event: DeviceEventMessage) => void) => void;
declare const createDeviceMessage: MessageFactoryFn<typeof DEVICE_EVENT, DeviceEvent>;

declare const UI_EVENT = "UI_EVENT";
declare const UI_REQUEST: {
    readonly REQUEST_PIN: "ui-request_pin";
    readonly INVALID_PIN: "ui-invalid_pin";
    readonly REQUEST_BUTTON: "ui-button";
    readonly REQUEST_PASSPHRASE: "ui-request_passphrase";
    readonly REQUEST_PASSPHRASE_ON_DEVICE: "ui-request_passphrase_on_device";
    readonly CLOSE_UI_WINDOW: "ui-close_window";
    readonly DEVICE_PROGRESS: "ui-device_progress";
    readonly BLUETOOTH_PERMISSION: "ui-bluetooth_permission";
    readonly BLUETOOTH_CHARACTERISTIC_NOTIFY_CHANGE_FAILURE: "ui-bluetooth_characteristic_notify_change_failure";
    readonly LOCATION_PERMISSION: "ui-location_permission";
    readonly LOCATION_SERVICE_PERMISSION: "ui-location_service_permission";
    readonly FIRMWARE_PROGRESS: "ui-firmware-progress";
    readonly FIRMWARE_TIP: "ui-firmware-tip";
    readonly PREVIOUS_ADDRESS_RESULT: "ui-previous_address_result";
};
interface UiRequestWithoutPayload {
    type: typeof UI_REQUEST.CLOSE_UI_WINDOW | typeof UI_REQUEST.BLUETOOTH_PERMISSION | typeof UI_REQUEST.BLUETOOTH_CHARACTERISTIC_NOTIFY_CHANGE_FAILURE | typeof UI_REQUEST.LOCATION_PERMISSION | typeof UI_REQUEST.LOCATION_SERVICE_PERMISSION;
    payload?: typeof undefined;
}
type UiRequestDeviceAction = {
    type: typeof UI_REQUEST.REQUEST_PIN;
    payload: {
        device: Device$1;
        type?: Messages.PinMatrixRequestType | 'ButtonRequest_PinEntry';
    };
};
interface UiRequestButton {
    type: typeof UI_REQUEST.REQUEST_BUTTON;
    payload: DeviceButtonRequest['payload'];
}
interface UiRequestPassphrase {
    type: typeof UI_REQUEST.REQUEST_PASSPHRASE;
    payload: {
        device: Device$1;
        passphraseState?: string;
    };
}
interface UiRequestPassphraseOnDevice {
    type: typeof UI_REQUEST.REQUEST_PASSPHRASE_ON_DEVICE;
    payload: {
        device: Device$1;
        passphraseState?: string;
    };
}
interface FirmwareProgress {
    type: typeof UI_REQUEST.FIRMWARE_PROGRESS;
    payload: {
        device: Device$1;
        progress: number;
    };
}
interface FirmwareTip {
    type: typeof UI_REQUEST.FIRMWARE_TIP;
    payload: {
        device: Device$1;
        data: {
            message: string;
        };
    };
}
interface DeviceProgress {
    type: typeof UI_REQUEST.DEVICE_PROGRESS;
    payload: {
        progress?: number;
    };
}
interface PreviousAddressResult {
    type: typeof UI_REQUEST.PREVIOUS_ADDRESS_RESULT;
    payload: {
        device: Device$1;
        data: {
            address?: string;
            path?: string;
        };
    };
}
type UiEvent = UiRequestWithoutPayload | UiRequestDeviceAction | UiRequestButton | UiRequestPassphraseOnDevice | UiRequestPassphrase | FirmwareProgress | FirmwareTip | DeviceProgress | PreviousAddressResult;
type UiEventMessage = UiEvent & {
    event: typeof UI_EVENT;
};
declare const createUiMessage: MessageFactoryFn<typeof UI_EVENT, UiEvent>;

declare const IFRAME: {
    readonly INIT: "iframe-init";
    readonly INIT_BRIDGE: "iframe-init-bridge";
    readonly CALL: "iframe-call";
    readonly CANCEL: "iframe-cancel";
};
interface IFrameInit {
    type: typeof IFRAME.INIT;
    payload: {
        settings: ConnectSettings;
    };
}
interface IFrameBridge {
    type: typeof IFRAME.INIT_BRIDGE;
    payload: unknown;
}
type IFrameEvent = IFrameInit | IFrameBridge;
type IFrameEventMessage = IFrameEvent & {
    event: typeof UI_EVENT;
};
declare const createIFrameMessage: MessageFactoryFn<typeof UI_EVENT, IFrameEvent>;

type UnwrappedResponse<T> = T extends Promise<infer R> ? R extends {
    success: true;
    payload: infer P;
} ? P : never : void;
type OverloadedMethod<T, E extends Record<string, string>> = T extends {
    (params: infer P1): infer R1;
    (params: infer P2): infer R2;
} ? ((params: P1 & E) => R1) | ((params: P2 & E) => R2) : T extends (...args: infer P) => infer R ? (params: E & P[0]) => R : never;
type UnwrappedMethod<T, M extends Record<string, string>> = T extends () => infer R ? (params: M & CommonParams) => R : OverloadedMethod<T, M>;
type IsMethodCallable<T> = T extends (...args: any[]) => infer R ? R extends Promise<{
    success: boolean;
}> ? R : never : never;
type CallApi = {
    [K in keyof CoreApi]: IsMethodCallable<CoreApi[K]> extends never ? never : UnwrappedMethod<CoreApi[K], {
        method: K;
    }>;
};
type CallMethodUnion = CallApi[keyof CallApi];
type CallMethodPayload = Parameters<CallMethodUnion>[0];
type CallMethodResponse<M extends keyof CallApi> = UnwrappedResponse<ReturnType<CallApi[M]>>;
type CallMethodAnyResponse = ReturnType<CallMethodUnion>;
type CallMethod = (params: CallMethodPayload) => Promise<any>;
interface IFrameCallMessage {
    event: typeof IFRAME.CALL;
    type: typeof IFRAME.CALL;
    payload: CallMethodPayload;
}
interface IFrameCancelMessage {
    event: typeof IFRAME.CANCEL;
    type: typeof IFRAME.CANCEL;
    payload: {
        connectId?: string;
    };
}
declare const RESPONSE_EVENT = "RESPONSE_EVENT";
interface MethodResponseMessage {
    event: typeof RESPONSE_EVENT;
    type: typeof RESPONSE_EVENT;
    id: number;
    success: boolean;
    payload: any;
}
declare const createResponseMessage: (id: number, success: boolean, payload: any) => MethodResponseMessage;
type CallMethodKeys = keyof CoreApi;

declare const UI_RESPONSE: {
    readonly RECEIVE_PIN: "ui-receive_pin";
    readonly RECEIVE_PASSPHRASE: "ui-receive_passphrase";
};
interface UiResponsePin {
    type: typeof UI_RESPONSE.RECEIVE_PIN;
    payload: string;
}
interface UiResponsePassphrase {
    type: typeof UI_RESPONSE.RECEIVE_PASSPHRASE;
    payload: {
        value: string;
        passphraseOnDevice?: boolean;
        save?: boolean;
    };
}
type UiResponseEvent = UiResponsePin | UiResponsePassphrase;
type UiResponseMessage = UiResponseEvent & {
    event: typeof UI_EVENT;
};
declare const createUiResponse: MessageFactoryFn<typeof UI_EVENT, UiResponseEvent>;

declare const LOG_EVENT = "LOG_EVENT";
declare const LOG: {
    readonly OUTPUT: "log-output";
};
interface LogOutput {
    type: typeof LOG.OUTPUT;
    payload: any;
}
type LogEvent = LogOutput;
type LogEventMessage = LogEvent & {
    event: typeof LOG_EVENT;
};
declare const createLogMessage: MessageFactoryFn<typeof LOG_EVENT, LogEvent>;

declare const getFirmwareReleaseInfo: (features: Features) => {
    status: IDeviceFirmwareStatus;
    changelog: {
        "zh-CN": string;
        "en-US": string;
    }[];
    release: IFirmwareReleaseInfo | undefined;
    bootloaderMode: boolean;
};
declare const getBleFirmwareReleaseInfo: (features: Features) => {
    status: IDeviceBLEFirmwareStatus;
    changelog: {
        "zh-CN": string;
        "en-US": string;
    }[];
    release: IBLEFirmwareReleaseInfo | undefined;
    bootloaderMode: boolean;
};

declare const FIRMWARE_EVENT = "FIRMWARE_EVENT";
declare const FIRMWARE: {
    readonly RELEASE_INFO: "firmware-release-info";
    readonly BLE_RELEASE_INFO: "ble-firmware-release-info";
};
type ReleaseInfoPayload = ReturnType<typeof getFirmwareReleaseInfo> & {
    device?: KnownDevice | null;
};
interface ReleaseInfoEvent {
    type: typeof FIRMWARE.RELEASE_INFO;
    payload: ReleaseInfoPayload;
}
type BleReleaseInfoPayload = ReturnType<typeof getBleFirmwareReleaseInfo> & {
    device?: KnownDevice | null;
};
interface BleReleaseInfoEvent {
    type: typeof FIRMWARE.BLE_RELEASE_INFO;
    payload: BleReleaseInfoPayload;
}
type FirmwareEvent = ReleaseInfoEvent | BleReleaseInfoEvent;
type FirmwareMessage = FirmwareEvent & {
    event: typeof FIRMWARE_EVENT;
};
declare const createFirmwareMessage: MessageFactoryFn<typeof FIRMWARE_EVENT, FirmwareEvent>;

declare const CORE_EVENT = "CORE_EVENT";
type CoreMessage = {
    id?: string;
    success?: true | false;
} & (IFrameEventMessage | IFrameCallMessage | IFrameCancelMessage | UiResponseMessage | UiEventMessage | DeviceEventMessage | LogEventMessage | FirmwareMessage);
type PostMessageEvent = MessageEvent<any>;
declare const parseMessage: (messageData: any) => CoreMessage;
declare const createErrorMessage: (error: Error & {
    code?: string | number;
}) => Unsuccessful;

type DeviceDescriptorDiff = {
    didUpdate: boolean;
    connected: ChargerWalletDeviceInfo[];
    disconnected: ChargerWalletDeviceInfo[];
    changedSessions: ChargerWalletDeviceInfo[];
    changedDebugSessions: ChargerWalletDeviceInfo[];
    acquired: ChargerWalletDeviceInfo[];
    debugAcquired: ChargerWalletDeviceInfo[];
    released: ChargerWalletDeviceInfo[];
    debugReleased: ChargerWalletDeviceInfo[];
    descriptors: ChargerWalletDeviceInfo[];
};

declare class DeviceConnector {
    transport: Transport;
    listenTimestamp: number;
    current: ChargerWalletDeviceInfo[] | null;
    upcoming: ChargerWalletDeviceInfo[];
    listening: boolean;
    constructor();
    enumerate(): Promise<DeviceDescriptorDiff | undefined>;
    listen(): Promise<void>;
    stop(): void;
    acquire(path: string, session?: string | null, forceCleanRunPromise?: boolean): Promise<string | undefined>;
    release(session: string, onclose: boolean): Promise<void>;
    _reportDevicesChange(): void;
}

type MessageType = Messages.MessageType;
type MessageKey = keyof MessageType;
type TypedResponseMessage<T extends MessageKey> = {
    type: T;
    message: MessageType[T];
};
type TypedCallResponseMap = {
    [K in keyof MessageType]: TypedResponseMessage<K>;
};
type DefaultMessageResponse = TypedCallResponseMap[keyof MessageType];
type PassphrasePromptResponse = {
    passphrase?: string;
    passphraseOnDevice?: boolean;
    cache?: boolean;
};
declare class DeviceCommands {
    device: Device;
    transport: Transport;
    mainId: string;
    disposed: boolean;
    callPromise?: Promise<DefaultMessageResponse>;
    _cancelableRequest?: (error?: any) => void;
    constructor(device: Device, mainId: string);
    dispose(cancelRequest: boolean): Promise<void>;
    call(type: MessageKey, msg?: DefaultMessageResponse['message']): Promise<DefaultMessageResponse>;
    typedCall<T extends MessageKey, R extends MessageKey[]>(type: T, resType: R, msg?: MessageType[T]): Promise<TypedCallResponseMap[R[number]]>;
    typedCall<T extends MessageKey, R extends MessageKey>(type: T, resType: R, msg?: MessageType[T]): Promise<TypedResponseMessage<R>>;
    _commonCall(type: MessageKey, msg?: DefaultMessageResponse['message']): Promise<DefaultMessageResponse>;
    _filterCommonTypes(res: DefaultMessageResponse, callType: MessageKey): Promise<DefaultMessageResponse>;
    _promptPin(type?: Messages.PinMatrixRequestType): Promise<string>;
    _promptPassphrase(): Promise<PassphrasePromptResponse>;
}

type InitOptions = {
    initSession?: boolean;
    deviceId?: string;
    passphraseState?: string;
    deriveCardano?: boolean;
};
type RunOptions = {
    keepSession?: boolean;
} & InitOptions;
interface DeviceEvents {
    [DEVICE.PIN]: [Device, Messages.PinMatrixRequestType | undefined, (err: any, pin: string) => void];
    [DEVICE.PASSPHRASE_ON_DEVICE]: [Device, ((response: any) => void)?];
    [DEVICE.BUTTON]: [Device, DeviceButtonRequestPayload];
    [DEVICE.FEATURES]: [Device, DeviceFeaturesPayload];
    [DEVICE.PASSPHRASE]: [Device, (response: PassphrasePromptResponse, error?: Error) => void];
}
interface Device {
    on<K extends keyof DeviceEvents>(type: K, listener: (...event: DeviceEvents[K]) => void): this;
    off<K extends keyof DeviceEvents>(type: K, listener: (...event: DeviceEvents[K]) => void): this;
    emit<K extends keyof DeviceEvents>(type: K, ...args: DeviceEvents[K]): boolean;
}
declare class Device extends EventEmitter$1 {
    originalDescriptor: ChargerWalletDeviceInfo;
    mainId?: string | null;
    deviceConnector?: DeviceConnector | null;
    commands: DeviceCommands;
    features: Features | undefined;
    featuresNeedsReload: boolean;
    runPromise?: Deferred<void> | null;
    externalState: string[];
    unavailableCapabilities: UnavailableCapabilities;
    instance: number;
    internalState: string[];
    needReloadDevice: boolean;
    keepSession: boolean;
    passphraseState: string | undefined;
    constructor(descriptor: ChargerWalletDeviceInfo);
    static fromDescriptor(originalDescriptor: ChargerWalletDeviceInfo): Device;
    toMessageObject(): Device$1 | null;
    connect(): Promise<boolean>;
    acquire(): Promise<void>;
    release(): Promise<void>;
    getCommands(): DeviceCommands;
    private generateStateKey;
    getInternalState(_deviceId?: string): string | undefined;
    tryFixInternalState(state: string, deviceId: string, sessionId?: string | null): void;
    private setInternalState;
    clearInternalState(_deviceId?: string): void;
    initialize(options?: InitOptions): Promise<void>;
    getFeatures(): Promise<void>;
    _updateFeatures(feat: Features, initSession?: boolean): void;
    updateDescriptor(descriptor: ChargerWalletDeviceInfo, forceUpdate?: boolean): void;
    updateFromCache(device: Device): void;
    run(fn?: () => Promise<void>, options?: RunOptions): Promise<void>;
    _runInner<T>(fn: (() => Promise<T>) | undefined, options: RunOptions): Promise<undefined>;
    interruptionFromOutside(): Promise<void>;
    interruptionFromUser(): Promise<void>;
    getMode(): EChargerWalletDeviceMode;
    getFirmwareVersion(): IVersionArray | null;
    getBLEFirmwareVersion(): IVersionArray | null;
    isUsed(): boolean;
    isUsedHere(): boolean;
    isUsedElsewhere(): boolean;
    isBootloader(): boolean | undefined;
    isInitialized(): boolean | undefined;
    isSeedless(): boolean | undefined;
    isUnacquired(): boolean;
    hasUnexpectedMode(allow: string[], require: string[]): "ui-device_bootloader_mode" | "ui-device_not_in_bootloader_mode" | "ui-device_not_initialized" | "ui-device_seedless" | null;
    hasUsePassphrase(): boolean | undefined;
    checkDeviceId(deviceId: string): boolean;
    checkPassphraseStateSafety(passphraseState?: string): Promise<boolean>;
}

type UiPromiseResponse = UiResponseEvent | {
    type: typeof DEVICE.DISCONNECT;
    payload?: undefined;
};
type UiPromise<T extends UiPromiseResponse['type']> = Deferred<Extract<UiPromiseResponse, {
    type: T;
}>, T, Device>;

declare const LogBlockEvent: Set<string>;

interface InjectApi {
    call: CallMethod;
    eventEmitter: EventEmitter;
    init: CoreApi['init'];
    updateSettings: CoreApi['updateSettings'];
    dispose: CoreApi['dispose'];
    uiResponse: CoreApi['uiResponse'];
    cancel: CoreApi['cancel'];
}

interface TopLevelInjectApi {
    init: CoreApi['init'];
    call: CoreApi['call'];
}

declare class Core extends EventEmitter$1 {
    handleMessage(message: CoreMessage): Promise<any>;
    dispose(): void;
}
declare const init: (settings: ConnectSettings, Transport: any, plugin?: LowlevelTransportSharedPlugin) => Promise<Core | undefined>;

declare const httpRequest: (url: string, type: string) => any;
declare const getTimeStamp: () => number;

declare const isValidVersionString: (version: string) => boolean;
declare const isValidVersionArray: (version: number[]) => boolean;
declare const normalizeVersionArray: (version: number[]) => number[];
declare const versionSplit: (version: string) => number[];
declare const versionCompare: (a: string | number[], b: string | number[]) => 0 | 1 | -1;

declare function patchFeatures(response: DefaultMessageResponse): TypedResponseMessage<"Address"> | TypedResponseMessage<"AptosMessagePayload"> | TypedResponseMessage<"BinanceInputOutput"> | TypedResponseMessage<"BinanceCoin"> | TypedResponseMessage<"HDNodePathType"> | TypedResponseMessage<"HDNodeType"> | TypedResponseMessage<"MultisigRedeemScriptType"> | TypedResponseMessage<"TxRequestDetailsType"> | TypedResponseMessage<"TxRequestSerializedType"> | TypedResponseMessage<"TxInputType"> | TypedResponseMessage<"TxOutputBinType"> | TypedResponseMessage<"TxOutputType"> | TypedResponseMessage<"TxAckInputWrapper"> | TypedResponseMessage<"TxAckOutputWrapper"> | TypedResponseMessage<"PrevTx"> | TypedResponseMessage<"TxAckPrevInputWrapper"> | TypedResponseMessage<"PrevInput"> | TypedResponseMessage<"TxAckPrevOutputWrapper"> | TypedResponseMessage<"PrevOutput"> | TypedResponseMessage<"TxAckPrevExtraDataWrapper"> | TypedResponseMessage<"BIP32Address"> | TypedResponseMessage<"CardanoNativeScript"> | TypedResponseMessage<"CardanoBlockchainPointerType"> | TypedResponseMessage<"CardanoAddressParametersType"> | TypedResponseMessage<"CardanoPoolMetadataType"> | TypedResponseMessage<"CardanoPoolParametersType"> | TypedResponseMessage<"CardanoGovernanceRegistrationDelegation"> | TypedResponseMessage<"CardanoGovernanceRegistrationParametersType"> | TypedResponseMessage<"IdentityType"> | TypedResponseMessage<"Path"> | TypedResponseMessage<"DnxTxKey"> | TypedResponseMessage<"DnxComputedKeyImage"> | TypedResponseMessage<"EmmcFile"> | TypedResponseMessage<"EosTxHeader"> | TypedResponseMessage<"EosActionCommon"> | TypedResponseMessage<"EosActionTransfer"> | TypedResponseMessage<"EosActionDelegate"> | TypedResponseMessage<"EosActionUndelegate"> | TypedResponseMessage<"EosActionRefund"> | TypedResponseMessage<"EosActionBuyRam"> | TypedResponseMessage<"EosActionBuyRamBytes"> | TypedResponseMessage<"EosActionSellRam"> | TypedResponseMessage<"EosActionVoteProducer"> | TypedResponseMessage<"EosActionUpdateAuth"> | TypedResponseMessage<"EosActionDeleteAuth"> | TypedResponseMessage<"EosActionLinkAuth"> | TypedResponseMessage<"EosActionUnlinkAuth"> | TypedResponseMessage<"EosActionNewAccount"> | TypedResponseMessage<"EosActionUnknown"> | TypedResponseMessage<"EosPermissionLevel"> | TypedResponseMessage<"EosAuthorizationKey"> | TypedResponseMessage<"EosAuthorizationAccount"> | TypedResponseMessage<"EosAuthorizationWait"> | TypedResponseMessage<"EosAsset"> | TypedResponseMessage<"EosAuthorization"> | TypedResponseMessage<"EthereumStructMemberChargerWallet"> | TypedResponseMessage<"EthereumFieldTypeChargerWallet"> | TypedResponseMessage<"EthereumDefinitions"> | TypedResponseMessage<"EthereumStructMember"> | TypedResponseMessage<"EthereumFieldType"> | TypedResponseMessage<"EthereumAccessListChargerWallet"> | TypedResponseMessage<"EthereumAccessList"> | TypedResponseMessage<"FileInfo"> | TypedResponseMessage<"MoneroOutputEntry"> | TypedResponseMessage<"MoneroMultisigKLRki"> | TypedResponseMessage<"MoneroRctKeyPublic"> | TypedResponseMessage<"MoneroAccountPublicAddress"> | TypedResponseMessage<"MoneroTransactionData"> | TypedResponseMessage<"MoneroTransactionDestinationEntry"> | TypedResponseMessage<"MoneroTransactionRsigData"> | TypedResponseMessage<"MoneroTransactionSourceEntry"> | TypedResponseMessage<"MoneroRingCtSig"> | TypedResponseMessage<"MoneroSubAddressIndicesList"> | TypedResponseMessage<"MoneroTransferDetails"> | TypedResponseMessage<"MoneroExportedKeyImage"> | TypedResponseMessage<"NEMTransactionCommon"> | TypedResponseMessage<"NEMTransfer"> | TypedResponseMessage<"NEMProvisionNamespace"> | TypedResponseMessage<"NEMMosaicCreation"> | TypedResponseMessage<"NEMMosaicSupplyChange"> | TypedResponseMessage<"NEMAggregateModification"> | TypedResponseMessage<"NEMImportanceTransfer"> | TypedResponseMessage<"NEMMosaic"> | TypedResponseMessage<"NEMMosaicDefinition"> | TypedResponseMessage<"NEMCosignatoryModification"> | TypedResponseMessage<"RipplePayment"> | TypedResponseMessage<"StellarAsset"> | TypedResponseMessage<"TezosRevealOp"> | TypedResponseMessage<"TezosTransactionOp"> | TypedResponseMessage<"TezosOriginationOp"> | TypedResponseMessage<"TezosDelegationOp"> | TypedResponseMessage<"TezosProposalOp"> | TypedResponseMessage<"TezosBallotOp"> | TypedResponseMessage<"TezosContractID"> | TypedResponseMessage<"TezosParametersManager"> | TypedResponseMessage<"TezosManagerTransfer"> | TypedResponseMessage<"TronContract"> | TypedResponseMessage<"TronTransferContract"> | TypedResponseMessage<"TronFreezeBalanceContract"> | TypedResponseMessage<"TronUnfreezeBalanceContract"> | TypedResponseMessage<"TronWithdrawBalanceContract"> | TypedResponseMessage<"TronTriggerSmartContract"> | TypedResponseMessage<"TronFreezeBalanceV2Contract"> | TypedResponseMessage<"TronUnfreezeBalanceV2Contract"> | TypedResponseMessage<"TronWithdrawExpireUnfreezeContract"> | TypedResponseMessage<"TronDelegateResourceContract"> | TypedResponseMessage<"TronUnDelegateResourceContract"> | TypedResponseMessage<"AlephiumGetAddress"> | TypedResponseMessage<"AlephiumAddress"> | TypedResponseMessage<"AlephiumSignTx"> | TypedResponseMessage<"AlephiumSignedTx"> | TypedResponseMessage<"AlephiumTxRequest"> | TypedResponseMessage<"AlephiumTxAck"> | TypedResponseMessage<"AlephiumBytecodeRequest"> | TypedResponseMessage<"AlephiumBytecodeAck"> | TypedResponseMessage<"AlephiumSignMessage"> | TypedResponseMessage<"AlephiumMessageSignature"> | TypedResponseMessage<"AlgorandGetAddress"> | TypedResponseMessage<"AlgorandAddress"> | TypedResponseMessage<"AlgorandSignTx"> | TypedResponseMessage<"AlgorandSignedTx"> | TypedResponseMessage<"AptosGetAddress"> | TypedResponseMessage<"AptosAddress"> | TypedResponseMessage<"AptosSignTx"> | TypedResponseMessage<"AptosSignedTx"> | TypedResponseMessage<"AptosSignMessage"> | TypedResponseMessage<"AptosMessageSignature"> | TypedResponseMessage<"BinanceGetAddress"> | TypedResponseMessage<"BinanceAddress"> | TypedResponseMessage<"BinanceGetPublicKey"> | TypedResponseMessage<"BinancePublicKey"> | TypedResponseMessage<"BinanceSignTx"> | TypedResponseMessage<"BinanceTxRequest"> | TypedResponseMessage<"BinanceTransferMsg"> | TypedResponseMessage<"BinanceOrderMsg"> | TypedResponseMessage<"BinanceCancelMsg"> | TypedResponseMessage<"BinanceSignedTx"> | TypedResponseMessage<"GetPublicKey"> | TypedResponseMessage<"PublicKey"> | TypedResponseMessage<"GetAddress"> | TypedResponseMessage<"GetOwnershipId"> | TypedResponseMessage<"OwnershipId"> | TypedResponseMessage<"SignMessage"> | TypedResponseMessage<"MessageSignature"> | TypedResponseMessage<"VerifyMessage"> | TypedResponseMessage<"SignTx"> | TypedResponseMessage<"TxRequest"> | TypedResponseMessage<"TxAck"> | TypedResponseMessage<"TxAckInput"> | TypedResponseMessage<"TxAckOutput"> | TypedResponseMessage<"TxAckPrevMeta"> | TypedResponseMessage<"TxAckPrevInput"> | TypedResponseMessage<"TxAckPrevOutput"> | TypedResponseMessage<"TxAckPrevExtraData"> | TypedResponseMessage<"GetOwnershipProof"> | TypedResponseMessage<"OwnershipProof"> | TypedResponseMessage<"AuthorizeCoinJoin"> | TypedResponseMessage<"GetPublicKeyMultiple"> | TypedResponseMessage<"PublicKeyMultiple"> | TypedResponseMessage<"SignPsbt"> | TypedResponseMessage<"SignedPsbt"> | TypedResponseMessage<"FirmwareErase"> | TypedResponseMessage<"FirmwareRequest"> | TypedResponseMessage<"FirmwareUpload"> | TypedResponseMessage<"SelfTest"> | TypedResponseMessage<"FirmwareErase_ex"> | TypedResponseMessage<"Reboot"> | TypedResponseMessage<"FirmwareUpdateEmmc"> | TypedResponseMessage<"CardanoGetNativeScriptHash"> | TypedResponseMessage<"CardanoNativeScriptHash"> | TypedResponseMessage<"CardanoGetAddress"> | TypedResponseMessage<"CardanoAddress"> | TypedResponseMessage<"CardanoGetPublicKey"> | TypedResponseMessage<"CardanoPublicKey"> | TypedResponseMessage<"CardanoSignTxInit"> | TypedResponseMessage<"CardanoTxInput"> | TypedResponseMessage<"CardanoTxOutput"> | TypedResponseMessage<"CardanoAssetGroup"> | TypedResponseMessage<"CardanoToken"> | TypedResponseMessage<"CardanoTxInlineDatumChunk"> | TypedResponseMessage<"CardanoTxReferenceScriptChunk"> | TypedResponseMessage<"CardanoPoolOwner"> | TypedResponseMessage<"CardanoPoolRelayParameters"> | TypedResponseMessage<"CardanoTxCertificate"> | TypedResponseMessage<"CardanoTxWithdrawal"> | TypedResponseMessage<"CardanoTxAuxiliaryData"> | TypedResponseMessage<"CardanoTxMint"> | TypedResponseMessage<"CardanoTxCollateralInput"> | TypedResponseMessage<"CardanoTxRequiredSigner"> | TypedResponseMessage<"CardanoTxReferenceInput"> | TypedResponseMessage<"CardanoTxItemAck"> | TypedResponseMessage<"CardanoTxAuxiliaryDataSupplement"> | TypedResponseMessage<"CardanoTxWitnessRequest"> | TypedResponseMessage<"CardanoTxWitnessResponse"> | TypedResponseMessage<"CardanoTxHostAck"> | TypedResponseMessage<"CardanoTxBodyHash"> | TypedResponseMessage<"CardanoSignTxFinished"> | TypedResponseMessage<"CardanoSignMessage"> | TypedResponseMessage<"CardanoMessageSignature"> | TypedResponseMessage<"Success"> | TypedResponseMessage<"Failure"> | TypedResponseMessage<"ButtonRequest"> | TypedResponseMessage<"ButtonAck"> | TypedResponseMessage<"PinMatrixRequest"> | TypedResponseMessage<"PinMatrixAck"> | TypedResponseMessage<"PassphraseRequest"> | TypedResponseMessage<"PassphraseAck"> | TypedResponseMessage<"Deprecated_PassphraseStateRequest"> | TypedResponseMessage<"Deprecated_PassphraseStateAck"> | TypedResponseMessage<"BixinPinInputOnDevice"> | TypedResponseMessage<"ConfluxGetAddress"> | TypedResponseMessage<"ConfluxAddress"> | TypedResponseMessage<"ConfluxSignTx"> | TypedResponseMessage<"ConfluxTxRequest"> | TypedResponseMessage<"ConfluxTxAck"> | TypedResponseMessage<"ConfluxSignMessage"> | TypedResponseMessage<"ConfluxMessageSignature"> | TypedResponseMessage<"ConfluxSignMessageCIP23"> | TypedResponseMessage<"CosmosGetAddress"> | TypedResponseMessage<"CosmosAddress"> | TypedResponseMessage<"CosmosSignTx"> | TypedResponseMessage<"CosmosSignedTx"> | TypedResponseMessage<"CipherKeyValue"> | TypedResponseMessage<"CipheredKeyValue"> | TypedResponseMessage<"SignIdentity"> | TypedResponseMessage<"SignedIdentity"> | TypedResponseMessage<"GetECDHSessionKey"> | TypedResponseMessage<"ECDHSessionKey"> | TypedResponseMessage<"BatchGetPublickeys"> | TypedResponseMessage<"EcdsaPublicKeys"> | TypedResponseMessage<"DnxGetAddress"> | TypedResponseMessage<"DnxAddress"> | TypedResponseMessage<"DnxSignTx"> | TypedResponseMessage<"DnxInputRequest"> | TypedResponseMessage<"DnxInputAck"> | TypedResponseMessage<"DnxRTSigsRequest"> | TypedResponseMessage<"DnxSignedTx"> | TypedResponseMessage<"EmmcFixPermission"> | TypedResponseMessage<"EmmcPath"> | TypedResponseMessage<"EmmcPathInfo"> | TypedResponseMessage<"EmmcFileRead"> | TypedResponseMessage<"EmmcFileWrite"> | TypedResponseMessage<"EmmcFileDelete"> | TypedResponseMessage<"EmmcDir"> | TypedResponseMessage<"EmmcDirList"> | TypedResponseMessage<"EmmcDirMake"> | TypedResponseMessage<"EmmcDirRemove"> | TypedResponseMessage<"EosGetPublicKey"> | TypedResponseMessage<"EosPublicKey"> | TypedResponseMessage<"EosSignTx"> | TypedResponseMessage<"EosTxActionRequest"> | TypedResponseMessage<"EosTxActionAck"> | TypedResponseMessage<"EosSignedTx"> | TypedResponseMessage<"EthereumNetworkInfo"> | TypedResponseMessage<"EthereumTokenInfo"> | TypedResponseMessage<"EthereumSignTypedDataChargerWallet"> | TypedResponseMessage<"EthereumTypedDataStructRequestChargerWallet"> | TypedResponseMessage<"EthereumTypedDataStructAckChargerWallet"> | TypedResponseMessage<"EthereumTypedDataValueRequestChargerWallet"> | TypedResponseMessage<"EthereumTypedDataValueAckChargerWallet"> | TypedResponseMessage<"EthereumSignTypedData"> | TypedResponseMessage<"EthereumTypedDataStructRequest"> | TypedResponseMessage<"EthereumTypedDataStructAck"> | TypedResponseMessage<"EthereumTypedDataValueRequest"> | TypedResponseMessage<"EthereumTypedDataValueAck"> | TypedResponseMessage<"EthereumGetPublicKeyChargerWallet"> | TypedResponseMessage<"EthereumPublicKeyChargerWallet"> | TypedResponseMessage<"EthereumGetAddressChargerWallet"> | TypedResponseMessage<"EthereumAddressChargerWallet"> | TypedResponseMessage<"EthereumSignTxChargerWallet"> | TypedResponseMessage<"EthereumSignTxEIP1559ChargerWallet"> | TypedResponseMessage<"EthereumTxRequestChargerWallet"> | TypedResponseMessage<"EthereumTxAckChargerWallet"> | TypedResponseMessage<"EthereumSignMessageChargerWallet"> | TypedResponseMessage<"EthereumMessageSignatureChargerWallet"> | TypedResponseMessage<"EthereumVerifyMessageChargerWallet"> | TypedResponseMessage<"EthereumSignTypedHashChargerWallet"> | TypedResponseMessage<"EthereumTypedDataSignatureChargerWallet"> | TypedResponseMessage<"EthereumSignMessageEIP712"> | TypedResponseMessage<"EthereumGetPublicKey"> | TypedResponseMessage<"EthereumPublicKey"> | TypedResponseMessage<"EthereumGetAddress"> | TypedResponseMessage<"EthereumAddress"> | TypedResponseMessage<"EthereumSignTx"> | TypedResponseMessage<"EthereumSignTxEIP1559"> | TypedResponseMessage<"EthereumTxRequest"> | TypedResponseMessage<"EthereumTxAck"> | TypedResponseMessage<"EthereumSignMessage"> | TypedResponseMessage<"EthereumMessageSignature"> | TypedResponseMessage<"EthereumVerifyMessage"> | TypedResponseMessage<"EthereumSignTypedHash"> | TypedResponseMessage<"EthereumTypedDataSignature"> | TypedResponseMessage<"FilecoinGetAddress"> | TypedResponseMessage<"FilecoinAddress"> | TypedResponseMessage<"FilecoinSignTx"> | TypedResponseMessage<"FilecoinSignedTx"> | TypedResponseMessage<"KaspaGetAddress"> | TypedResponseMessage<"KaspaAddress"> | TypedResponseMessage<"KaspaSignTx"> | TypedResponseMessage<"KaspaTxInputRequest"> | TypedResponseMessage<"KaspaTxInputAck"> | TypedResponseMessage<"KaspaSignedTx"> | TypedResponseMessage<"LnurlAuth"> | TypedResponseMessage<"LnurlAuthResp"> | TypedResponseMessage<"Initialize"> | TypedResponseMessage<"GetFeatures"> | TypedResponseMessage<"ChargerwalletGetFeatures"> | TypedResponseMessage<"Features"> | TypedResponseMessage<"ChargerwalletFeatures"> | TypedResponseMessage<"LockDevice"> | TypedResponseMessage<"EndSession"> | TypedResponseMessage<"ApplySettings"> | TypedResponseMessage<"ApplyFlags"> | TypedResponseMessage<"ChangePin"> | TypedResponseMessage<"ChangeWipeCode"> | TypedResponseMessage<"SdProtect"> | TypedResponseMessage<"Ping"> | TypedResponseMessage<"Cancel"> | TypedResponseMessage<"GetEntropy"> | TypedResponseMessage<"Entropy"> | TypedResponseMessage<"WipeDevice"> | TypedResponseMessage<"ResetDevice"> | TypedResponseMessage<"BackupDevice"> | TypedResponseMessage<"EntropyRequest"> | TypedResponseMessage<"EntropyAck"> | TypedResponseMessage<"RecoveryDevice"> | TypedResponseMessage<"WordRequest"> | TypedResponseMessage<"WordAck"> | TypedResponseMessage<"SetU2FCounter"> | TypedResponseMessage<"GetNextU2FCounter"> | TypedResponseMessage<"NextU2FCounter"> | TypedResponseMessage<"DoPreauthorized"> | TypedResponseMessage<"PreauthorizedRequest"> | TypedResponseMessage<"CancelAuthorization"> | TypedResponseMessage<"BixinSeedOperate"> | TypedResponseMessage<"BixinMessageSE"> | TypedResponseMessage<"BixinOutMessageSE"> | TypedResponseMessage<"DeviceBackToBoot"> | TypedResponseMessage<"BixinBackupRequest"> | TypedResponseMessage<"BixinBackupAck"> | TypedResponseMessage<"BixinRestoreRequest"> | TypedResponseMessage<"BixinRestoreAck"> | TypedResponseMessage<"BixinVerifyDeviceRequest"> | TypedResponseMessage<"BixinVerifyDeviceAck"> | TypedResponseMessage<"BixinWhiteListRequest"> | TypedResponseMessage<"BixinWhiteListAck"> | TypedResponseMessage<"BixinLoadDevice"> | TypedResponseMessage<"BixinBackupDevice"> | TypedResponseMessage<"BixinBackupDeviceAck"> | TypedResponseMessage<"DeviceInfoSettings"> | TypedResponseMessage<"GetDeviceInfo"> | TypedResponseMessage<"DeviceInfo"> | TypedResponseMessage<"ReadSEPublicKey"> | TypedResponseMessage<"SEPublicKey"> | TypedResponseMessage<"WriteSEPublicCert"> | TypedResponseMessage<"ReadSEPublicCert"> | TypedResponseMessage<"SEPublicCert"> | TypedResponseMessage<"SpiFlashWrite"> | TypedResponseMessage<"SpiFlashRead"> | TypedResponseMessage<"SpiFlashData"> | TypedResponseMessage<"SESignMessage"> | TypedResponseMessage<"SEMessageSignature"> | TypedResponseMessage<"ResourceUpload"> | TypedResponseMessage<"ZoomRequest"> | TypedResponseMessage<"ResourceRequest"> | TypedResponseMessage<"ResourceAck"> | TypedResponseMessage<"ResourceUpdate"> | TypedResponseMessage<"NFTWriteInfo"> | TypedResponseMessage<"NFTWriteData"> | TypedResponseMessage<"RebootToBootloader"> | TypedResponseMessage<"RebootToBoardloader"> | TypedResponseMessage<"ListResDir"> | TypedResponseMessage<"FileInfoList"> | TypedResponseMessage<"DeviceEraseSector"> | TypedResponseMessage<"MoneroGetAddress"> | TypedResponseMessage<"MoneroAddress"> | TypedResponseMessage<"MoneroGetWatchKey"> | TypedResponseMessage<"MoneroWatchKey"> | TypedResponseMessage<"MoneroTransactionInitRequest"> | TypedResponseMessage<"MoneroTransactionInitAck"> | TypedResponseMessage<"MoneroTransactionSetInputRequest"> | TypedResponseMessage<"MoneroTransactionSetInputAck"> | TypedResponseMessage<"MoneroTransactionInputsPermutationRequest"> | TypedResponseMessage<"MoneroTransactionInputsPermutationAck"> | TypedResponseMessage<"MoneroTransactionInputViniRequest"> | TypedResponseMessage<"MoneroTransactionInputViniAck"> | TypedResponseMessage<"MoneroTransactionAllInputsSetRequest"> | TypedResponseMessage<"MoneroTransactionAllInputsSetAck"> | TypedResponseMessage<"MoneroTransactionSetOutputRequest"> | TypedResponseMessage<"MoneroTransactionSetOutputAck"> | TypedResponseMessage<"MoneroTransactionAllOutSetRequest"> | TypedResponseMessage<"MoneroTransactionAllOutSetAck"> | TypedResponseMessage<"MoneroTransactionSignInputRequest"> | TypedResponseMessage<"MoneroTransactionSignInputAck"> | TypedResponseMessage<"MoneroTransactionFinalRequest"> | TypedResponseMessage<"MoneroTransactionFinalAck"> | TypedResponseMessage<"MoneroKeyImageExportInitRequest"> | TypedResponseMessage<"MoneroKeyImageExportInitAck"> | TypedResponseMessage<"MoneroKeyImageSyncStepRequest"> | TypedResponseMessage<"MoneroKeyImageSyncStepAck"> | TypedResponseMessage<"MoneroKeyImageSyncFinalRequest"> | TypedResponseMessage<"MoneroKeyImageSyncFinalAck"> | TypedResponseMessage<"MoneroGetTxKeyRequest"> | TypedResponseMessage<"MoneroGetTxKeyAck"> | TypedResponseMessage<"MoneroLiveRefreshStartRequest"> | TypedResponseMessage<"MoneroLiveRefreshStartAck"> | TypedResponseMessage<"MoneroLiveRefreshStepRequest"> | TypedResponseMessage<"MoneroLiveRefreshStepAck"> | TypedResponseMessage<"MoneroLiveRefreshFinalRequest"> | TypedResponseMessage<"MoneroLiveRefreshFinalAck"> | TypedResponseMessage<"NearGetAddress"> | TypedResponseMessage<"NearAddress"> | TypedResponseMessage<"NearSignTx"> | TypedResponseMessage<"NearSignedTx"> | TypedResponseMessage<"NEMGetAddress"> | TypedResponseMessage<"NEMAddress"> | TypedResponseMessage<"NEMSignTx"> | TypedResponseMessage<"NEMSignedTx"> | TypedResponseMessage<"NEMDecryptMessage"> | TypedResponseMessage<"NEMDecryptedMessage"> | TypedResponseMessage<"NervosGetAddress"> | TypedResponseMessage<"NervosAddress"> | TypedResponseMessage<"NervosSignTx"> | TypedResponseMessage<"NervosSignedTx"> | TypedResponseMessage<"NervosTxRequest"> | TypedResponseMessage<"NervosTxAck"> | TypedResponseMessage<"NexaGetAddress"> | TypedResponseMessage<"NexaAddress"> | TypedResponseMessage<"NexaSignTx"> | TypedResponseMessage<"NexaTxInputRequest"> | TypedResponseMessage<"NexaTxInputAck"> | TypedResponseMessage<"NexaSignedTx"> | TypedResponseMessage<"NostrGetPublicKey"> | TypedResponseMessage<"NostrPublicKey"> | TypedResponseMessage<"NostrSignEvent"> | TypedResponseMessage<"NostrSignedEvent"> | TypedResponseMessage<"NostrSignSchnorr"> | TypedResponseMessage<"NostrSignedSchnorr"> | TypedResponseMessage<"NostrEncryptMessage"> | TypedResponseMessage<"NostrEncryptedMessage"> | TypedResponseMessage<"NostrDecryptMessage"> | TypedResponseMessage<"NostrDecryptedMessage"> | TypedResponseMessage<"PolkadotGetAddress"> | TypedResponseMessage<"PolkadotAddress"> | TypedResponseMessage<"PolkadotSignTx"> | TypedResponseMessage<"PolkadotSignedTx"> | TypedResponseMessage<"RippleGetAddress"> | TypedResponseMessage<"RippleAddress"> | TypedResponseMessage<"RippleSignTx"> | TypedResponseMessage<"RippleSignedTx"> | TypedResponseMessage<"ScdoGetAddress"> | TypedResponseMessage<"ScdoAddress"> | TypedResponseMessage<"ScdoSignTx"> | TypedResponseMessage<"ScdoSignedTx"> | TypedResponseMessage<"ScdoTxAck"> | TypedResponseMessage<"ScdoSignMessage"> | TypedResponseMessage<"ScdoSignedMessage"> | TypedResponseMessage<"SolanaGetAddress"> | TypedResponseMessage<"SolanaAddress"> | TypedResponseMessage<"SolanaSignTx"> | TypedResponseMessage<"SolanaSignedTx"> | TypedResponseMessage<"StarcoinGetAddress"> | TypedResponseMessage<"StarcoinAddress"> | TypedResponseMessage<"StarcoinGetPublicKey"> | TypedResponseMessage<"StarcoinPublicKey"> | TypedResponseMessage<"StarcoinSignTx"> | TypedResponseMessage<"StarcoinSignedTx"> | TypedResponseMessage<"StarcoinSignMessage"> | TypedResponseMessage<"StarcoinMessageSignature"> | TypedResponseMessage<"StarcoinVerifyMessage"> | TypedResponseMessage<"StellarGetAddress"> | TypedResponseMessage<"StellarAddress"> | TypedResponseMessage<"StellarSignTx"> | TypedResponseMessage<"StellarTxOpRequest"> | TypedResponseMessage<"StellarPaymentOp"> | TypedResponseMessage<"StellarCreateAccountOp"> | TypedResponseMessage<"StellarPathPaymentStrictReceiveOp"> | TypedResponseMessage<"StellarPathPaymentStrictSendOp"> | TypedResponseMessage<"StellarManageSellOfferOp"> | TypedResponseMessage<"StellarManageBuyOfferOp"> | TypedResponseMessage<"StellarCreatePassiveSellOfferOp"> | TypedResponseMessage<"StellarSetOptionsOp"> | TypedResponseMessage<"StellarChangeTrustOp"> | TypedResponseMessage<"StellarAllowTrustOp"> | TypedResponseMessage<"StellarAccountMergeOp"> | TypedResponseMessage<"StellarManageDataOp"> | TypedResponseMessage<"StellarBumpSequenceOp"> | TypedResponseMessage<"StellarSignedTx"> | TypedResponseMessage<"SuiGetAddress"> | TypedResponseMessage<"SuiAddress"> | TypedResponseMessage<"SuiSignTx"> | TypedResponseMessage<"SuiSignedTx"> | TypedResponseMessage<"SuiTxRequest"> | TypedResponseMessage<"SuiTxAck"> | TypedResponseMessage<"SuiSignMessage"> | TypedResponseMessage<"SuiMessageSignature"> | TypedResponseMessage<"TezosGetAddress"> | TypedResponseMessage<"TezosAddress"> | TypedResponseMessage<"TezosGetPublicKey"> | TypedResponseMessage<"TezosPublicKey"> | TypedResponseMessage<"TezosSignTx"> | TypedResponseMessage<"TezosSignedTx"> | TypedResponseMessage<"TonGetAddress"> | TypedResponseMessage<"TonAddress"> | TypedResponseMessage<"TonSignMessage"> | TypedResponseMessage<"TonSignedMessage"> | TypedResponseMessage<"TonSignProof"> | TypedResponseMessage<"TonSignedProof"> | TypedResponseMessage<"TronGetAddress"> | TypedResponseMessage<"TronAddress"> | TypedResponseMessage<"TronSignTx"> | TypedResponseMessage<"TronSignedTx"> | TypedResponseMessage<"TronSignMessage"> | TypedResponseMessage<"TronMessageSignature"> | TypedResponseMessage<"facotry">;

declare const getDeviceType: (features?: Features) => IDeviceType;
declare const getDeviceTypeByBleName: (name?: string) => IDeviceType;
declare const getDeviceBleName: (features?: Features) => string | null;
declare const getDeviceUUID: (features: Features) => string;
declare const getDeviceLabel: (features?: Features) => string | null;
declare const getMethodVersionRange: (features: Features | undefined, getVersionRange: (deviceModel: IDeviceType | IDeviceModel) => IVersionRange | undefined) => IVersionRange | undefined;

declare const getDeviceFirmwareVersion: (features: Features | undefined) => IVersionArray;
declare const getDeviceBLEFirmwareVersion: (features: Features) => IVersionArray | null;
declare const getDeviceBootloaderVersion: (features: Features | undefined) => IVersionArray;
declare const getDeviceBoardloaderVersion: (features: Features) => IVersionArray;

type FirmwareField = 'firmware' | 'firmware-v2' | 'firmware-v5';
type MessageVersion = 'latest' | 'v1';
declare class DataManager {
    static deviceMap: DeviceTypeMap;
    static assets: AssetsMap | null;
    static settings: ConnectSettings;
    static messages: {
        [version in MessageVersion]: JSON;
    };
    static lastCheckTimestamp: number;
    static getFirmwareStatus: (features: Features) => IDeviceFirmwareStatus;
    static getSysResourcesLatestRelease: (features: Features, forcedUpdateRes?: boolean) => string | undefined;
    static getSysFullResource: (features: Features) => string | undefined;
    static getBootloaderResource: (features: Features) => string | undefined;
    static getBootloaderTargetVersion: (features: Features) => IVersionArray | undefined;
    static getBootloaderRelatedFirmwareVersion: (features: Features) => IVersionArray | undefined;
    static getFirmwareChangelog: (features: Features) => {
        "zh-CN": string;
        "en-US": string;
    }[];
    static getFirmwareLatestRelease: (features: Features) => IFirmwareReleaseInfo | undefined;
    static getBLEFirmwareStatus: (features: Features) => IDeviceBLEFirmwareStatus;
    static getBleFirmwareChangelog: (features: Features) => {
        "zh-CN": string;
        "en-US": string;
    }[];
    static getBleFirmwareLatestRelease: (features: Features) => IBLEFirmwareReleaseInfo | undefined;
    static getTransportStatus: (localVersion: string) => ITransportStatus;
    static getBridgeChangelog: () => {
        "zh-CN": string;
        "en-US": string;
    } | undefined;
    static load(settings: ConnectSettings): Promise<void>;
    static checkAndReloadData(): Promise<void>;
    static getProtobufMessages(messageVersion?: MessageVersion): JSON;
    static getSettings(key?: undefined): ConnectSettings;
    static getSettings<T extends keyof ConnectSettings>(key: T): ConnectSettings[T];
    static isBleConnect: (env: ConnectSettings['env']) => boolean;
}

declare const supportInputPinOnSoftware: (features: Features) => SupportFeatureType;
declare const getFirmwareUpdateField: ({ features, updateType, targetVersion, }: {
    features: Features;
    updateType: 'firmware' | 'ble';
    targetVersion?: string | undefined;
}) => 'ble' | FirmwareField;

declare function checkNeedUpdateBootForTouch(features: Features): boolean;
declare function checkNeedUpdateBootForClassicAndMini(features: Features, willUpdateFirmware?: string): boolean;

type LogMessage = {
    level: string;
    prefix: string;
    message: any[];
    timestamp: number;
};
declare class Log {
    prefix: string;
    enabled: boolean;
    messages: LogMessage[];
    constructor(prefix: string, enabled: boolean);
    addMessage(level: string, prefix: string, ...args: any[]): void;
    log(...args: any[]): void;
    error(...args: any[]): void;
    warn(...args: any[]): void;
    debug(...args: any[]): void;
}
declare const enableLog: (enabled?: boolean) => void;
declare const getLog: () => LogMessage[];
declare const setLoggerPostMessage: (postMessageFn: (message: CoreMessage) => void) => void;
declare enum LoggerNames {
    Core = "@chargerwallet/hd-core",
    Transport = "Transport",
    Device = "Device",
    DeviceCommands = "DeviceCommands",
    DeviceConnector = "DeviceConnector",
    DeviceList = "DeviceList",
    DevicePool = "DevicePool",
    HdCommonConnectSdk = "@chargerwallet/common-connect-sdk",
    HdBleSdk = "@chargerwallet/hd-ble-sdk",
    HdTransportHttp = "@chargerwallet/hd-transport-http",
    HdTransportLowLevel = "@chargerwallet/hd-transport-lowlevel",
    HdBleTransport = "@chargerwallet/hd-ble-transport",
    Connect = "@chargerwallet/connect",
    Iframe = "IFrame",
    SendMessage = "[SendMessage]",
    Method = "[Method]"
}
declare const getLogger: (key: LoggerNames) => Log;

declare const getHDPath: (path: string) => Array<number>;
declare const getScriptType: (path: Array<number>) => InputScriptType;
declare const getOutputScriptType: (path?: number[]) => ChangeOutputScriptType;

declare const getHomeScreenHex: (deviceType: IDeviceType, name: string) => string;
declare const getHomeScreenDefaultList: (features: Features) => string[];
type SizeConfig = {
    width: number;
    height: number;
    radius?: number;
};
declare const getHomeScreenSize: ({ deviceType, homeScreenType, thumbnail, }: {
    deviceType: IDeviceType;
    homeScreenType: 'WallPaper' | 'Nft';
    thumbnail?: boolean | undefined;
}) => SizeConfig | undefined;

declare const isBleConnect: (env: string) => boolean;

declare const wait: (ms: number) => Promise<unknown>;

declare const getSDKVersion: () => any;
declare const whitelist: {
    origin: string;
}[];
declare const whitelistExtension: string[];

declare const DEFAULT_PRIORITY = 2;
declare global {
    var CHARGERWALLET_CONNECT_SRC: string;
}
declare const getEnv: () => "web" | "webextension" | "electron" | "react-native";
declare const corsValidator: (url?: string) => string | undefined;
declare const parseConnectSettings: (input?: Partial<ConnectSettings>) => ConnectSettings;

declare const HardwareSdk: ({ init, call, dispose, eventEmitter, uiResponse, cancel, updateSettings, }: InjectApi) => CoreApi;
declare const HardwareSDKLowLevel: ({ init, call, dispose, eventEmitter, addHardwareGlobalEventListener, uiResponse, cancel, updateSettings, }: LowLevelInjectApi) => LowLevelCoreApi;
declare const HardwareTopLevelSdk: () => CoreApi;

export { AccountAddress, AccountAddresses, AlephiumAddress, AlephiumGetAddressParams, AlephiumSignMessageParams, AlephiumSignTransactionParams, AlephiumSignedTx, AlgoAddress, AlgoGetAddressParams, AlgoSignTransactionParams, AlgoSignedTx, AllNetworkAddressParams, AllNetworkGetAddressParams, AptosAddress, AptosGetAddressParams, AptosGetPublicKeyParams, AptosMessageSignature, AptosPublicKey, AptosSignMessageParams, AptosSignTransactionParams, AptosSignedTx, AssetsMap, BTCAddress, BTCGetAddressParams, BTCGetPublicKeyParams, BTCPublicKey, BTCSignMessageParams, BTCSignTransactionParams, BTCVerifyMessageParams, BleReleaseInfoEvent, BleReleaseInfoPayload, CORE_EVENT, CallMethod, CallMethodAnyResponse, CallMethodKeys, CallMethodPayload, CallMethodResponse, CallMethodUnion, CardanoAddress, CardanoGetAddressMethodParams, CardanoGetAddressParams, CardanoSignTransaction, CardanoSignedTxData, CipheredKeyValue, CipheredKeyValueParams, CommonParams, ConfluxAddress, ConfluxGetAddressParams, ConfluxSignMessageCIP23Params, ConfluxSignMessageParams, ConfluxSignTransactionParams, ConfluxSignedTx, ConfluxTransaction, ConnectSettings, Core, CoreApi, CoreMessage, CosmosAddress, CosmosGetAddressParams, CosmosGetPublicKeyParams, CosmosPublicKey, CosmosSignTransactionParams, CosmosSignedTx, DEFAULT_PRIORITY, DEVICE, DEVICE_EVENT, DataManager, Device$1 as Device, DeviceButtonRequest, DeviceButtonRequestPayload, DeviceChangePinParams, DeviceConnnectRequest, DeviceDisconnnectRequest, DeviceEvent, DeviceEventListenerFn, DeviceEventMessage, DeviceFeaturesPayload, DeviceFirmwareRange, DeviceFlagsParams, DeviceModelToTypes, DeviceProgress, DeviceRecoveryParams, DeviceResetParams, DeviceSendFeatures, DeviceSendSupportFeatures, DeviceSettingsParams, DeviceStatus, DeviceSupportFeatures, DeviceSupportFeaturesPayload, DeviceTypeMap, DeviceTypeToModels, DeviceUploadResourceParams, DeviceVerifyParams, DeviceVerifySignature, DnxAddress, DnxGetAddressParams, DnxSignTransactionParams, DnxSignature, DnxTxKey, EChargerWalletDeviceMode, EVMAccessList, EVMAddress, EVMGetAddressParams, EVMGetPublicKeyParams, EVMPublicKey, EVMSignMessageEIP712Params, EVMSignMessageParams, EVMSignTransactionParams, EVMSignTypedDataParams, EVMSignedTx, EVMTransaction, EVMTransactionEIP1559, EVMVerifyMessageParams, EthereumSignTypedDataMessage, EthereumSignTypedDataTypeProperty, EthereumSignTypedDataTypes, FIRMWARE, FIRMWARE_EVENT, Features, FilecoinAddress, FilecoinGetAddressParams, FilecoinSignTransactionParams, FilecoinSignedTx, FirmwareEvent, FirmwareMessage, FirmwareProgress, FirmwareRange, FirmwareRelease$2 as FirmwareRelease, FirmwareTip, FirmwareUpdateBinaryParams, FirmwareUpdateParams, HardwareSDKLowLevel, HardwareTopLevelSdk, IBLEFirmwareReleaseInfo, IDeviceBLEFirmwareStatus, IDeviceFirmwareStatus, IDeviceModel, IDeviceType, IFRAME, IFirmwareReleaseInfo, IFrameBridge, IFrameCallMessage, IFrameCancelMessage, IFrameEvent, IFrameEventMessage, IFrameInit, ILocale, ITransportStatus, IVersionArray, IVersionRange, KaspaAddress, KaspaGetAddressParams, KaspaSignInputParams, KaspaSignOutputParams, KaspaSignTransactionParams, KaspaSignature, KnownDevice, LOG, LOG_EVENT, LogBlockEvent, LogEvent, LogEventMessage, LogOutput, LoggerNames, LowLevelCoreApi, LowLevelInjectApi, MajorVersion, MethodResponseMessage, NEMAddress, NEMAggregateModificationTransaction, NEMGetAddressParams, NEMImportanceTransaction, NEMMosaic, NEMMosaicCreationTransaction, NEMMultisigTransaction, NEMProvisionNamespaceTransaction, NEMSignTransactionParams, NEMSupplyChangeTransaction, NEMTransaction, NEMTransferTransaction, NearAddress, NearGetAddressParams, NearSignTransactionParams, NervosAddress, NervosGetAddressParams, NervosSignTransactionParams, NervosSignedTx, NexaAddress, NexaGetAddressParams, NexaSignInputParams, NexaSignOutputParams, NexaSignTransactionParams, NexaSignature, ChargerwalletFeatures, Params, PolkadotAddress, PolkadotGetAddressParams, PolkadotSignTransactionParams, PolkadotSignedTx, PostMessageEvent, PreviousAddressResult, RESPONSE_EVENT, RefTransaction, ReleaseInfo, ReleaseInfoEvent, ReleaseInfoPayload, RemoteConfigResponse, Response, ScdoAddress, ScdoGetAddressParams, ScdoSignMessageParams, ScdoSignTransactionParams, ScdoSignedTx, SearchDevice, SignedTransaction, SolanaAddress, SolanaGetAddressParams, SolanaSignTransactionParams, SolanaSignedTx, StarcoinAddress, StarcoinGetAddressParams, StarcoinGetPublicKeyParams, StarcoinPublicKey, StarcoinSignMessageParams, StarcoinSignTransactionParams, StarcoinVerifyMessageParams, StellarAddress, StellarAsset, StellarGetAddressParams, StellarOperation, StellarSignTransactionParams, StellarTransaction, StrictFeatures, Success, SuiAddress, SuiGetAddressParams, SuiGetPublicKeyParams, SuiPublicKey, SuiSignMessageParams, SuiSignTransactionParams, SuiSignedTx, SupportFeatureType, SupportFeatures, TonAddress, TonGetAddressParams, TonSignMessageParams, TonSignProofParams, TopLevelInjectApi, TransactionOptions, TransportReleaseStatus, TronAddress, TronDelegateResourceContract, TronFreezeBalanceV2Contract, TronGetAddressParams, TronSignMessageParams, TronSignTransactionParams, TronTransaction, TronTransactionContract, TronTransferContract, TronTriggerSmartContract, TronUnDelegateResourceContract, TronUnfreezeBalanceV2Contract, TronWithdrawBalanceContract, TronWithdrawExpireUnfreezeContract, UI_EVENT, UI_REQUEST, UI_RESPONSE, UiEvent, UiEventMessage, UiPromise, UiPromiseResponse, UiRequestButton, UiRequestDeviceAction, UiRequestPassphrase, UiRequestPassphraseOnDevice, UiRequestWithoutPayload, UiResponseEvent, UiResponseMessage, UiResponsePassphrase, UiResponsePin, UnavailableCapabilities, UnavailableCapability, Unsuccessful, VersionArray, checkNeedUpdateBootForClassicAndMini, checkNeedUpdateBootForTouch, corsValidator, createDeviceMessage, createErrorMessage, createFirmwareMessage, createIFrameMessage, createLogMessage, createResponseMessage, createUiMessage, createUiResponse, HardwareSdk as default, enableLog, getDeviceBLEFirmwareVersion, getDeviceBleName, getDeviceBoardloaderVersion, getDeviceBootloaderVersion, getDeviceFirmwareVersion, getDeviceLabel, getDeviceType, getDeviceTypeByBleName, getDeviceUUID, getEnv, getFirmwareUpdateField, getHDPath, getHomeScreenDefaultList, getHomeScreenHex, getHomeScreenSize, getLog, getLogger, getMethodVersionRange, getOutputScriptType, getSDKVersion, getScriptType, getTimeStamp, httpRequest, init as initCore, isBleConnect, isValidVersionArray, isValidVersionString, normalizeVersionArray, parseConnectSettings, parseMessage, patchFeatures, safeThrowError, setLoggerPostMessage, supportInputPinOnSoftware, versionCompare, versionSplit, wait, whitelist, whitelistExtension };
