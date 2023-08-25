import { Comparator, DEFAULT_COMPARATOR } from '../helpers';

const partition = <T>(arr: T[], comparator: Comparator<T> = DEFAULT_COMPARATOR, l = 0, r = arr.length - 1): number => {
  const pivot = arr[Math.floor((l + r) / 2)];

  let i = l;
  let j = r;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    while (comparator(arr[i], pivot) < 0) {
      i++;
    }

    while (comparator(arr[j], pivot) > 0) {
      j--;
    }

    if (i >= j) {
      break;
    }

    [arr[i++], arr[j--]] = [arr[j], arr[i]];
  }

  return j;
};

export default partition;
