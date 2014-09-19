/**
 * Created by pat on 19/09/2014.
 */
//
//      cove.geom.Point - 2011 May 10th
//
//      The Point object represents a location in a two-dimensional coordinate system, where x
//      represents the horizontal axis and y represents the vertical axis.
//
//-------------------------------------------------------------------------------------------------

var Point = cove.geom.Point = Class.extend({

    init: function(x, y) {
        this.x = isNaN(x) ? 0 : x;
        this.y = isNaN(y) ? 0 : y;
    },


//      Public properties
//-------------------------------------------------------------------------------------------------

    // The length of the line segment from (0,0) to this point.
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },


//      Public methods
//-------------------------------------------------------------------------------------------------

    // Adds the coordinates of another point to the coordinates of this point to create a new point.
    add: function(p) {
        if(p instanceof Point)
            return new Point(
                    this.x + p.x,
                    this.y + p.y
            );
    },

    // Creates a copy of this Point object.
    clone: function() {
        return new Point(this.x, this.y);
    },

    // Determines whether two points are equal. Two points are equal if they have the same x and y values.
    equals: function(p) {
        return p instanceof Point && (
            this.x == p.x &&
            this.y == p.y
            );
    },

    // Scales the line segment between (0,0) and the current point to a set length.
    normalize: function(len) {
        if(!isNaN(len)) {
            var norm = Math.sqrt(this.x * this.x + this.y * this.y);
            if(norm != 0) {
                this.x = len * this.x / norm;
                this.y = len * this.y / norm;
            }
        }
    },

    // Offsets the Point object by the specified amount.
    offset: function(dx, dy) {
        if(!isNaN(dx)) this.x += dx;
        if(!isNaN(dy)) this.y += dy;
    },

    // Subtracts the coordinates of another point from the coordinates of this point to create a new point.
    subtract: function(p) {
        if(p instanceof Point)
            return new Point(
                    this.x - p.x,
                    this.y - p.y
            );
    },

    // Returns a string that contains the values of the x and y coordinates.
    toString: function() {
        return '(x=' + this.x + ', y=' + this.y + ')';
    }

});


//      Static methods
//-------------------------------------------------------------------------------------------------

// Returns the distance between pt1 and pt2.
Point.distance = function(p1, p2) {
    if(p1 instanceof Point && p2 instanceof Point) {
        var dx = p2.x - p1.x,
            dy = p2.y - p1.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
};

// Determines a point between two specified points based on a scale.
Point.interpolate = function(p1, p2, f) {
    if(p1 instanceof Point && p2 instanceof Point && !isNaN(f)) {
        // Distance is calculated the opposite way as to
        // Point.distance() because the scale (f) is reversed.
        var x = (p1.x - p2.x) * f,
            y = (p1.y - p2.y) * f;
        return new Point(p2.x + x, p2.y + y);
    }
};

// Converts a pair of polar coordinates to a Cartesian point coordinate.
Point.polar = function(len, angle) {
    if(!isNaN(len) && !isNaN(angle))
        return new Point(
                len * Math.cos(angle),
                len * Math.sin(angle)
        );
};