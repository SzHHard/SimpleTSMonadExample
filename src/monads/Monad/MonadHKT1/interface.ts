import { Identity } from '../../Identity'
import { Maybe } from '../../Maybe'

interface URItoKind1<A> {
  // simple HKT
  // TODO: learn if we can inject [key: values] with import -> namespaces
  Maybe: Maybe<A>
  Identity: Identity<A>
}
type URIS1 = keyof URItoKind1<unknown>
type Kind1<F extends URIS1, A> = URItoKind1<A>[F]

export interface Monad1<M extends URIS1, A> {
  flatMap: <B>(f: (a: A) => Kind1<M, B>) => Kind1<M, B>
}
