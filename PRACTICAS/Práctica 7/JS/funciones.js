h = 200
w = 200

function aumentarImagen(idImagen) {

	var imgn;
	
	imgn = document.getElementById(idImagen);
     h += 10
     w += 10
	
	imgn.style.height = "" + h + "px";
	imgn.style.width = "" + w + "px";
		
}

function reducirImagen(idImagen) {

	var imgn;
	
	imgn = document.getElementById(idImagen);
     h += -10
     w += -10
	
	imgn.style.height = "" + h + "px";
	imgn.style.width = "" + w + "px";
		
}
