import { describe, it } from "node:test"
import { None, Some } from "./Maybe"
import { Maybe } from "./Maybe/interface"
import assert from "node:assert"


export const testMonads = () => {
    function divide(devident: number, devisor: number): Maybe<number> {
        return devisor === 0 ? None() : Some(devident / devisor)
    }

    describe('Check monadic laws', () => {
        const f = (val: number) => Some(val * 2)

        it('should follow left-identity', () => {
            const start = 1
            assert.equal(Some(start).flatMap(f).value, Some(start * 2).value)
        })
        it('should follow right-identity', () => {
            const start = 2
            assert.equal(Some(start).flatMap(f).value, Some(start * 2).value)
        })
        it('should be assosiative', () => {

            const first = Some(3).flatMap(val => (Some(val + 2).flatMap(f))).value
            const second = Some(3).flatMap(val => Some(val + 2)).flatMap(f).value
            assert.equal(first, second)
        })
    })



    console.log(divide(10, 0).flatMap(res => Some(String(res))).value)
}


