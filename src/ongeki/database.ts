import type { Database as BaseDatabase } from "@base/database";
import type { Chart } from "./chart";

export interface Database<T extends Chart> extends BaseDatabase<T> {}
