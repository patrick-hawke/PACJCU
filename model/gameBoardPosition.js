/**
 * Created by pat on 30/08/2014.
 */
var playerCurrentBoardXPos, playerCurrentBoardYPos, boardCentreX, boardCentreY,boardCentrePos, playerBoardPos ;
// Get the current GPS coordinates and assign them to the game board centre X and Y  Coordinates
var LATDIVISOR = 0.0000292;
var LONDIVISOR = 0.0000477;

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
            playerCurrentBoardXPos = ((boardCentreX - playerBoardPos.coords.longitude)/LONDIVISOR).toFixed(0);
            playerCurrentBoardYPos = ((boardCentreY - playerBoardPos.coords.latitude)/LATDIVISOR).toFixed(0);
//            playerCurrentBoardXPos = ((boardCentreX - playerBoardPos.coords.longitude);
//            playerCurrentBoardYPos = ((boardCentreY - playerBoardPos.coords.latitude);

            return playerCurrentBoardXPos + " , " + playerCurrentBoardYPos;
        }
    }
}