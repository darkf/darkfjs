// A set of functions for dealing with I/O and mutable state

"use strict";

// Random integer in the range [min, max)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Request an XML path and return the result as a DOM object
function requestXML(path, callback) {
	const xhr = new XMLHttpRequest();
	xhr.onload = function() { callback(xhr.responseXML); }
	xhr.open("GET", path, true);
	xhr.send();
}

// Request a JSON path and return the result as a JS object
function requestJSON(path, callback) {
	const xhr = new XMLHttpRequest();
	xhr.onload = function() { callback(JSON.parse(xhr.responseText)); }
	xhr.open("GET", path, true);
	xhr.send();
}
