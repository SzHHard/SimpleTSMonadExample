import { describe, it } from 'node:test'

import assert from 'node:assert'
import { Maybe, None, Some } from './Maybe'

export const testMonads = () => {
  function divide(devident: number, devisor: number): Maybe<number> {
    return devisor === 0 ? new None() : new Some(devident / devisor)
  }

  describe('Check monadic laws', () => {
    const f = (val: number) => new Some(val * 2)

    it('should follow left-identity', () => {
      const start = 1
      assert.equal(new Some(start).flatMap(f).get(), new Some(start * 2).get())
    })
    it('should follow right-identity', () => {
      const start = 2
      assert.equal(new Some(start).flatMap(f).get(), new Some(start * 2).get())
    })
    it('should be assosiative', () => {
      const first = new Some(3)
        .flatMap((val) => new Some(val + 2).flatMap(f))
        .get()
      const second = new Some(3)
        .flatMap((val) => new Some(val + 2))
        .flatMap(f)
        .get()
      assert.equal(first, second)
    })
    it('should recognize Some', () => {
      const shouldBeFalse = divide(10, 0)
        .flatMap((res) =>
          new Some(String(res)).flatMap((res) => new Some(res + 'abc'))
        )
        .isSome()
      const shouldBeTrue = divide(10, 2)
        .flatMap((res) =>
          new Some(String(res)).flatMap((res) => new Some(res + 'abc'))
        )
        .isSome()

      assert.equal(shouldBeFalse, false)
      assert.equal(shouldBeTrue, true)
    })
  })
}
