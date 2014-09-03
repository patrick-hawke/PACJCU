/**
 * Created by pat on 30/08/2014.
 */
var playerCurrentBoardXPos, playerCurrentBoardYPos, boardCentreX, boardCentreY,boardCentrePos, playerBoardPos ;
// Get the currnt GPS coordinates and assign them to the game board centre X and Y  Conrdinates
var LATDIVISOR = 0.0000011;
var LONDIVISOR = 0.0000024;

function setBoardCentre() {
    boardCentrePos = getLocation();
    if (boardCentrePos) {
        boardCentreX = boardCentrePos.coords.latitude;
        boardCentreY = boardCentrePos.coords.longitude;
    }
}
// Compare the current GPS coordinates to the Board game centre coordinates
function getPlayerBoardPosition() {
    if (boardCentreX != null && boardCentreY != null) {
        playerBoardPos = getLocation();
        if (playerBoardPos) {
            playerCurrentBoardXPos = ((boardCentreX - playerBoardPos.coords.latitude)/LATDIVISOR).toFixed(0);
            playerCurrentBoardYPos = ((boardCentreY - playerBoardPos.coords.longitude)/LONDIVISOR).toFixed(0);
            return playerCurrentBoardXPos + " , " + playerCurrentBoardYPos;
        }
    }
}