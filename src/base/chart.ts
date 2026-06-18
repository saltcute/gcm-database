export interface BaseChart {
    /**
     * A unique identifier of this chart.
     */
    identifier: string;
    /**
     * The displayed title of this chart.
     */
    title: string;
    /**
     * The displayed artist of this chart.
     */
    artist: string;
    /**
     * The displayed difficulty tiers of this chart.
     */
    difficulty: unknown;
    /**
     * Displayed level of this chart.
     */
    level: string;
    /**
     * A decimal number of the internal level of this chart.
     */
    internalLevel?: number;
    notes: Record<string, number>;
    bpm: number[];
    designer: string;
    optionalData: unknown;
}
