import { Either } from '../../Either'

interface URItoKind2<A, B> {
  Either: Either<A, B>
}
type URIS2 = keyof URItoKind2<unknown, unknown>
type Kind2<F extends URIS2, A, B> = URItoKind2<A, B>[F]

export interface Monad2<M extends URIS2, A, B> {
  flatMap: <D>(f: (a: B) => Kind2<M, A, D>) => URItoKind2<A, D>[M]
}
