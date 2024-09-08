// interface URItoKind2<A, B> {
//     'Either': Either<A, B>
// }
// type URIS2 = keyof URItoKind2<unknown, unknown>

// interface Monad2<M extends URIS2, A, B> {
//     flatMap: <C>(f: (a: A) => URItoKind2<C>[M]) => URItoKind2<C>[M];
// }

// interface Either<A, B> extends Monad<'Either', A, B> {

// }
