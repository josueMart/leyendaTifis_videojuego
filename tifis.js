var tablero;
var fondo={
imagenURL:"fondo.png",
imagenOK:false
};
var tifis={
	x: 100,
	y: 100,
	frenteURL:"diana-frente.png",
	frenteOK:false
};
function inicio()
{
	var canvas=document.getElementById("campo");//document incluye todos los componentes del archivo HTML
	tablero= canvas.getContext("2d"); //se asigna el contexto del canvas a la variable tablero
	
	fondo.imagen=new Image();//se puede crear el atributo por fuera del objeto
	fondo.imagen.src= fondo.imagenURL;
	fondo.imagen.onload= confirmarFondo;//no se pone parentesis pórque lleva un Unload

	tifis.frente=new Image();//se puede crear el atributo por fuera del objeto
	tifis.frente.src= tifis.frenteURL;
	tifis.frente.onload= confirmarFrente;
	var m=document.getElementById("mover");
	m.addEventListener("click", movimiento);
}
function confirmarFondo(){
	fondo.imagenOK=true;
	dibujar();
}
function confirmarFrente(){
	tifis.frenteOK=true;
	dibujar();
}
function dibujar(){
	if(fondo.imagenOK==true){
		tablero.drawImage(fondo.imagen, 0, 0);

	}
	if(tifis.frenteOK==true){
		tablero.drawImage(tifis.frente, tifis.x, tifis.y);
	}

}
function movimiento(){
	tifis.x+=10;
	dibujar();
}