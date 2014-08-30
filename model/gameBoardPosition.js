/**
 * Created by pat on 30/08/2014.
 */
var playerCurrentBoardXPosition, playerCurrentBoardYPosition, boardCentreX, boardCentreY;

function setBoardCentre() {
    boardCentreX = returnGPSPosition().coords.lattitude;
    boardCentreY = returnGPSPosition().coords.longitude;
}

function getPlayerBoardPosition() {
    playerCurrentBoardXPosition = boardCentreX + returnGPSPosition().coords.lattitude;
    playerCurrentBoardYPosition = boardCentreY - returnGPSPosition().coords.longitude;
    Alert(playerCurrentBoardXPosition + " , " + playerCurrentBoardYPosition);
    return playerCurrentBoardXPosition + " , " + playerCurrentBoardYPosition;
}