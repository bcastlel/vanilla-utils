import { Comparator, DEFAULT_COMPARATOR, wrapSortingFn } from '../helpers';
import MinHeap from '../data-structures/min-heap';

/**
 * Worst-case performance: O(n * log n)
 *
 * Best-case performance: O(n * log n)
 *
 * Average performance: O(n * log n)
 *
 * Worst-case space complexity: O(n) because of an extra array here, but it's possible to achieve O(1)
 */
const heapSort = <T>(arr: T[], comparator: Comparator<T> = DEFAULT_COMPARATOR): T[] => {
  const sortedArr: T[] = [];
  const heap = new MinHeap<T>(comparator);

  for (let i = 0; i < arr.length; i++) {
    heap.push(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    const peekedEl = heap.peek();

    if (peekedEl === undefined) {
      break;
    }

    sortedArr.push(peekedEl);
    heap.pop();
  }

  return sortedArr;
};

const heapSortWrapper = wrapSortingFn(heapSort);

export default heapSortWrapper;
