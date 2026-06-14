import type { DataOrError } from "@base/dataOrError";
import type { BaseChart } from "./chart";

export interface Database<Chart extends BaseChart> {
    getChart(
        identifier: string,
        difficulty: Chart["difficulty"],
    ): Promise<DataOrError<Chart>>;
    getJacket(
        identifier: string,
        variant?: unknown,
    ): Promise<DataOrError<Buffer>>;
    searchChart(
        payload: unknown,
        options?: unknown,
    ): Promise<
        DataOrError<
            {
                chart: Chart;
                weight: number;
            }[]
        >
    >;
}
