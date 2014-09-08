var canvas = document.getElementById('theCanvas');
ctx = canvas.getContext('2d');

var inputFile = document.getElementById('selectFile');
inputFile.addEventListener('change', loadImage, false);

function loadImage(e) {
	var reader = new FileReader();
    reader.onload = function(event){
        img = new Image();
        img.onload = function(){
          ctx.drawImage(img,0,0, canvas.width, canvas.height);
			
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);  
    return false;    
  }