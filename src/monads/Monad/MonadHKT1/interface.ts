interface URItoKind1<A> { // simple HKT
    'Maybe': Maybe<A>
}
type URIS1 = keyof URItoKind1<unknown>
type Kind1<F extends URIS1, A> = URItoKind1<A>[F]

interface Monad1<M extends URIS1, A> {
    flatMap: <B>(f: (a: A) => Kind1<M, B>) => Kind1<M, B>;
}


// type Maybe<A> = Monad<'Maybe', A>
export abstract class Maybe<A> implements Monad1<'Maybe', A> {
    abstract get(): A | null
    abstract getOrDefault(defaultValue: A): A
    abstract flatMap<B>(f: (a: A) => Maybe<B>): Maybe<B>;

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
        super()
        this.value = value
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
    get(): null {
        return null
    }
    getOrDefault(defaultValue: A) {
        return defaultValue
    }
    flatMap<B>(f: (a: A) => Maybe<B>): Maybe<B> {
        return new None()
    }
}





