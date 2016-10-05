// A set of functions for dealing with containers (objects and arrays)

"use strict";

// Map, over both objects, arrays, and strings.
// Over strings, behaves like flatMap.
function map(f, xs) {
    if(typeof xs === "string")
        return map(f, xs.split("")).join("");
    if(Array.isArray(xs))
        return xs.map(f);
    if(typeof xs === "object") {
        const r = {};
        for(const prop in xs) {
            r[prop] = f(xs[prop], prop);
        }
        return r;
    }

    throw new TypeError("map expected a container, got " + xs);
}

// Map over keys of an object
function mapKeys(f, obj) {
    const r = {};
    for(const prop in obj)
        r[f(prop)] = obj[prop];
    return r;
}

// Flatten an array
function flatten(xs) {
    return [].concat.apply([], xs);
}

// Flatten and map over an array
function flatMap(f, xs) { return flatten(map(f, xs)); }

// Returns a function obtaining the property `prop` from the object passed in.
// Useful for using in conjunction with `map` -- e.g. map(itemgetter('name'), people)
function itemgetter(prop) {
    return function(obj) { return obj[prop]; };
}

// Left-pads a string representing an integer `n` with zeroes, to fit `length`.
function zeropad(n, length) {
    return (new Array(length).fill("0").join("") + n).slice(-length)
}

// Return a shallow copy of an array or an object
function copy(xs) {
    if(Array.isArray(xs))
        return xs.slice();

    return Object.assign({}, xs);
}

// Give the range [start, end) in increments of `step`.
// If only one argument is given, it is assumed to be `end`.
function range(start, end, step) {
    if(end === undefined) {
        end = start;
        start = 0;
    }

    step = step || 1;

    const r = [];
    for(let i = start; i < end; i += step)
        r.push(i);
    return r;
}
