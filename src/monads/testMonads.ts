import { describe, it } from "node:test"

import assert from "node:assert"
import { None, Option, Some } from "./Monad/MonadHKT1/interface"


export const testMonads = () => {
    function divide(devident: number, devisor: number): Option<number> {
        return devisor === 0 ? None() : Some(devident / devisor)
    }

    describe('Check monadic laws', () => {
        const f = (val: number) => Some(val * 2)

        it('should follow left-identity', () => {
            const start = 1
            assert.equal(Some(start).flatMap(f).get(), Some(start * 2).get())
        })
        it('should follow right-identity', () => {
            const start = 2
            assert.equal(Some(start).flatMap(f).get(), Some(start * 2).get())
        })
        it('should be assosiative', () => {

            const first = Some(3).flatMap(val => (Some(val + 2).flatMap(f))).get()
            const second = Some(3).flatMap(val => Some(val + 2)).flatMap(f).get()
            assert.equal(first, second)
        })
    })


    console.log(divide(10, 0).flatMap(res => Some(String(res))).get())
    console.log(divide(10, 2).flatMap(res => Some(String(res))).get())
}


