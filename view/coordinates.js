/**
 * Created by pat on 31/08/2014.
 */
(function() {
    var x = document.getElementById("gpsCoordinates");
    var y = document.getElementById("gameCoordinates");

    // Executes when the page loads
    window.onload = function() {
        setInterval(function () {
            var currentGPSPos = getLocation();
            if (currentGPSPos) {
                x.innerHTML = "Latitude: " + currentGPSPos.coords.latitude +
                    "<br>Longitude: " + currentGPSPos.coords.longitude;
            }
            if (getPlayerBoardPosition()) {
                y.innerHTML = getPlayerBoardPosition();
            }
        }, 2000);
     };
}());