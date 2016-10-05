// A set of functions for dealing with rectangles (AABBs)

// Rectangle constructor
function rect(x, y, w, h) { return {x, y, w, h}; }

// Do two rectangles intersect?
function rectsIntersect(a, b) {
  if ((a.y+a.h <= b.y) || (a.y >= b.y+b.h)) return false;
  if ((a.x+a.w <= b.x) || (a.x >= b.x+b.w)) return false;
  return true;
}

// Does a 2D vector intersect with a rectangle?
function vecIntersectsRect(pt, rect) {
    return (pt.x >= rect.x && pt.x <= rect.x+rect.w) &&
           (pt.y >= rect.y && pt.y <= rect.y+rect.h);
}
