import type { BaseChart } from "@base/chart";
import type { Difficulty } from "./difficulty";

export interface Chart extends BaseChart {
    difficulty: Difficulty;
}
