import type { Database as BaseDatabase } from "@base/database";
import type { DataOrError } from "@base/dataOrError";
import type { Chart } from "./chart";

export interface Database<T extends Chart> extends BaseDatabase<T> {
    /**
     * Get the image of the boss of this chart.
     *
     * @param chart A Ongeki chart.
     * @returns Image buffer or error.
     */
    getBossCard(chart: T): Promise<DataOrError<Buffer>>;
}
