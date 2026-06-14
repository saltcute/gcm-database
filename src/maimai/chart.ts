import type { BaseChart } from "@base/chart";
import type { Difficulty } from "./difficulty";

export enum Type {
    STANDARD = "standard",
    DELUXE = "deluxe",
}

export interface Chart extends BaseChart {
    /**
     * Type of this chart.
     */
    type: Type;
    difficulty: Difficulty;
}
