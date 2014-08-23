/**
 * Created by pat on 23/08/2014.
 */
//var GPSPoint = new Point();
// Get the current GPS position from the Devices GPS if supported
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(returnPosition);
    } else {
        console.log("Geolocation is not supported by this browser");
    }
// Takes the position passed to it by getCurrentLocation and returns it
function returnPosition(position) {
//        GPSPoint.x = position.coords.latitude;
//        GPSPoint.y = position.coords.longitude;
    console.log(position);
    return position;

    }
}