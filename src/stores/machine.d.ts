import { MachineState } from "vmmx-schema";
import { AppStore } from "./app";
import { ChannelGroupTOFIX } from "../toFutureSchema";
import { SomeSignalWrapped } from "../core/helpers/types";
export declare class MachineStore implements SomeSignalWrapped<MachineState> {
    appStore: AppStore;
    mute: {
        bassdrum: import("../core/helpers/solid").Signal<boolean | undefined>;
        hihat: import("../core/helpers/solid").Signal<boolean | undefined>;
        snare: import("../core/helpers/solid").Signal<boolean | undefined>;
        crash: import("../core/helpers/solid").Signal<boolean | undefined>;
        vibraphone: import("../core/helpers/solid").Signal<boolean | undefined>;
        bass: import("../core/helpers/solid").Signal<boolean | undefined>;
    };
    bpm: import("../core/helpers/solid").Signal<number>;
    flywheelConnected: import("../core/helpers/solid").Signal<boolean>;
    constructor(appStore: AppStore);
    setMuted(channelGroup: ChannelGroupTOFIX, muted: boolean): void;
}
