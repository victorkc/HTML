
var guardar_activado = true;

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
	chequeoPuntos();
	guardar_activado = true;
}

function chequeoPuntos(){

	milPuntos = 1000;
	quinientos = 500;
	cero = 0;
	resultado = 0;
	p = document.getElementById('tiradaActual');

	imagen1 = document.getElementById('imagen1');
	imagen2 = document.getElementById('imagen2');
	imagen3 = document.getElementById('imagen3');

	if( (imagen1.src == imagen2.src)||
		(imagen2.src == imagen3.src)||
		(imagen2.src == imagen3.src))
		p.innerHTML = quinientos;
	
	else
		p.innerHTML = cero;

	if((imagen1.src == imagen2.src) && (imagen2.src == imagen3.src))
		p.innerHTML = milPuntos;
	
/*
		p = document.getElementById('tiradaActual');
		resultado = milPuntos;
		p.innerHTML = resultado;
	*/

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
	guardar_activado = true;
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
	guardar_activado = true;
	
}

function guardar() {
	total = document.getElementById('marcadorActual');
	actual = document.getElementById('tiradaActual');
	
	if (guardar_activado){
	suma = parseInt(total.innerHTML);
	suma += parseInt(actual.innerHTML);

	//alert('a')
	total.innerHTML = suma;
	guardar_activado = false;
}
}

