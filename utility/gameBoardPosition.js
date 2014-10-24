/**
 * Created by pat on 30/08/2014.
 */
var boardCentreX, boardCentreY;
// The divisors adjust the coordinates for a 5 metre cell
var LATDIVISOR = -0.0000292;
var LONDIVISOR = -0.0000477;
var playerPoint = new Point();

function clearGameBoardPosition() {
    boardCentreX = null;
    boardCentreY = null;
}

// Get the current GPS coordinates and assign them to the game board centre X and Y Coordinates
function setBoardCentre(gpsPosition) {
    boardCentreX = gpsPosition.coords.longitude;
    boardCentreY = gpsPosition.coords.latitude;
}
// Compare the current GPS coordinates to the Board game centre coordinates to
// determine the current game x,y coordinates
function getPlayerBoardPosition(gpsPosition) {
    // Make sure the game board position has been set
    if (boardCentreX != null && boardCentreY != null) {
        playerPoint.x = ((boardCentreX - gpsPosition.coords.longitude)/LONDIVISOR).toFixed(0);
        playerPoint.y = ((boardCentreY - gpsPosition.coords.latitude)/LATDIVISOR).toFixed(0);

        return playerPoint;
    }
}