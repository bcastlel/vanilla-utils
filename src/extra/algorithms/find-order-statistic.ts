import { Comparator, DEFAULT_COMPARATOR, wrapAlgorithm } from '../helpers';
import partition from './partition';

/**
 * Worst-case performance: O(n^2)
 *
 * Best-case performance: O(n)
 *
 * Average performance: O(n)
 *
 * Average space complexity: O(log n)
 */
const findOrderStatistic = <T>(arr: T[], k: number, comparator: Comparator<T> = DEFAULT_COMPARATOR, l = 0, r = arr.length - 1): T => {
  if (l === r) {
    return arr[l];
  }

  const m = partition(arr, comparator, l, r);

  if (k <= m) {
    return findOrderStatistic(arr, k, comparator, l, m);
  }

  return findOrderStatistic(arr, k, comparator, m + 1, r);
};

export const findOrderStatisticWrapper = wrapAlgorithm(findOrderStatistic);

export default findOrderStatistic;
