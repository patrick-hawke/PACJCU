//*
//* Created by pat on 09/09/2014.
//*
var inputFile = document.getElementById('selectFile');
var presentValue = document.getElementById("QRvalue");
var fileName, mpImg, cnvs, iWidth, iHeight, getReducedImage, presentValue;
var MAXIMAGESIZE = 250;
var destinationQRURL = "something.com/somelink";

inputFile.addEventListener('change', imageHandler, false);

// Take the selected or captured file and create a Megapixel image
function imageHandler(e) {
    fileName = e.target.files[0];
    mpImg = new MegaPixImage(fileName);
    setTimeout(presentImage, 1000);
}

// Write the image to a canvas at a reduced size then read it back at the reduced size
function presentImage() {
    // Preserve the image width/height ration for the reduced image
    if (mpImg.srcImage.width > mpImg.srcImage.height) {
        iWidth = MAXIMAGESIZE;
        iHeight = MAXIMAGESIZE * mpImg.srcImage.height/mpImg.srcImage.width;
    } else {
        iHeight = MAXIMAGESIZE;
        iWidth = MAXIMAGESIZE * mpImg.srcImage.width/mpImg.srcImage.height;
    }
    cnvs = document.getElementById('theCanvas');
    mpImg.render(cnvs, { width: iWidth, height: iHeight });
    getReducedImage = cnvs.toDataURL("image/jpg");

    // Decode the image and print its value if the HTML element is present
    // otherwise post the value to the game logic
    decodeImage(getReducedImage, function(result) {
        if (presentValue) {
            presentValue.innerHTML = result;
        } else {
            params = "QRvalue=" + result;
            postToGame(params, destinationQRURL);
        }
    });
}