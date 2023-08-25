import { Comparator, DEFAULT_COMPARATOR, wrapAlgorithm } from '../helpers';

/**
 * Worst-case performance: O(n^2)
 *
 * Best-case performance: O(n^2)
 *
 * Average performance: O(n^2)
 *
 * Average space complexity: O(1)
 */
const selectionSort = <T>(arr: T[], comparator: Comparator<T> = DEFAULT_COMPARATOR): T[] => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (comparator(arr[j], arr[minIndex]) < 0) {
        minIndex = j;
      }
    }

    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
};

const selectionSortWrapper = wrapAlgorithm(selectionSort);

export default selectionSortWrapper;
