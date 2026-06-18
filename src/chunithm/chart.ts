import type { BaseChart } from "@base/chart";
import type { Difficulty } from "./difficulty";

export interface Chart extends BaseChart {
    difficulty: Difficulty;
    notes: {
        tap: number;
        hold: number;
        slide: number;
        air: number;
        flick?: number;
    };
}
