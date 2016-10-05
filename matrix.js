// A set of functions for working with matrices (2D arrays)

"use strict";

// Construct a new NxM matrix, with an optional initializer (a function X,Y -> value, or just a value.)
// Matrices are indexed as M[row][col]
function newMatrix(rows, cols, initializer) {
    const matrix = new Array(rows);
    for(let row = 0; row < rows; row++) {
        matrix[row] = new Array(cols);

        if(typeof initializer === "function") {
            for(let col = 0; col < cols; col++)
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
