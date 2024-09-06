import { Monad } from "../Monad/interface"

export interface Maybe<A> extends Monad<A> {
    _tag: 'None' | 'Some'
    value: A | null,
    flatMap: <B>(f: (value: A) => Maybe<B>) => Maybe<B>
    map: <B>(f: (value: A) => B) => Maybe<B>
}


