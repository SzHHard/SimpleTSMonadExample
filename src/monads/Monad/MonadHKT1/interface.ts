interface URItoKind1<A> { // simple HKT
    'Option': Option<A>
}
type URIS1 = keyof URItoKind1<unknown>
type Kind1<F extends URIS1, A> = URItoKind1<A>[F]

interface Monad1<M extends URIS1, A> {
    flatMap: <B>(f: (a: A) => Kind1<M, B>) => Kind1<M, B>;
}


// type Option<A> = Monad<'Option', A>
export interface Option<A> extends Monad1<'Option', A> {
    get: () => A
    getOrDefault: (defaultValue: A) => A
}


export function Some<A>(value: A): Option<A> {
    return {
        get: () => value,
        getOrDefault: () => value,
        flatMap: f => f(value),
    };
}

export function None<A>(): Option<A> {
    return {
        get: () => <A>null, // TODO: error
        getOrDefault: (defaultValue: A) => defaultValue,
        flatMap: f => None(),
    };
}



