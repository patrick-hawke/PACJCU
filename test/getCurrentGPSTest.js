/**
 * Created by pat on 23/08/2014.
 */
TestCase("TestGetCurrentGPS", {

    "test GetCurrentGPS": function() {
        assertNotNull(getLocation());
    }
});