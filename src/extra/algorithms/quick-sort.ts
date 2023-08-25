import { Comparator, DEFAULT_COMPARATOR, wrapAlgorithm } from '../helpers';
import partition from './partition';

/**
 * Worst-case performance: O(n^2)
 *
 * Best-case performance: O(n * log n)
 *
 * Average performance: O(n * log n)
 *
 * Average space complexity: O(log n)
 */
const quickSort = <T>(arr: T[], comparator: Comparator<T> = DEFAULT_COMPARATOR, l = 0, r = arr.length - 1): T[] => {
  if (l < r) {
    const m = partition(arr, comparator, l, r);
    quickSort(arr, comparator, l, m);
    quickSort(arr, comparator, m + 1, r);
  }

  return arr;
};

const quickSortWrapper = wrapAlgorithm(quickSort);

export default quickSortWrapper;
