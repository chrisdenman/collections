import Assertions from "assertions";
import Pair from "./pair";

/**
 * Returns <code>true</code> if 'set' contains all the values provided by the <code>Iterable</code> 'values'.
 *
 * @param {Set} set - the <code>Set</code> to test
 * @param {Iterable} values - an <code>Iterable</code> collection of values
 *
 * @return <code>false</code> if 'set' contains a value which is not provided by 'values', otherwise <code>true</code>
 */
const hasAll = (set, values) => {
    let result = true;
    for (let value of values) {
        result &&= set.has(value)
    }

    return result;
}

/**
 * Makes 'set' immutable by replacing the 'add', 'delete' & 'clear' functions with a no-operation function and then
 * freezes and returns it.
 *
 * @param {Set} set the collection to make immutable
 *
 * @return {Set} the 'set' argument, but now immutable.
 *
 * @throws Error if 'set' is not a <code>Set</code>
 */
function makeImmutableSet(set = new Set()) {
    Assertions.isInstanceOf(set, Set);
    return Object.freeze(setProperties(set, ['add', 'delete', 'clear'], NOP));
}

/**
 * Sets properties for a given object to 'value'.
 *
 * @param {Object} target - the object to modify
 * @param {Iterable<*>} propertyNames - the property names to modify
 * @param {*} value - the property value to assign
 *
 * @return {Object} target - the 'target' argument passed in
 */
function setProperties(target, propertyNames, value) {
    for (let propertyName of propertyNames) {
        target[propertyName] = value;
    }
    return target;
}

/**
 * Makes 'map' immutable by replacing the 'set', 'delete' & 'clear' functions with a no-operation function and then
 * freezes and returns it.
 *
 * @param {Map} map the collection to make immutable
 *
 * @return {Map} the 'map' argument, but now immutable.
 *
 * @throws Error if 'map' is not a <code>Map</code>
 */
function makeImmutableMap(map = new Map()) {
    Assertions.isInstanceOf(map, Map);
    return Object.freeze(setProperties(map, ['set', 'delete', 'clear'], NOP));
}

/**
 * @type {function}
 */
const NOP = Object.freeze(() => {});

/**
 * @type {Set}
 */
const IMMUTABLE_EMPTY_SET = makeImmutableSet();

/**
 * @type {Map}
 */
const IMMUTABLE_EMPTY_MAP = makeImmutableMap();

export {Pair, hasAll, makeImmutableSet, IMMUTABLE_EMPTY_SET, makeImmutableMap, IMMUTABLE_EMPTY_MAP}
