/**
 * Created by pat on 17/09/2014.
 */

TestCase("TestDecodeQRCode", {
    "test DecodeQRCode": function() {
//        var hiddenInput = document.createElement("input");
//        hiddenInput.setAttribute("id", "testFile");
//        hiddenInput.setAttribute("type", "file");
//        hiddenInput.setAttribute("value", "Apple.jpg");
//        hiddenInput.setAttribute("display", "hidden");
//        hiddenInput.onload("load")
//
//        var fileName = document.getElementById("testFile").files[0];
        var fileName = new File("Apple.jpg");
        console.log(fileName);
        var image = new MegaPixImage(fileName);
        console.log(image);

        setTimeout(assertEquals("Apple", decodeImage(image)), 12000);
    }
});