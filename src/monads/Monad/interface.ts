interface FlatMappable<F extends Monad<any>, A> {
    flatMap(fn: (value: A) => F): F;
}

export interface Monad<A> extends FlatMappable<Monad<A>, A> {
    map: <B>(f: (value: A) => B) => Monad<B>
}


