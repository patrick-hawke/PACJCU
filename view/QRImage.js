/**
 * Created by pat on 09/09/2014.
 */
var inputFile = document.getElementById('selectFile');
inputFile.addEventListener('change', loadImage, false);
var filename, imageFile, mpImage, img;

function imageHandler(e2) {
    console.log("imagehandler");
    imageFile = e2.target.result;
    var store = document.getElementById('printImage');
    store.innerHTML='<img src="' + imageFile +'" width="250" height="250" style="border: 1px solid black">';
    var canvas1 = document.getElementById('theCanvas');
//    ctx = canvas1.getContext('2d');

    console.log(imageFile);
    mpImage = new MegaPixImage(imageFile);
    mpImage.render(canvas1, { width: 200, height: 200, orientation: 6});
    console.log(mpImage);
//    img = new Image();
//    img.src = mpImage.srcImage;
//    ctx.drawImage(img, 0,0, canvas1.width, canvas1.height);
//    mpImage.render(canvas1, { width: 2250, height: 2250, orientation: 6});
//    decodeImage();
}

function loadImage(e1) {
    console.log("loadImage");
    filename = e1.target.files[0];
    var fr = new FileReader();
    fr.onload = imageHandler;
    fr.readAsDataURL(filename);
}

function presentDecodeResult(result) {
    console.log("processDecode");
    var presentValue = document.getElementById("QRvalue");
    presentValue.innerHTML = result;
}

function decodeImage() {
    console.log("decodeImage");
    qrcode.callback = presentDecodeResult;
    qrcode.decode(img);
}


///**
//* Created by pat on 09/09/2014.
//*/
//var inputFile = document.getElementById('selectFile');
//inputFile.addEventListener('change', loadImage, false);
//var filename, imageFile, mpImage;
//
//function imageHandler(e2) {
//    console.log("imagehandler");
//    var canvas1 = document.getElementById('theCanvas');
////    ctx = canvas1.getContext('2d');
//    imageFile = e2.target.result;
//    console.log(imageFile);
//    mpImage = new MegaPixImage(imageFile);
//    console.log(mpImage);
//    mpImage.render(canvas1, { width: 2250, height: 2250, orientation: 6});
//    decodeImage();
//}
//
//function loadImage(e1) {
//    console.log("loadImage");
//    filename = e1.target.files[0];
//    var fr = new FileReader();
//    fr.onload = imageHandler;
//    fr.readAsDataURL(filename);
//}
//
//function presentDecodeResult(result) {
//    console.log("processDecode");
//    var presentValue = document.getElementById("QRvalue");
//    presentValue.innerHTML = result;
//}
//
//function decodeImage() {
//    console.log("decodeImage");
//    qrcode.callback = presentDecodeResult;
//    qrcode.decode(mpImage.srcImage);
//}