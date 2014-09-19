/**
 * Created by pat on 23/08/2014.
 */
//var GPSPoint = new Point();
// Get the current GPS position from the Devices GPS if supported
var gpsPosition, counter = 0;
function getLocation() {
    // Check if navigator is supported by the device
    if (navigator.geolocation) {
        navigator.geolocation.IsGeolocationEnabled = true;
        function onSuccess(position) {
            gpsPosition = position;
        }

        if (counter > 1) {
            navigator.geolocation.getCurrentPosition(onSuccess, onError, {
                enableHighAccuracy: false
                }
            );
        } else {
            navigator.geolocation.getCurrentPosition(onSuccess, onError, {
                enableHighAccuracy: true
                }
            );
        }

        function onError() {
            if (counter == 0) {
                alert("Do you have location services turned on?");
            }
            counter ++;
        }

     } else {
        alert("Geolocation is not supported by this browser");
    }
    return gpsPosition;
}