/**
 * Created by pat on 10/10/2014.
 */
var gameCoord = document.getElementById("gameCoordinates");
var gpsCoord = document.getElementById("gpsCoordinates");
var newPlayerPoint = new Point();
var __gpsPosition;
var params;
var destinationCoordsURL = "something.com/somelink";

Object.observe(newPlayerPoint, function() {
    if (gameCoord) {
        gameCoord.innerHTML = newPlayerPoint.toString();
    } else {
        params = "x=" + currentPlayerPoint.x + "&y=" + currentPlayerPoint.y;
        postToGame(params, destinationCoordsURL);
    }
});

function updateGameCoordinates(gpsPosition) {
    __gpsPosition = gpsPosition;

    if (gpsCoord) {
        gpsCoord.innerHTML = "<strong>Latitude: </strong><br/>" + __gpsPosition.coords.latitude +
            "<br/><strong>Longitude: </strong><br/>" + __gpsPosition.coords.longitude +
            "<br/><strong>Accuracy: </strong><br/>" + __gpsPosition.coords.accuracy;
    }

    if (getPlayerBoardPosition(__gpsPosition)) {
        newPlayerPoint.x = getPlayerBoardPosition(__gpsPosition).x;
        newPlayerPoint.y = getPlayerBoardPosition(__gpsPosition).y;
    }
}

function setGameBoardPosition() {
    setBoardCentre(__gpsPosition);
    updateGameCoordinates(__gpsPosition);
}