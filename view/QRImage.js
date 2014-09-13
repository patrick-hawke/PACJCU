//*
//* Created by pat on 09/09/2014.
//*
var inputFile = document.getElementById('selectFile');
var fileName, mpImg, cnvs, iWidth, iHeight, getImage, presentValue, fr;
var MAXIMAGESIZE = 250;

inputFile.addEventListener('change', loadImage, false);

function imageHandler(e2) {
    mpImg = new MegaPixImage(fileName);
    cnvs = document.getElementById('theCanvas');
    //Insert a delay to overcome the asynchronous nature of MegaPixImage
    setTimeout( waitForMegaPix, 1000 );
}

function waitForMegaPix() {
    if (mpImg.srcImage.width > mpImg.srcImage.height) {
        iWidth = 250;
        iHeight = 250 * mpImg.srcImage.height/mpImg.srcImage.width;
    } else {
        iHeight = 250;
        iWidth = 250 * mpImg.srcImage.width/mpImg.srcImage.height;
    }
    mpImg.render(cnvs, { width: iWidth, height: iHeight });
    getImage = cnvs.toDataURL("image/jpg");
    decodeImage();
}

function loadImage(e1) {
    fileName = e1.target.files[0];
    fr = new FileReader();
    fr.onload = imageHandler;
    fr.readAsDataURL(fileName);
}

function presentDecodeResult(result) {
    presentValue = document.getElementById("QRvalue");
    presentValue.innerHTML = result;
}

function decodeImage() {
    qrcode.callback = presentDecodeResult;
    qrcode.decode(getImage);
}