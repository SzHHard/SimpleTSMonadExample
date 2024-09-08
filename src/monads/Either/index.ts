import { Monad2 } from '../Monad/MonadHKT2/interface'

export abstract class Either<A, B> implements Monad2<'Either', A, B> {
  protected readonly value: A | B

  get() {
    return this.value
  }

  static isRight<A, B>(value: Either<A, B>): value is Right<B> {
    return value instanceof Right
  }

  constructor(value: A | B) {
    this.value = value
  }

  abstract flatMap<C>(f: (a: B) => Either<A, C>): Either<A, C>
}

export class Right<B> extends Either<never, B> {
  constructor(value: B) {
    super(value)
  }

  flatMap<C>(f: (a: B) => Either<never, C>): Right<C> {
    return f(this.value as B)
  }
}

export class Left<A, B> extends Either<A, B> {
  protected readonly value: A

  constructor(value: A) {
    super(value)
    this.value = value
  }

  flatMap<C>(): Left<A, C> {
    return new Left<A, C>(this.value)
  }
}
