/**
 * Created by pat on 23/08/2014.
 */
// Get the current GPS position from the Devices GPS if supported
(function() {
    var counter = 0;
    // Check if navigator is supported by the device
    if (navigator.geolocation) {
        // Enable geolocation because some devices disable it by default
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
        // Try high accuracy first then fallback to low accuracy
        // Observer to track changes to the GPS position for devices that do not support high accuracy
        if (counter > 1) {
            navigator.geolocation.watchPosition(onSuccess, onError, {
                    enableHighAccuracy: false
                }
            );
        // Observer to track changes to the GPS position for devices that support high accuracy
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