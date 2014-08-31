/**
 * Created by pat on 30/08/2014.
 */
var playerCurrentBoardXPos, playerCurrentBoardYPos, boardCentreX, boardCentreY,boardCentrePos, playerBoardPos ;
// Get the currnt GPS coordinates and assign them to the game board centre X and Y  Conrdinates
function setBoardCentre() {
 //   do {
        boardCentrePos = getLocation();
        if (boardCentrePos) {
            boardCentreX = boardCentrePos.coords.latitude;
            boardCentreY = boardCentrePos.coords.longitude;
        }
//    } while (!boardCentrePos);
}
// Compare the current GPS coordinates to the Board game centre coordinates
function getPlayerBoardPosition() {
    if (boardCentreX != null && boardCentreY != null) {
//        do {
            playerBoardPos = getLocation();
            if (playerBoardPos) {
                playerCurrentBoardXPos = boardCentreX - playerBoardPos.coords.latitude;
                playerCurrentBoardYPos = boardCentreY - playerBoardPos.coords.longitude;
                return playerCurrentBoardXPos + " , " + playerCurrentBoardYPos;
            }
//        } while (!playerBoardPos);
    }
}