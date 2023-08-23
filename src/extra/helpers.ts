export type Comparator<T = any> = (a: T, b: T) => -1 | 0 | 1;

export const DEFAULT_COMPARATOR: Comparator = (a, b) => {
  if (a === b) {
    return 0;
  }

  return a > b ? 1 : -1;
};

export type SortingFn<T = any> = (arr: T[], comparator?: Comparator<T>) => T[];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const wrapSortingFn = <T extends SortingFn>(fn: T) => ((arr, comparator) => {
  const clone: typeof arr = structuredClone(arr);
  return fn(clone, comparator);
}) as T;
