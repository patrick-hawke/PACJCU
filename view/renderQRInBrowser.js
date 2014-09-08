var filename;
var imageFile;

function imageHandler(e2) { 
console.log("imagehandler");
  var store = document.getElementById('printImage');
//  store.innerHTML='<img src="' + e2.target.result +'" width="250" height="250" style="border: 1px solid black">';
  imageFile = e2.target.result;
  decodeImage();
}

function loadimage(e1) {
  filename = e1.target.files[0]; 
  var fr = new FileReader();
  fr.onload = imageHandler;  
  fr.readAsDataURL(filename);
}

window.onload = function() {
  var y = document.getElementById("selectFile");
  y.addEventListener('change', loadimage, false);
}

function presentDecodeResult(result) {
	var presentValue = document.getElementById("QRvalue");
	presentValue.innerHTML = result;
}

function decodeImage() {
	qrcode.callback = presentDecodeResult;
	qrcode.decode(imageFile);
}