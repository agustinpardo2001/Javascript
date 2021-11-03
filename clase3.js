let entrada = prompt("Ingresar un nombre");

while(entrada != "ESC" ){
   switch (entrada) {
       case "Goku":
            alert("Hola Kakaroto");
            break;
        case "Pikolo":
            alert("Hola seniol Pikolo");
            break;
       default:
           alert("No te conozco insecto");
           break;
   }
   entrada = prompt("Ingresar un nombre");
}
