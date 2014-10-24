/**
 * Created by pat on 11/10/2014.
 */
var http = new XMLHttpRequest();

function postToGame(params, destinationURL) {
    http.open("POST", destinationURL, true);
    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//    http.setRequestHeader("Content-length", params.length);
//    http.setRequestHeader("Connection", "close");

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
    http.send(params);

}