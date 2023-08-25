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
 * Space complexity: O(n)
 */
const mergeSort = <T>(arr: T[], comparator: Comparator<T> = DEFAULT_COMPARATOR): T[] => {
  if (arr.length <= 1) {
    return arr;
  }

  const half = Math.floor(arr.length / 2);

  const left = arr.slice(0, half);
  const right = arr.slice(half);

  const sortedLeft = mergeSort(left, comparator);
  const sortedRight = mergeSort(right, comparator);

  return merge(sortedLeft, sortedRight, comparator);
};

const mergeSortWrapper = wrapSortingFn(mergeSort);

export default mergeSortWrapper;
