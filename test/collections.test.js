import {describe, expect, it} from '@jest/globals';
import {
    hasAll,
    IMMUTABLE_EMPTY_MAP as IEM,
    IMMUTABLE_EMPTY_SET as IES,
    makeImmutableMap,
    makeImmutableSet
} from "../src/collections.js";

describe(
    "Immutable Empty Set Tests",
    () => {
        it(
            "That it is empty",
            () => expect(IES.size).toBe(0)
        );

        it(
            "That it is frozen",
            () => {
                expect(Object.isFrozen(IES)).toBe(true)
            }
        )

        it(
            "That adding a value has no effect",
            () => {
                IES.add(0);
                expect(IES.size).toBe(0);
            }
        )
    }
);

describe(
    "Make Immutable Set Tests",
    () => {
        const element = {};
        const subject = makeImmutableSet(new Set([element]));
        const EXPECTED_SIZE = 1;

        it(
            "That our subject has size 1",
            () => expect(subject.size).toBe(EXPECTED_SIZE)
        );

        it(
            "That it is frozen",
            () => expect(Object.isFrozen(subject)).toBe(true)
        );

        it(
            "That adding a value has no effect",
            () => {
                subject.add({});
                expect(subject.size).toBe(EXPECTED_SIZE);
            }
        );

        it(
            "That delete has no effect",
            () => {
                subject.delete(element);
                expect(subject.size).toBe(EXPECTED_SIZE);
            }
        );

        it(
            "That clearing has no effect",
            () => {
                subject.clear();
                expect(subject.size).toBe(EXPECTED_SIZE);
            }
        );
    }
);

describe(
    "hasAll...",
    () => {

        it.each`
        values                | testValues            
        ${[]}                 | ${[]}                 
        ${[1]}                | ${[]}                 
        ${[1]}                | ${[1]}                
        ${[1]}                | ${[1, 1]}                
        ${[1, 2]}             | ${[2, 2]}                
        ${[1, 2]}             | ${[2, 1]}
        `(
            `Returns 'true' for positive cases`,
            ({values, testValues}) =>
                expect(hasAll(new Set(values), testValues)).toBe(true)
        );

        it.each`
        values                | testValues      
        ${[]}                 | ${[1]}           
        ${[1]}                | ${[2]}           
        ${[1]}                | ${[1, 2]}
        `(
            `Returns 'false' for negative cases`,
            ({values, testValues}) =>
                expect(hasAll(new Set(values), testValues)).toBe(false));
    }
);

describe(
    "Immutable Empty Map Tests",
    () => {
        it(
            "That it is empty",
            () => expect(IEM.size).toBe(0)
        );

        it(
            "That it is frozen",
            () => {
                expect(Object.isFrozen(IEM)).toBe(true)
            }
        )

        it(
            "That adding a value has no effect",
            () => {
                IEM.set({}, {});
                expect(IEM.size).toBe(0)
            }
        )
    }
);

describe(
    "Make Immutable Map Tests",
    () => {
        const key = {};
        const value = {};
        const subject = makeImmutableMap(new Map([[key, value]]));
        const EXPECTED_SIZE = 1;

        it(
            "That our subject has size 1",
            () => expect(subject.size).toBe(EXPECTED_SIZE)
        );

        it(
            "That it is frozen",
            () => expect(Object.isFrozen(subject)).toBe(true)
        );

        it(
            "That adding a mapping has no effect",
            () => {
                subject.set({}, {});
                expect(subject.size).toBe(EXPECTED_SIZE);
            }
        );

        it(
            "That delete has no effect",
            () => {
                subject.delete(key);
                expect(subject.size).toBe(EXPECTED_SIZE);
            }
        );

        it(
            "That clear has no effect",
            () => {
                subject.clear();
                expect(subject.size).toBe(EXPECTED_SIZE);
            }
        );
    }
);