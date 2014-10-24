/**
 * Created by pat on 24/09/2014.
 */
function Point(x,y){
    this.x = x;
    this.y = y;
    // Check that this point is equal to another point in value.
    this.equals = function(point){
        if((point.x === x) && (point.y === y)){
            return true;
        } else {
            return false;
        }
    }
    // Returns a string that contains the values of the x and y coordinates.
    this.toString = function() {
        return '(x=' + this.x + ', y=' + this.y + ')';
    }
}