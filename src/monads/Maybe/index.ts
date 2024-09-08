import { Monad1 } from '../Monad/MonadHKT1/interface'

declare module '../Monad/MonadHKT1/interface' {
  interface URItoKind1<A> {
    Maybe: Maybe<A>
  }
}

export abstract class Maybe<A> implements Monad1<'Maybe', A> {
  abstract get(): A | null
  abstract getOrDefault(defaultValue: A): A
  abstract flatMap<B>(f: (a: A) => Maybe<B>): Maybe<B>
  abstract isSome(): boolean

  static of<I>(value: I): Maybe<I> {
    if (typeof value !== 'undefined' && value !== null) {
      return new Some<I>(value)
    }
    return new None()
  }
}

export class Some<A> extends Maybe<A> {
  private readonly value: A

  constructor(value: A) {
    // TODO: try private constructor with direct call to Some() instead of new Some(). When attempt - don't forget to bind the context when assigning Some() call
    super()
    this.value = value
  }

  isSome() {
    return true
  }
  get() {
    return this.value
  }

  getOrDefault() {
    return this.value
  }
  flatMap<B>(f: (a: A) => Maybe<B>): Maybe<B> {
    return f(this.value)
  }
}

export class None<A> extends Maybe<A> {
  constructor() {
    super()
  }
  isSome(): boolean {
    return false
  }
  get(): null {
    return null
  }
  getOrDefault(defaultValue: A) {
    return defaultValue
  }
  flatMap<B>(): Maybe<B> {
    return new None()
  }
}
