import type { SessionInterface } from './types';
/**
 * Like Object.fromEntries(), but normalizes the keys and filters out null values.
 */
export declare function sessionFromEntries(entries: [string, string | number][]): SessionInterface;
export declare function sessionEntries(session: SessionInterface): [string, string | number][];
//# sourceMappingURL=session-utils.d.ts.map