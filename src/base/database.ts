import type { DataOrError } from "@base/dataOrError";

export interface Database<Chart> {
    getJacket(identifier: string): DataOrError<Buffer>;
    getChart(identifier: string): DataOrError<Chart>;
    searchChart(
        payload: unknown,
        options: unknown,
    ): DataOrError<
        {
            chart: Chart;
            weight: number;
        }[]
    >;
}
