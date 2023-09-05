class Queue<T> {
  private arr: T[];
  private head: number;
  private tail: number;

  constructor() {
    this.arr = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(el: T): void {
    this.arr[this.tail++] = el;
  }

  dequeue(): T | undefined {
    if (!this.size) {
      return;
    }

    const el = this.arr[this.head];
    delete this.arr[this.head++];
    return el;
  }

  peek(): T | undefined {
    return this.arr[this.head];
  }

  get size(): number {
    return this.tail - this.head;
  }
}

export default Queue;
