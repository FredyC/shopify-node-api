/**
 * A timing safe string comparison utility.
 *
 * @param strA any string, array of strings, or object with string values
 * @param strB any string, array of strings, or object with string values
 */
export default function safeCompare(strA: string | {
    [key: string]: string;
} | string[] | number[], strB: string | {
    [key: string]: string;
} | string[] | number[]): boolean;
//# sourceMappingURL=safe-compare.d.ts.map