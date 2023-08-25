import { Comparator, DEFAULT_COMPARATOR } from '../helpers';

/**
 * Worst-case performance: O(log n)
 *
 * Best-case performance: O(1)
 *
 * Average performance: O(log n)
 *
 * Space complexity: O(1)
 */
const binarySearch = <T>(sortedArr: T[], value: T, comparator: Comparator<T> = DEFAULT_COMPARATOR): number => {
  let low = 0;
  let high = sortedArr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const comparisonResult = comparator(sortedArr[mid], value);

    if (!comparisonResult) {
      return mid;
    }

    if (comparisonResult < 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};

export default binarySearch;
