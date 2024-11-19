import type { DeviceFirmwareRange } from '../../types';
declare enum Networks {
    Polkadot = "polkadot",
    Westend = "westend",
    Kusama = "kusama",
    Astar = "astar",
    JoyStream = "joystream",
    Manta = "manta"
}
export default Networks;
export declare function getPolkadotVersionRange(network: string): DeviceFirmwareRange;
export declare function getPolkadotVersionRangeWithBundle(networks: string[]): DeviceFirmwareRange | {
    model_mini: {
        min: string;
    };
    model_touch: {
        min: string;
    };
};
//# sourceMappingURL=networks.d.ts.map