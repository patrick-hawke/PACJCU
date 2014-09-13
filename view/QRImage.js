//*
//* Created by pat on 09/09/2014.
//*
var inputFile = document.getElementById('selectFile');
inputFile.addEventListener('change', loadImage, false);
var fileName, img, mpImg, cnvs, compressedImage, outputFormat = "jpg";

var MAXIMAGESIZE = 250, iWidth, iHeight, getImage, ctx;

function imageHandler(e2) {
    console.log("imagehandler");
    mpImg = new MegaPixImage(fileName);
//    img = e2.target.result;
//    var rawImg = document.getElementById('printImage');
//    rawImg.src = img;
//    rawImg.innerHTML = '<img src="' + img + '" width="250" height="250" style="border: 1px solid black">';
    cnvs = document.getElementById('theCanvas');
    ctx = cnvs.getContext("2d");
    console.log(fileName);
    console.log(mpImg);
    console.log(mpImg.srcImage.width);
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
    console.log(iWidth + " " + iHeight);
    mpImg.render(cnvs, { width: iWidth, height: iHeight });
    getImage = cnvs.toDataURL("image/jpg");
    decodeImage();
}

function loadImage(e1) {
    console.log("loadImage");
    fileName = e1.target.files[0];
    var fr = new FileReader();
    fr.onload = imageHandler;
    fr.readAsDataURL(fileName);
}

function presentDecodeResult(result) {
    console.log("processDecode");
    var presentValue = document.getElementById("QRvalue");
    presentValue.innerHTML = result;
}

function decodeImage() {
    console.log("decodeImage");
    console.log(getImage);
    qrcode.callback = presentDecodeResult;
    qrcode.decode(getImage);
}