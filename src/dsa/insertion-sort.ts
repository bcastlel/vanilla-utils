const insertionSort = <T>(a: T[]): T[] => {
  const arr = a.slice();

  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    const key = arr[i];

    for (; j >= 0 && key < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = key;
  }

  return arr;
};

export default insertionSort;
