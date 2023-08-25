import { Comparator, DEFAULT_COMPARATOR, wrapAlgorithm } from '../helpers';

/**
 * Worst-case performance: O(n^2)
 *
 * Best-case performance: O(n)
 *
 * Average performance: O(n^2)
 *
 * Average space complexity: O(1)
 */
const insertionSort = <T>(arr: T[], comparator: Comparator<T> = DEFAULT_COMPARATOR): T[] => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    const key = arr[i];

    for (; j >= 0 && comparator(key, arr[j]) < 0; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = key;
  }

  return arr;
};

const insertionSortWrapper = wrapAlgorithm(insertionSort);

export default insertionSortWrapper;
