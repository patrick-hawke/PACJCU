//*
//* Created by pat on 09/09/2014.
//*
var inputFile = document.getElementById('selectFile');
var presentValue = document.getElementById("QRvalue");
var fileName, mpImg, cnvs, iWidth, iHeight, getReducedImage, presentValue;
var MAXIMAGESIZE = 250;
var destinationQRURL = "something.com/somelink";

inputFile.addEventListener('change', imageHandler, false);

function imageHandler(e) {
    fileName = e.target.files[0];
    mpImg = new MegaPixImage(fileName);
    setTimeout(presentImage, 1000);
}

function presentImage() {
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

    decodeImage(getReducedImage, function(result) {
        if (presentValue) {
            presentValue.innerHTML = result;
        } else {
            params = "QRvalue=" + result;
            postToGame(params, destinationQRURL);
        }
    });
}