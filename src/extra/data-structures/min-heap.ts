import { Comparator, DEFAULT_COMPARATOR } from '../helpers';

class MinHeap<T> {
  private arr: T[];

  constructor(private comparator: Comparator<T> = DEFAULT_COMPARATOR) {
    this.arr = [];
  }

  private getLeftChildIndexOf(i: number): number {
    return 2 * i + 1;
  }

  private getRightChildIndexOf(i: number): number {
    return 2 * i + 2;
  }

  private getParentIndexOf(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  private getLeftChildOf(i: number): T | undefined {
    return this.arr[this.getLeftChildIndexOf(i)];
  }

  private getRightChildOf(i: number): T | undefined {
    return this.arr[this.getRightChildIndexOf(i)];
  }

  private getParentOf(i: number): T | undefined {
    return this.arr[this.getParentIndexOf(i)];
  }

  private siftUp(): void {
    let i = this.arr.length - 1;

    while (this.getParentOf(i) !== undefined && this.comparator(this.arr[i], this.getParentOf(i)!) < 0) {
      [this.arr[i], this.arr[this.getParentIndexOf(i)]] = [this.getParentOf(i)!, this.arr[i]];
      i = this.getParentIndexOf(i);
    }
  }

  private siftDown(): void {
    let i = 0;

    while (this.getLeftChildOf(i) !== undefined) {
      let minChildIndex = this.getLeftChildIndexOf(i);

      if (this.getRightChildOf(i) !== undefined && this.comparator(this.getRightChildOf(i)!, this.arr[minChildIndex]) < 0) {
        minChildIndex = this.getRightChildIndexOf(i);
      }

      if (this.comparator(this.arr[minChildIndex], this.arr[i]) < 0) {
        [this.arr[i], this.arr[minChildIndex]] = [this.arr[minChildIndex], this.arr[i]];
        i = minChildIndex;
      } else {
        break;
      }
    }
  }

  push(el: T): void {
    this.arr.push(el);
    this.siftUp();
  }

  peek(): T | undefined {
    return this.arr[0];
  }

  shift(): void {
    const poppedEl = this.arr.pop();

    if (poppedEl === undefined || !this.arr.length) {
      return;
    }

    this.arr[0] = poppedEl;
    this.siftDown();
  }

  size(): number {
    return this.arr.length;
  }
}

export default MinHeap;
