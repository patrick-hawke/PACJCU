/**
 * Created by pat on 23/08/2014.
 */
//var GPSPoint = new Point();
// Get the current GPS position from the Devices GPS if supported
var gpsPosition, counter = 0;
function getLocation() {
    if (navigator.geolocation) {
        function onSuccess(position) {
            gpsPosition = position;
        }

        // error for phones not supporting gps accuracy
        function tryNoHighAccuracy(error) {
            // alert(error.code);
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }

        function onError(error) {
           // alert(error.code);
            if (counter == 0) {
                alert("Do you have location services turned on?");
                counter ++;
            }

        }

        navigator.geolocation.getCurrentPosition(onSuccess, tryNoHighAccuracy, {
                timeout: 2000,
                enableHighAccuracy: true,
                maximumAge: 3000
            }
        );
     } else {
        alert("Geolocation is not supported by this browser");
    }
    return gpsPosition;
}