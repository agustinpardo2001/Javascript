/*El usuario olvido su password y debe recuperarla
con una pregunta de seguridad*/
let preguntaSegura = "carlitos";
let respuesta = prompt("Ingrese el nombre de su primer mascota");

if(respuesta == preguntaSegura){
alert("Siga los pasos para cambiar su password");
}

else{
alert("Respuesta incorrecta");
}