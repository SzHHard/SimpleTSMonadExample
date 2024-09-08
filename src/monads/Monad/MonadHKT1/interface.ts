// interface to inject into

/* inject different interfaces into URItoKind1 using example to avoid direct circular dependencies: 
    declare module '../Monad/MonadHKT1/interface' {
      interface URItoKind1<A> {
        Maybe: Maybe<A>
      }
    } */

type URIS1 = keyof URItoKind1<unknown>
type Kind1<F extends URIS1, A> = URItoKind1<A>[F]

export interface Monad1<M extends URIS1, A> {
  flatMap: <B>(f: (a: A) => Kind1<M, B>) => Kind1<M, B>
}
