/**
 * Created by pat on 31/08/2014.
 */
(function() {

    // link variables to HTML elements
    var gpsCoord = document.getElementById("gpsCoordinates");
    var gameCoord = document.getElementById("gameCoordinates");

    // Executes when the page loads
    window.onload = function() {
        setInterval(function () {
            var currentGPSPos = getLocation();
            if (currentGPSPos) {
                gpsCoord.innerHTML = "<strong>Latitude: </strong><br/>" + currentGPSPos.coords.latitude +
                    "<br/><strong>Longitude: </strong><br/>" + currentGPSPos.coords.longitude +
                    "<br/><strong>Accuracy: </strong><br/>" + currentGPSPos.coords.accuracy;
            }

            // If board centre has been set, adjust board co-ord as gps moves
            if (getPlayerBoardPosition()) {
                gameCoord.innerHTML = getPlayerBoardPosition();
            }
        }, 2000);
     };
}());