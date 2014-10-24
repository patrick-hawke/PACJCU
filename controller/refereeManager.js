/**
 * Created by pat on 23/10/2014.
 */
var destinationRefereeQRURL = "something.com/somelink";
var QRresult = document.getElementById("QRvalue").value;
//Post the QR Code and GPS coordinates to the game logic
function postQRCoordinates() {
    params = "QRvalue=" + QRresult + "&GPSLat=" + __gpsPosition.coords.latitude + "&GPSLon=" + __gpsPosition.coords.longitude;
    postToGame(params, destinationQRURL);
}