/**
 * Created by pat on 23/08/2014.
 */
//var GPSPoint = new Point();
// Get the current GPS position from the Devices GPS if supported
var gpsPosition;
function getLocation() {
    if (navigator.geolocation) {
        function onSuccess(position) {
            gpsPosition = position;
        }

        // error for phones not supporting gps accuracy
        function tryNoHighAccuracy() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }

        function onError() {
            alert("Do you have location services turned on?");
        }

        navigator.geolocation.getCurrentPosition(onSuccess, tryNoHighAccuracy,{
                timeout: 1000,
                enableHighAccuracy: true,
                maximumAge: 1500
            }
        );
     } else {
        alert("Geolocation is not supported by this browser");
    }
    return gpsPosition;
}