/**
 * Created by pat on 31/08/2014.
 */
TestCase("TestGameBoardPosition", {
    "test gameBoardPosition": function() {
        assertEquals("Undefined", undefined, getPlayerBoardPosition());
        setBoardCentre();
        assertNotNull(getPlayerBoardPosition());
    }
});