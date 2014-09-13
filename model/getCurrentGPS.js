/**
 * Created by pat on 23/08/2014.
 */
//var GPSPoint = new Point();
// Get the current GPS position from the Devices GPS if supported
var gpsPosition, counter = 0;
// This is for windows phones.  Gets past the sandbox.
// browser = new WebBrowser();
// browser.IsGeolocationEnabled = true;
function getLocation() {
    // Check if navigator is supported by the device
    if (navigator.geolocation) {
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

        function onError(error) {
           alert(error.code);
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