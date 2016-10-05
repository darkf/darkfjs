// A set of functions for dealing with containers (objects and arrays)

"use strict";

// Map, over both objects, arrays, and strings.
// Over strings, behaves like concatMap.
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

function flatMap(f, xs) { return flatten(map(f, xs)); }

function itemgetter(prop) {
    return function(obj) { return obj[prop]; };
}

function zeropad(n, length) {
    return (new Array(length).fill("0").join("") + n).slice(-length)
}

// Return a shallow copy of an array or an object
function copy(xs) {
    if(Array.isArray(xs))
        return xs.slice();

    return Object.assign({}, xs);
}
