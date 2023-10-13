const fib = (n: number): number => {
  if (!n) {
    return 0;
  }

  let a = 1;
  let b = 1;

  for (let i = 3; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }

  return b;
};

export default fib;
