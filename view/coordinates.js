/**
 * Created by pat on 31/08/2014.
 */
(function() {
    var x = document.getElementById("gpsCoordinates");
    var y = document.getElementById("gameCoordinates");

    // Executes when the page loads
    window.onload = function() {
        setInterval(function () {
            x.innerHTML = "Latitude = " + getLocation().coords.latitude +
            "<br/> Longitude = " + getLocation().coords.longitude;

            y.innerHTML = getPlayerBoardPosition();

        }, 2000);
     };


}());