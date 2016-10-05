// A set of functions for functions dealing with functions

"use strict";

function compose(f, g) {
	return (function() { return f(g.apply(this, Array.prototype.slice.call(arguments))); }).bind(this);
}
