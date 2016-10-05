// A set of functions for working with 2D vectors (objects with numerical x/y properties)

"use strict";

function vec(x, y) { return {x, y}; }
function vecCopy(v) { return {x: v.x, y: v.y}; }
function vecAdd(a, b) { return {x: a.x + b.x, y: a.y + b.y}; }
function vecSub(a, b) { return {x: a.x - b.x, y: a.y - b.y}; }
function vecMul(a, b) { if(typeof a === "number") a = {x:a, y:a}; return {x:a.x*b.x, y:a.y*b.y}; }
function vecDot(a, b) { return a.x*b.x + a.y*b.y; }
function vecMag(v) { return Math.sqrt(v.x*v.x + v.y*v.y); }
function vecNorm(v) { const mag = vecMag(v); return {x: v.x/mag, y: v.y/mag}; }
function vecPerpindicular(v) { return {x: -v.y, y: v.x}; }
function vecFromAngle(angle) { return {x: Math.cos(radians(angle)), y: Math.sin(radians(angle))}; }
function reflect(v, n) { n = vecNorm(n); return vecSub(v, vecMul(2 * vecDot(v, n), n)); }
function lerp(start, end, t) { return (1 - t)*start + t*end; }
function radians(angle) { return angle * (Math.PI/180); }
function degrees(angle) { return angle * (180/Math.PI); }
function addPolar(pos, angle, magnitude) {
	return {x: pos.x + Math.cos(radians(angle)) * magnitude,
		    y: pos.y + Math.sin(radians(angle)) * magnitude};
}
