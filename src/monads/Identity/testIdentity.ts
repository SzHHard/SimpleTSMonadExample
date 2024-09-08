import { describe, it } from 'node:test'

import assert from 'node:assert'
import { Identity } from '.'

export const testIdentity = () => {
  describe('Test Option', () => {
    const f = (val: number) => new Identity(val * 2)

    it('should follow left-identity', () => {
      const start = 1
      assert.equal(
        new Identity(start).flatMap(f).get(),
        new Identity(start * 2).get()
      )
    })
    it('should follow right-identity', () => {
      const start = 2
      assert.equal(
        new Identity(start).flatMap(f).get(),
        new Identity(start * 2).get()
      )
    })
    it('should be assosiative', () => {
      const first = new Identity(3)
        .flatMap((val) => new Identity(val + 2).flatMap(f))
        .get()
      const second = new Identity(3)
        .flatMap((val) => new Identity(val + 2))
        .flatMap(f)
        .get()
      assert.equal(first, second)
    })
  })
}
