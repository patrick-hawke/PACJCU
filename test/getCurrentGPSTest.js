/**
 * Created by pat on 23/08/2014.
 */
TestCase("TestGetCurrentGPS", {
    "test GetCurrentGPS": function() {
        console.log(getLocation());
        assertNotNull(getLocation());
    }
});