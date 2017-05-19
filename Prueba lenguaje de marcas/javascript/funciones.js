/* estaban pensadas como si fueran globales, pero ya se declaran como globales automáticamente.
var1
var2
var3
*/

primeraImagen
segundaImagen
terceraImagen
resultado
final

function checkeoPuntos(){

	milPuntos = 1000
	quinientos = 500
	cero = 0

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

function guardar() {
	
	a = document.getElementById('marcadorActual')

	final = 0
	final += resultado
	alert('a')
	a.innerHTML = final
}

function chekeoSolo() {
	//si al cambiar alguna imagen, coinciden 2, poner 500 puntos, si son 3, entonces 1000.
	primeraImagen = document.getElementById('imagen1')
	segundaImagen = document.getElementById('imagen2')
	terceraImagen = document.getElementById('imagen3')


}


function funcionJuego(imagen){

	imagen1 = document.getElementById(imagen)

	var1 = Math.floor((Math.random() * 3) + 1)

	if (var1==1){
		imagen1.src = "../imagenes/Fresa.png"
	}
	if (var1==2){
		imagen1.src = "../imagenes/Limon.png"
	}
	if (var1==3){
		imagen1.src = "../imagenes/Sandia.png"
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
