var total = 0;
var resultado;

var var1 = 1;
var var2 = 2;
var var3 = 3;

//preguntar a txema.

var v1 = 0;
var v2 = 0;
var v3 = 0;

var imagen1 = document.getElementById('imagen1');
var imagen2 = document.getElementById('imagen2');
var imagen3 = document.getElementById('imagen3');

function chequeoImagenes(im1, im2, im3){
	
	i1 = document.getElementById('imagen1');
	i2 = document.getElementById(im2);
	i3 = document.getElementById(im3);

	alert(i1);
	

	if (i1 == "../imagenes/Fresa.png")
		v1 = 1;
	else
		if (i1 == "../imagenes/Limon.png")
		v1 = 2;
	else
		if (i1 == "../imagenes/Sandia.png")
		v1 = 3;

	if (i2.src == "../imagenes/Fresa.png")
		v2 = 1;
	else
		if (i2.src == "../imagenes/Limon.png")
		v2 = 2;
	else
		if (i2.src == "../imagenes/Sandia.png")
		v2 = 3;

	if (i3.src == "../imagenes/Fresa.png")
		v3 = 1;
	else
		if (i3.src == "../imagenes/Limon.png")
		v3 = 2;
	else
		if (i3.src == "../imagenes/Sandia.png")
		v3 = 3;

p = document.getElementById('marcadorActual');
p.innerHTML = 'valores ' + v1 + v2 + v3;
chequeoPuntos();

}

function funcionCambiar(imagenJuego){
	var op;

	imagen = document.getElementById(imagenJuego);
	//a = document.getElementById('marcadorActual');

	op = Math.floor((Math.random() * 3) + 1);

	if (op==1){
		imagen.src = "../imagenes/Fresa.png";
	}
	if (op==2){
		imagen.src = "../imagenes/Limon.png";
	}
	if (op==3){
		imagen.src = "../imagenes/Sandia.png";
	}
	//a.innerHTML = op;	
	chequeoImagenes();
}

function chequeoPuntos(){
	var1 = v1;
	var2 = v2;
	var3 = v3;

	milPuntos = 1000;
	quinientos = 500;
	cero = 0;
	resultado = 0;
	p = document.getElementById('tiradaActual');

for (var i = 1; i < 4; i++) {
	if ((var1==i && var2==i)||
	   (var2==i && var3==i)) {
	   	resultado = quinientos;
	   	p.innerHTML = resultado;
	   	break;
	}
	else{
		p = document.getElementById('tiradaActual');
	   	p.innerHTML = cero;
	}
	}
		
	if ( ((var1==1) && (var2==1) && (var3==1)) || 
	     ((var1==2) && (var2==2) && (var3==2)) || 
	     ((var1==3) && (var2==3) && (var3==3))){

		p = document.getElementById('tiradaActual');
		resultado = milPuntos;
		p.innerHTML = resultado;
	}
}

function funcionJugar(img1, img2, img3){

	imagen1 = document.getElementById(img1);
	imagen2 = document.getElementById(img2);
	imagen3 = document.getElementById(img3);

	var1 = Math.floor((Math.random() * 3) + 1);
	var2 = Math.floor((Math.random() * 3) + 1);
	var3 = Math.floor((Math.random() * 3) + 1);

	if (var1==1){
		imagen1.src = "../imagenes/Fresa.png";
	}
	if (var1==2){
		imagen1.src = "../imagenes/Limon.png";
	}
	if (var1==3){
		imagen1.src = "../imagenes/Sandia.png";
	}

	if (var2==1){
		imagen2.src = "../imagenes/Fresa.png";
	}
	if (var2==2){
		imagen2.src = "../imagenes/Limon.png";
	}
	if (var2==3){
		imagen2.src = "../imagenes/Sandia.png";
	}

	if (var3==1){
		imagen3.src = "../imagenes/Fresa.png";
	}
	if (var3==2){
		imagen3.src = "../imagenes/Limon.png";
	}
	if (var3==3){
		imagen3.src = "../imagenes/Sandia.png";
	}
//Debajo está definido el puntaje.
	chequeoPuntos();

}

function reiniciar() {

	imagen1.src = "../imagenes/Fresa.png";
	imagen2.src = "../imagenes/Limon.png";
	imagen3.src = "../imagenes/Sandia.png";

	p = document.getElementById('tiradaActual');
	a = document.getElementById('marcadorActual');
	p.innerHTML = 0;
	a.innerHTML = 0;
	total = 0;
	resultado = 0;
	
}

function guardar() {
	a = document.getElementById('marcadorActual');

	total += resultado ;
	//alert('a')
	a.innerHTML = total;
	resultado = 0;
}

