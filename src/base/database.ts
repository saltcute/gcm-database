import type { DataOrError } from "@base/dataOrError";

export interface Database<Chart> {
    getChart(identifier: string): Promise<DataOrError<Chart>>;
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
