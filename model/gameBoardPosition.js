/**
 * Created by pat on 30/08/2014.
 */
var boardCentreX, boardCentreY,boardCentrePos, playerBoardPos ;
// The divisors adjust the coordinates for a 5 metre cell
var LATDIVISOR = 0.0000292;
var LONDIVISOR = 0.0000477;
var gamePoint = new Point();

function clearGameBoardPosition() {
    boardCentreX = null;
    boardCentreY = null;
}

// Get the current GPS coordinates and assign them to the game board centre X and Y  Coordinates
function setBoardCentre() {
    boardCentrePos = getLocation();
    if (boardCentrePos) {
        boardCentreX = boardCentrePos.coords.longitude;
        boardCentreY = boardCentrePos.coords.latitude;
    }
}
// Compare the current GPS coordinates to the Board game centre coordinates
function getPlayerBoardPosition() {
    if (boardCentreX != null && boardCentreY != null) {
        playerBoardPos = getLocation();
        if (playerBoardPos) {

            gamePoint.x = ((boardCentreX - playerBoardPos.coords.longitude)/LONDIVISOR).toFixed(0);
            gamePoint.y = ((boardCentreY - playerBoardPos.coords.latitude)/LATDIVISOR).toFixed(0);

            return gamePoint.toString();
        }
    }
}
