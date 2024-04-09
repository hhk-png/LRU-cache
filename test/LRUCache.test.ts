import { expect, describe, it } from 'vitest'
import { LRUCache } from '../src/LRUCache'

describe('LRUCache', () => {
  it('put cache', () => {
    const cache = new LRUCache<number, number>(2)
    cache.put(1, 1)
    cache.put(2, 2)
    cache.put(1, 3)
    expect([...cache.cache.keys()]).toEqual([1, 2])
    cache.put(3, 3)
    expect([...cache.cache.keys()].sort()).toEqual([1, 3])
  })
  
  it("max size", () => {
    const cache = new LRUCache<number, number>(2)
    cache.put(1, 1)
    cache.put(2, 2)
    cache.put(3, 3)
    expect(cache.get(1)).toBe(-1)
  })
  
  it("priority", () => {
    const cache = new LRUCache<number, number>(2)
    cache.put(1, 1)
    cache.put(2, 2)
    expect(cache.get(1)).toBe(1)
    cache.put(3, 3)
    expect(cache.get(2)).toBe(-1)
  })
})

