/**
 * A simple datatype that stores two arbitrary values.
 */
export default class Pair {

    #first;

    #second;

    /**
     * Static constructor which simply calls <code>new Pair(first, second)</code> and returns its value.
     *
     * @param first - the 'first' component of the new <code>Pair</code>
     * @param second - the 'second' component of the new <code>Pair</code>
     *
     * @return {Pair} a new <code>Pair</code> object with the arguments supplied
     */
    static of(first, second) {
        return new Pair(first, second);
    }

    /**
     * Object constructor.
     *
     * Any values are permitted.
     *
     * @param {*} [first] - the first component
     * @param {*} [second] - the second component
     */
    constructor(first, second) {
        this.#first = first;
        this.#second = second;
    }

    /**
     * Returns the 'first' argument supplied to the constructor.
     *
     * @return {*} the first component
     */
    get first() {
        return this.#first;
    }

    /**
     * Returns the 'second' argument supplied to the constructor.
     *
     * @return {*} the second component
     */
    get second() {
        return this.#second;
    }

    /**
     *'for..of' support. Returns the 'first' and 'second' properties in order.
     *
     * @return {{done: boolean}|{next(): ({done: boolean}), values: *[]}|{done: boolean, value: *}}
     */
    [Symbol.iterator]() {
        return {
            values: [this.#first, this.#second],

            next() {
                if (this.values.length === 0) {
                    return {done: true};
                } else {
                    return {done: false, value: this.values.shift()};
                }
            }
        };
    }

    /**
     * Returns <code>true</code> if 'that' is another <Code>Pair</code> object which has strictly equal pairwise
     * components.
     *
     * @param {*} that
     * @return {boolean} <code>true</code> if 'that' equals this <code>Pair</code>
     */
    equals = (that) => (that instanceof Pair) &&
        this.#first === that.first &&
        this.#second === that.second

    /**
     * Returns a textual representation of this object, namely <code>"Pair(first=<first>, second=<second>)"</code>.
     *
     * @return {string} a <code>string</code> representation of this object
     */
    toString = () => `Pair(first=${this.#first}, second=${this.second})`
}