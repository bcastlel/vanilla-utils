import { wrapAlgorithm } from '../helpers';

type CountingSortOverload = {
  <K extends PropertyKey, T extends { [key in K]: number }>(arr: T[], key: K): T[];
  (arr: number[]): number[];
};

/**
 * Worst-case performance: O(n + max)
 *
 * Best-case performance: O(n + max)
 *
 * Average performance: O(n + max)
 *
 * Average space complexity: O(n + max)
 */
const countingSort: CountingSortOverload = (arr: any[], key?: PropertyKey): any[] => {
  const getValue = (el: any): number => key === undefined ? el : el[key];

  let max = -1;

  for (let i = 0; i < arr.length; i++) {
    if (getValue(arr[i]) > max) {
      max = getValue(arr[i]);
    }
  }

  const cnt = new Array(max + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    cnt[getValue(arr[i])]++;
  }

  const pos = [0];

  for (let i = 1; i < cnt.length; i++) {
    pos[i] = pos[i - 1] + cnt[i - 1];
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result[pos[getValue(arr[i])]++] = arr[i];
  }

  return result;
};

const countingSortWrapper = wrapAlgorithm(countingSort);

export default countingSortWrapper;
