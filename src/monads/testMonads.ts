import { describe, it } from "node:test"
import { None, Some } from "./Maybe"
import { Maybe } from "./Maybe/interface"
import assert from "node:assert"


export const testMonads = () => {
    function divide(devident: number, devisor: number): Maybe<number> {
        return devisor === 0 ? None() : Some(devident / devisor)
    }

    describe('describe block', () => {
        it('should follow left-identity', () => {
            assert.equal(Some(1).flatMap(val => Some(val * 2)).value, Some(1 * 2).value)
        })
    })
    console.log('test1 left-identity: ', Some(1).flatMap(val => Some(val * 2)) === Some(1 * 2))
    console.log('test2 right-identity: ', Some(2).flatMap(val => Some(val)) === Some(2))
    console.log('test3 associativity: ', Some(3).flatMap(val => (Some(val + 2).flatMap(val => Some(val * 2)))) === Some(3).flatMap(val => Some(val + 2)).flatMap(val => Some(val * 2)))

    // console.log(Some(3).flatMap(res => Some(res + 2)).map(res => res * 2))
    // console.log(Some(3).map(res => res + 2).flatMap(res => Some(res * 2)))
    console.log(divide(10, 0).flatMap(res => Some(String(res))))
}


