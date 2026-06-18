import type { BaseChart } from "@base/chart";
import type { Difficulty } from "./difficulty";

export enum LunaticType {
    NONE = "none",
    REMASTER = "remaster",
    LUNATIC = "lunatic",
}

export interface Chart extends BaseChart {
    difficulty: Difficulty;
    notes: {
        tap: number;
        hold: number;
        side: number;
        flick: number;
        bell: number;
    };
    lunatic: LunaticType;
    boss: {
        character: {
            rarity: string;
            name: string;
            /**
             * Characters with `N` rarity don't have a comment.
             */
            comment?: string;
            /**
             * An identifier to fetch the card image from the database.
             */
            card: string;
        };
        level: number;
    };
}
