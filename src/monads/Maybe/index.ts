import { Maybe } from "./interface";



export function Some<T>(value: T): Maybe<T> {

    return {
        _tag: 'Some',
        value,
        flatMap: f => f(value),
        map: f => Some(f(value))
    };
}

export function None<T>(): Maybe<T> {

    return {
        _tag: 'None',
        value: null,
        flatMap: f => None(),
        map: f => None()
    };
}


