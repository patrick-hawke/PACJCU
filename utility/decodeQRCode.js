/**
 * Created by pat on 17/09/2014.
 */
function presentDecodeResult(result) {
    presentValue = document.getElementById("QRvalue");
    presentValue.innerHTML = result;
}

function decodeImage(image) {
    qrcode.callback = presentDecodeResult;
    qrcode.decode(image);
}