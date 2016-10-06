// A set of functions for working with matrices (2D arrays)

"use strict";

// Construct a new WxH matrix, with an optional initializer (a function X,Y -> value, or just a value.)
// Matrices are indexed as M[y][x]
function newMatrix(width, height, initializer) {
    const matrix = new Array(height);
    for(let row = 0; row < height; row++) {
        matrix[row] = new Array(width);

        if(typeof initializer === "function") {
            for(let col = 0; col < width; col++)
                matrix[row][col] = initializer(col, row);
        }
        else if(initializer !== undefined)
            matrix[row].fill(initializer);
    }
    return matrix;
}

// Index a matrix by a column and a row, with bounds checking.
function matrixGet(matrix, x, y) {
    if(y < 0 || y >= matrix.length)
        throw new RangeError("Tried to access matrix row " + y + ", but it is out of range.");
    if(x < 0 || x >= matrix[0].length)
        throw new RangeError("Tried to access matrix column " + x + ", but it is out of range.");

    return matrix[y][x];
}

function matrixSet(matrix, x, y, value) {
    if(y < 0 || y >= matrix.length)
        throw new RangeError("Tried to set matrix row " + y + ", but it is out of range.");
    if(x < 0 || x >= matrix[0].length)
        throw new RangeError("Tried to set matrix column " + x + ", but it is out of range.");

    return (matrix[y][x] = value);
}

function matrixModify(matrix, x, y, f) {
    return matrixSet(matrix, x, y, f(matrixGet(matrix, x, y)));
}

// Returns all indices of a matrix.
function matrixIndices(matrix) {
    const indices = [];
    for(let y = 0; y < matrix.length; y++) {
        for(let x = 0; x < matrix[0].length; x++)
            indices.push([x, y]);
    }
    return indices;
}

// Returns the [width, height] of the matrix.
function matrixSize(matrix) {
    return [matrix[0].length, matrix.length];
}

// Map over a matrix.
function matrixMap(f, matrix) {
    const size = matrixSize(matrix);
    return newMatrix(size[0], size[1], (x,y) => f(matrix[y][x], x, y));
}

// Create a matrix from a string of lines
function matrixFromString(s, trim) {
    const lines = s.split("\n");
    const matrix = new Array(lines.length);

    for(let row = 0; row < lines.length; row++) {
        let line = lines[row];
        if(trim)
            line = line.trim();
        matrix[row] = line.split("");
    }

    return matrix;
}
