/**
 * Created by pat on 23/08/2014.
 */
// Get the current GPS position from the Devices GPS if supported
(function() {
    var counter = 0;
    // Check if navigator is supported by the device
    if (navigator.geolocation) {
        navigator.geolocation.IsGeolocationEnabled = true;

        function onSuccess(position) {
            updateGameCoordinates(position);
        }
        function onError() {
            if (counter == 0) {
                alert("Do you have location services turned on?");
            }
            counter ++;
        }

        if (counter > 1) {
            navigator.geolocation.watchPosition(onSuccess, onError, {
                    enableHighAccuracy: false
                }
            );
        } else {
            navigator.geolocation.watchPosition(onSuccess, onError, {
                    enableHighAccuracy: true
                }
            );
        }
    } else {
        alert("Geolocation is not supported by this browser");
    }
}());