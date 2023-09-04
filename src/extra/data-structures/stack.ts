class Stack<T> {
  private arr: T[];

  constructor() {
    this.arr = [];
  }

  push(el: T): void {
    this.arr.push(el);
  }

  pop(): T | undefined {
    return this.arr.pop();
  }

  peek(): T | undefined {
    return this.arr.at(-1);
  }

  size(): number {
    return this.arr.length;
  }
}

export default Stack;
