import { Monad } from "../Monad/interface"

export interface Maybe<T> extends Monad<T, Maybe<T>> {
    _tag: 'None' | 'Some'
    value: T | null,
    flatMap: <R>(f: (value: T) => Maybe<R>) => Maybe<R>
    map: <R>(f: (value: T) => R) => Maybe<R>
}
