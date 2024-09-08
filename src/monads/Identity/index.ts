import { Monad1 } from '../Monad/MonadHKT1/interface'

declare module '../Monad/MonadHKT1/interface' {
  interface URItoKind1<A> {
    Identity: Identity<A>
  }
}

export class Identity<A> implements Monad1<'Identity', A> {
  value: A

  constructor(value: A) {
    this.value = value
  }

  get() {
    return this.value
  }

  flatMap<B>(f: (value: A) => Identity<B>) {
    return f(this.value)
  }
}
