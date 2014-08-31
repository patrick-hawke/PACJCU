/**
 * Created by pat on 31/08/2014.
 */
(function() {
    var x = document.getElementById("gpsCoordinates");
    var y = document.getElementById("gameCoordinates");

    // Executes when the page loads
    window.onload = function() {
        setInterval(function () {
            var pos = getLocation();
//            console.log(pos);
            if (pos) {
                x.innerHTML = "Latitude: " + pos.coords.latitude +
                    "<br>Longitude: " + pos.coords.longitude;

                y.innerHTML = getPlayerBoardPosition();
            }
        }, 2000);
     };
}());