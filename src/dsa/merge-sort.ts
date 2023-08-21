const merge = <T>(a: T[], b: T[]): T[] => {
  let i = 0;
  let j = 0;
  const c = [];

  while (i < a.length || j < b.length) {
    c.push(j === b.length || i < a.length && a[i] < b[j]
      ? a[i++]
      : b[j++]
    );
  }

  return c;
};

const sort = <T>(arr: T[]): T[] => {
  if (arr.length <= 1) {
    return arr;
  }

  const half = Math.floor(arr.length / 2);

  const left = arr.slice(0, half);
  const right = arr.slice(half);

  return merge(sort(left), sort(right));
};

export default sort;
