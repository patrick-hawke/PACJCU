/**
 * Created by pat on 17/09/2014.
 */

TestCase("TestDecodeQRCode", {
    "test DecodeQRCode": function() {
        var image = new MegaPixImage("/test/Apple.jpg");
        setTimeout(assertEquals("Apple", decodeImage(image)), 10000);
    }
});