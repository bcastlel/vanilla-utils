import { Comparator, DEFAULT_COMPARATOR, wrapSortingFn } from '../helpers';

/**
 * Worst-case performance: O(n^2)
 *
 * Best-case performance: O(n)
 *
 * Average performance: O(n^2)
 *
 * Worst-case space complexity: O(1)
 */
const bubbleSort = <T>(arr: T[], comparator: Comparator<T> = DEFAULT_COMPARATOR): T[] => {
  for (let i = 0; i < arr.length - 1; i++) {
    let hasBeenSwapped = false;

    for (let j = arr.length - 1; j > i; j--) {
      if (comparator(arr[j], arr[j - 1]) < 0) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        hasBeenSwapped = true;
      }
    }

    if (!hasBeenSwapped) {
      break;
    }
  }

  return arr;
};

const bubbleSortWrapper = wrapSortingFn(bubbleSort);

export default bubbleSortWrapper;

