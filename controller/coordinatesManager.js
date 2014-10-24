/**
 * Created by pat on 10/10/2014.
 */
var gameCoord = document.getElementById("gameCoordinates");
var gpsCoord = document.getElementById("gpsCoordinates");
var newPlayerPoint = new Point();
var __gpsPosition;
var params;
var destinationCoordsURL = "something.com/somelink";

// Observer to monitor changes in the players board position
Object.observe(newPlayerPoint, function() {
    //Present on the screen if the HTML element exists
    if (gameCoord) {
        gameCoord.innerHTML = newPlayerPoint.toString();
    // Or post to the game logic
    } else {
        params = "x=" + currentPlayerPoint.x + "&y=" + currentPlayerPoint.y;
        postToGame(params, destinationCoordsURL);
    }
});

function updateGameCoordinates(gpsPosition) {
    __gpsPosition = gpsPosition;

    //If the HTMl browser element exists then present the GPS coords on the screen
    if (gpsCoord) {
        gpsCoord.innerHTML = "<strong>Latitude: </strong><br/>" + __gpsPosition.coords.latitude +
            "<br/><strong>Longitude: </strong><br/>" + __gpsPosition.coords.longitude +
            "<br/><strong>Accuracy: </strong><br/>" + __gpsPosition.coords.accuracy;
    }
    // Check if the game board has been set and if so update the game coords
    if (getPlayerBoardPosition(__gpsPosition)) {
        newPlayerPoint.x = getPlayerBoardPosition(__gpsPosition).x;
        newPlayerPoint.y = getPlayerBoardPosition(__gpsPosition).y;
    }
}

function setGameBoardPosition() {
    setBoardCentre(__gpsPosition);
    updateGameCoordinates(__gpsPosition);
}