export type DataOrError<D, E = string> =
    | { data: D; err?: undefined }
    | { data?: undefined; err: E };
