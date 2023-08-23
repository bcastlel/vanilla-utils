import { Comparator, DEFAULT_COMPARATOR, wrapSortingFn } from '../helpers';

const merge = <T>(a: T[], b: T[], comparator: Comparator<T> = DEFAULT_COMPARATOR): T[] => {
  let i = 0;
  let j = 0;
  const c = [];

  while (i < a.length || j < b.length) {
    c.push(j === b.length || i < a.length && comparator(a[i], b[j]) < 0
      ? a[i++]
      : b[j++]
    );
  }

  return c;
};

/**
 * Worst-case performance: O(n * log n)
 *
 * Best-case performance: O(n * log n)
 *
 * Average performance: O(n * log n)
 *
 * Worst-case space complexity: O(n)
 */
const sort = <T>(arr: T[], comparator?: Comparator<T>): T[] => {
  if (arr.length <= 1) {
    return arr;
  }

  const half = Math.floor(arr.length / 2);

  const left = arr.slice(0, half);
  const right = arr.slice(half);

  const sortedLeft = sort(left, comparator);
  const sortedRight = sort(right, comparator);

  return merge(sortedLeft, sortedRight, comparator);
};

const sortWrapper = wrapSortingFn(sort);

export default sortWrapper;
