/* estaban pensadas como si fueran globales, pero ya se declaran como globales automáticamente.
var1
var2
var3
*/
var total = 0 //preguntar a txema, sin var no funciona, con var funciona, y al quitar después var, sigue funcionando
primeraImagen
segundaImagen
terceraImagen
resultado

var var1
var var2
var var3

imagen1 = document.getElementById('imagen1')
imagen2 = document.getElementById('imagen2')
imagen3 = document.getElementById('imagen3')


function checkeoPuntos(){

	milPuntos = 1000
	quinientos = 500
	cero = 0
	resultado = 0

for (var i = 1; i < 4; i++) {
	if ((var1==i && var2==i)||
	   (var1==i && var3==i)||
	   (var2==i && var3==i)) {
	   	p = document.getElementById('tiradaActual')
	   	resultado = quinientos
	   	p.innerHTML = resultado
	   	break
	}
	else{
		p = document.getElementById('tiradaActual')
	   	p.innerHTML = cero
	}
	}

		
	if ( ((var1==1) && (var2==1) && (var3==1)) || 
	     ((var1==2) && (var2==2) && (var3==2)) || 
	     ((var1==3) && (var2==3) && (var3==3))){

		p = document.getElementById('tiradaActual')
		resultado = milPuntos
		p.innerHTML = resultado
	}
}

function chekeoSolo() {
	//si al cambiar alguna imagen, coinciden 2, poner 500 puntos, si son 3, entonces 1000.
	primeraImagen = 0
	segundaImagen = 0
	terceraImagen = 0

	if(imagen1.src == "../imagenes/Fresa.png")
		var1 = 1
	if(imagen1.src == "../imagenes/Limon.png")
		var1 = 2
	if(imagen1.src == "../imagenes/Sandia.png")
		var1 = 3
	//alert(var1)
	if(imagen2.src == "../imagenes/Fresa.png")
		var2 = 1
	if(imagen2.src == "../imagenes/Limon.png")
		var2 = 2
	if(imagen2.src == "../imagenes/Sandia.png")
		var2 = 3

	if(imagen3.src == "../imagenes/Fresa.png")
		var3 = 1
	if(imagen3.src == "../imagenes/Limon.png")
		var3 = 2
	if(imagen3.src == "../imagenes/Sandia.png")
		var3 = 3

	checkeoPuntos()

}

function reiniciar() {

	var1 = 1
	var2 = 2
	var3 = 3

	imagen1.src = "../imagenes/Fresa.png"
	imagen2.src = "../imagenes/Limon.png"
	imagen3.src = "../imagenes/Sandia.png"

	p = document.getElementById('tiradaActual')
	a = document.getElementById('marcadorActual')
	p.innerHTML = 0
	a.innerHTML = 0
	total = 0
	resultado = 0
	
}

function guardar() {
	a = document.getElementById('marcadorActual')

	total += resultado
	//alert('a')
	a.innerHTML = total
	resultado = 0
}


function funcionJuego(imagen){

	imagen = document.getElementById(imagen)

	var1 = Math.floor((Math.random() * 3) + 1)

	if (var1==1){
		imagen.src = "../imagenes/Fresa.png"
	}
	if (var1==2){
		imagen.src = "../imagenes/Limon.png"
	}
	if (var1==3){
		imagen.src = "../imagenes/Sandia.png"
	}

	chekeoSolo()

}

function funcionJugar(img1, img2, img3){

	imagen1 = document.getElementById(img1)
	imagen2 = document.getElementById(img2)
	imagen3 = document.getElementById(img3)

	var1 = Math.floor((Math.random() * 3) + 1)
	var2 = Math.floor((Math.random() * 3) + 1)
	var3 = Math.floor((Math.random() * 3) + 1)

	if (var1==1){
		imagen1.src = "../imagenes/Fresa.png"
	}
	if (var1==2){
		imagen1.src = "../imagenes/Limon.png"
	}
	if (var1==3){
		imagen1.src = "../imagenes/Sandia.png"
	}

	if (var2==1){
		imagen2.src = "../imagenes/Fresa.png"
	}
	if (var2==2){
		imagen2.src = "../imagenes/Limon.png"
	}
	if (var2==3){
		imagen2.src = "../imagenes/Sandia.png"
	}

	if (var3==1){
		imagen3.src = "../imagenes/Fresa.png"
	}
	if (var3==2){
		imagen3.src = "../imagenes/Limon.png"
	}
	if (var3==3){
		imagen3.src = "../imagenes/Sandia.png"
	}
//Debajo está definido el puntaje.
	checkeoPuntos()

}
