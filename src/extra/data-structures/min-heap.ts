import { Comparator, DEFAULT_COMPARATOR } from '../helpers';

class MinHeap<T> {
  arr: T[];

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
    let parent = this.getParentOf(i);

    while (parent !== undefined && this.comparator(this.arr[i], parent) < 0) {
      const parentIndex = this.getParentIndexOf(i);

      [this.arr[i], this.arr[parentIndex]] = [parent, this.arr[i]];

      i = parentIndex;
      parent = this.getParentOf(i);
    }
  }

  private siftDown(): void {
    let i = 0;
    let leftChild = this.getLeftChildOf(i);

    while (leftChild !== undefined) {
      let minChild = leftChild;
      let minChildIndex = this.getLeftChildIndexOf(i);

      const rightChild = this.getRightChildOf(i);

      if (rightChild !== undefined && this.comparator(rightChild, minChild) < 0) {
        minChild = rightChild;
        minChildIndex = this.getRightChildIndexOf(i);
      }

      if (this.comparator(minChild, this.arr[i]) < 0) {
        [this.arr[i], this.arr[minChildIndex]] = [minChild, this.arr[i]];
        i = minChildIndex;
        leftChild = this.getLeftChildOf(i);
      } else {
        break;
      }
    }
  }

  peek(): T | undefined {
    return this.arr[0];
  }

  push(el: T): void {
    this.arr.push(el);
    this.siftUp();
  }

  pop(): void {
    const poppedEl = this.arr.pop();

    if (poppedEl === undefined || !this.arr.length) {
      return;
    }

    this.arr[0] = poppedEl;
    this.siftDown();
  }
}

export default MinHeap;
