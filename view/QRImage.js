//*
//* Created by pat on 09/09/2014.
//*
var inputFile = document.getElementById('selectFile');
var fileName, mpImg, cnvs, iWidth, iHeight, getReducedImage, presentValue;
var MAXIMAGESIZE = 250;

inputFile.addEventListener('change', imageHandler, false);

function imageHandler(e) {
    fileName = e.target.files[0];
    console.log(fileName);

    mpImg = new MegaPixImage(fileName);
 //   callback(mpImg);
//    mpImg.onload(renderImage());
    setTimeout(renderImage, 1000);
}

function renderImage() {
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
    decodeImage(getReducedImage);
}