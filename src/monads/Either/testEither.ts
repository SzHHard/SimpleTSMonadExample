import assert from 'node:assert'
import { Either, Left, Right } from '.'
import { describe, it } from 'node:test'

export const testEither = () => {
  function divide(devident: number, devisor: number): Either<string, number> {
    return devisor === 0
      ? new Left('error 0 division')
      : new Right(devident / devisor)
  }

  describe('Test Either', () => {
    const f = (val: number) => new Right(val * 2)

    it('should follow left-identity', () => {
      const start = 1
      assert.equal(
        new Right(start).flatMap(f).get(),
        new Right(start * 2).get()
      )
    })
    it('should follow right-identity', () => {
      const start = 2
      assert.equal(
        new Right(start).flatMap(f).get(),
        new Right(start * 2).get()
      )
    })
    it('should be assosiative', () => {
      const first = new Right(3)
        .flatMap((val) => new Right(val + 2).flatMap(f))
        .get()
      const second = new Right(3)
        .flatMap((val) => new Right(val + 2))
        .flatMap(f)
        .get()
      assert.equal(first, second)
    })
    it('should recognize Right and Left', () => {
      const left = divide(10, 0).flatMap((res) =>
        new Right(String(res)).flatMap((res) => new Right(res + 'abc'))
      )

      const right = divide(10, 2).flatMap((res) =>
        new Right(String(res)).flatMap((res) => new Right(res + 'abc'))
      )

      assert.equal(Either.isRight(left), false)
      assert.equal(Either.isRight(right), true)
      //   assert.equal(shouldBeTrue, true)
    })
  })
}
