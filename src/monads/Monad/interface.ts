export interface Monad<T> {
    flatMap: <R>(f: (value: T) => Monad<R>) => Monad<R>
    map: <R>(f: (value: T) => R) => Monad<R>
}


// export interface HKT<F, A> { // Higher kinded type for extending Monad behavior
//     readonly _URI: F;
//     readonly _A: A;
// }

// export interface Monad<T, ConcreteModanicWrapper> {
//     flatMap: <R>(f: (value: T) => HKT<ConcreteModanicWrapper, R>) => HKT<ConcreteModanicWrapper, R>
//     // map: <R>(f: (value: T) => R) => Monad<R>
// }