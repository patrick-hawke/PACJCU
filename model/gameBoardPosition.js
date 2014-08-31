/**
 * Created by pat on 30/08/2014.
 */
var playerCurrentBoardXPos, playerCurrentBoardYPos, boardCentreX, boardCentreY;

function setBoardCentre() {
//    boardGPSCoordinates = getLocation();
    var pos = getLocation();
//    console.log(pos);
    if (pos) {
        boardCentreX = getLocation().coords.latitude;
        boardCentreY = getLocation().coords.longitude;
//        console.log(boardCentreX);
//        console.log(boardCentreY);
    } else {
        console.log("no coordinates");
    }
}

function getPlayerBoardPosition() {
    if (boardCentreX != null && boardCentreY != null) {
        do {
            if (getLocation()) {
                playerCurrentBoardXPos = boardCentreX - getLocation().coords.latitude;
                playerCurrentBoardYPos = boardCentreY - getLocation().coords.longitude;
                return playerCurrentBoardXPos + " , " + playerCurrentBoardYPos;
            }
        } while (!getLocation());
//        var playerGPSCoordinates = getLocation();
    } else {
        return null;
    }
}