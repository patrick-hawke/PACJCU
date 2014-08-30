/**
 * Created by pat on 31/08/2014.
 */
TestCase("TestGetCurrentGPS", {
    "test gameBoardPosition": function() {

        assertNull(getPlayerBoardPosition());
        setBaordCentre();
        assertNotNull(getPlayerBoardPosition());
    }
});