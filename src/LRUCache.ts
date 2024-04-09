
class DLinkedNode<K, V> {
  key: K
  value: V
  prev: DLinkedNode<K, V> | null
  next: DLinkedNode<K, V> | null
  constructor(key: K, value: V) {
    this.key = null;
    this.value = null;
    this.prev = null
    this.next = null;
  }
}

export class maxSizeArray<T> {
  maxSize: number
  arr: T[]

  constructor(maxSize: number, array: T[]) {
    this.maxSize = 10
    this.arr = []
  }

  push(item: T) {

  }
  
}
