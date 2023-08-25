export type Comparator<T = any> = (a: T, b: T) => -1 | 0 | 1;

export const DEFAULT_COMPARATOR: Comparator = (a, b) => {
  if (a === b) {
    return 0;
  }

  return a > b ? 1 : -1;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const wrapAlgorithm = <T extends (arr: any[], ...rest: any[]) => any>(fn: T) =>
  ((arr, ...rest) => fn(structuredClone(arr), ...rest)) as T;
