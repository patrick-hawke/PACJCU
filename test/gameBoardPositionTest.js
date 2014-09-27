/**
 * Created by pat on 31/08/2014.
 */
TestCase("TestGameBoardPosition", {
    "test gameBoardPosition": function() {
        clearGameBoardPosition();
        assertEquals(undefined, getPlayerBoardPosition());
        setBoardCentre();
        assertNotNull(getPlayerBoardPosition());
    }
});