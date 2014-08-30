/**
 * Created by pat on 30/08/2014.
 */
var playerCurrentBoardXPos, playerCurrentBoardYPos, boardCentreX, boardCentreY;

function setBoardCentre() {
//    boardGPSCoordinates = getLocation();
    boardCentreX = getLocation().coords.latitude;
    boardCentreY = getLocation().coords.longitude;
}

function getPlayerBoardPosition() {
    if (boardCentreX != null && boardCentreY != null) {
//        var playerGPSCoordinates = getLocation();
        playerCurrentBoardXPos = boardCentreX + getLocation().coords.latitude;
        playerCurrentBoardYPos = boardCentreY - getLocation().coords.longitude;
        Alert(playerCurrentBoardXPos + " , " + playerCurrentBoardYPos);
        return playerCurrentBoardXPos + "," + playerCurrentBoardYPos;
    } else {
        return null;
    }
}