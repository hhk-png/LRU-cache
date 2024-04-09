
class DLinkedNode<K, V> {
  key: K
  value: V
  prev: DLinkedNode<K, V> | null
  next: DLinkedNode<K, V> | null
  constructor(key?: K, value?: V) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null;
  }
}

export class LRUCache<K, V> {
  maxSize: number
  arr: number[]
  head: DLinkedNode<K, V>
  tail: DLinkedNode<K, V>
  cache: Map<K, DLinkedNode<K, V>>
  size: number

  constructor(maxSize?: number) {
    this.maxSize = maxSize || 10
    this.head = new DLinkedNode()
    this.tail = new DLinkedNode()
    this.head.next = this.tail
    this.tail.prev = this.head
    this.cache = new Map()
    this.size = 0
  }

  get(key: K) {
    if (!this.cache.has(key)) {
      return -1
    }
    const node = this.cache.get(key)
    this.moveToHead(node)
    return node.value
  }

  put(key: K, value: V) {
    if (!this.cache.has(key)) {
      const node = new DLinkedNode(key, value)
      this.cache.set(key, node)
      this.addToHead(node)
      this.size++
      if (this.size > this.maxSize) {
        const removed = this.removeTail()
        this.cache.delete(removed.key)
        this.size--
      }
    } else {
      const node = this.cache.get(key)
      node.value = value
      this.moveToHead(node)
    }
  }

  private moveToHead(node: DLinkedNode<K, V>) {
    this.removeNode(node)
    this.addToHead(node)
  }

  private addToHead(node: DLinkedNode<K, V>) {
    node.prev = this.head
    node.next = this.head.next
    this.head.next.prev = node
    this.head.next = node
  }

  private removeTail() {
    const node = this.tail.prev
    this.removeNode(node)
    return node
  }

  private removeNode(node: DLinkedNode<K, V>) {
    node.prev.next = node.next
    node.next.prev = node.prev
  }
}
