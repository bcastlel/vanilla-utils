import { Comparator, DEFAULT_COMPARATOR, wrapAlgorithm } from '../helpers';
import MinHeap from '../data-structures/min-heap';

/**
 * Worst-case performance: O(n * log n)
 *
 * Best-case performance: O(n * log n)
 *
 * Average performance: O(n * log n)
 *
 * Average space complexity: O(n) because of an extra array here, but it's possible to achieve O(1)
 */
const heapSort = <T>(arr: T[], comparator: Comparator<T> = DEFAULT_COMPARATOR): T[] => {
  const sortedArr: T[] = [];
  const heap = new MinHeap<T>(comparator);

  for (let i = 0; i < arr.length; i++) {
    heap.push(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    sortedArr.push(heap.peek()!);
    heap.shift();
  }

  return sortedArr;
};

const heapSortWrapper = wrapAlgorithm(heapSort);

export default heapSortWrapper;
