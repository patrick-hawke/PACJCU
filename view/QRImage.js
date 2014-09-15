//*
//* Created by pat on 09/09/2014.
//*
var inputFile = document.getElementById('selectFile');
var fileName, mpImg, cnvs, iWidth, iHeight, getReducedImage, presentValue;
var MAXIMAGESIZE = 250;

inputFile.addEventListener('change', imageHandler, false);

function imageHandler(e) {
    fileName = e.target.files[0];
    mpImg = new MegaPixImage(fileName);

    //Insert a delay to wait for asynchronous MegaPixImage
    setTimeout( renderImage, 1000 );
}

function renderImage() {
    if (mpImg.srcImage.width > mpImg.srcImage.height) {
        iWidth = 250;
        iHeight = 250 * mpImg.srcImage.height/mpImg.srcImage.width;
    } else {
        iHeight = 250;
        iWidth = 250 * mpImg.srcImage.width/mpImg.srcImage.height;
    }
    cnvs = document.getElementById('theCanvas');
    mpImg.render(cnvs, { width: iWidth, height: iHeight });
    getReducedImage = cnvs.toDataURL("image/jpg");
    decodeImage();
}

function presentDecodeResult(result) {
    presentValue = document.getElementById("QRvalue");
    presentValue.innerHTML = result;
}

function decodeImage() {
    qrcode.callback = presentDecodeResult;
    qrcode.decode(getReducedImage);
}