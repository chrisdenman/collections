import {describe, expect, it} from '@jest/globals';
import Pair from "../src/pair";

describe(
    "Pair Tests",
    () => {
        const FIRST = {first: "first"};
        const SECOND = {second: "second"};
        const PAIR0 = new Pair(FIRST, SECOND);
        const PAIR1 = new Pair(SECOND, FIRST);

        it(
            "That new Pairs with no arguments return undefined for the 'first' property",
            () => expect(new Pair().first).toBe(undefined)
        );

        it(
            "That new Pairs with no arguments return undefined for the 'second' property",
            () => expect(new Pair().second).toBe(undefined)
        );

        it(
            "That the 'first' constructor argument is supplied by the 'first' property",
            () => expect(new Pair(FIRST).first).toBe(FIRST)
        );

        it(
            "That the 'first' constructor argument is supplied by the 'first' property",
            () => expect(new Pair(undefined, SECOND).second).toBe(SECOND)
        );

        it(
            "That Pair.of(first, second) returns objects that equal new Pair(first, second)",
            () => {
                const first = 1;
                const second = "second"
                expect(Pair.of(first, second).equals(new Pair(first, second))).toBe(true);
            }
        );

        it(
            "That we can use for..of to iterate the 'first' and 'second' properties.",
            () => {
                const subject = new Pair(FIRST, SECOND);
                const expectedComponents = [FIRST, SECOND];
                for (let component of subject) {
                    expect(component).toBe(expectedComponents.shift());
                }
            }
        );

        [
            null,
            undefined,
            0,
            BigInt(0),
            "",
            {},
            PAIR1
        ].forEach(
            (that) => {
                const subject = PAIR0;
                it(
                    `That ${subject} does not equal ${that}`,
                    () => expect(subject.equals(that)).not.toBe(true)
                );
            }
        );

        it(
            `That ${PAIR0} does equals ${PAIR0}`,
            () => expect(PAIR0.equals(PAIR0)).toBe(true)
        );
    }
);

