const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva   = x => x * 0.21;
let tortaRojel  = 500; 
let precioDescuento = 50;  
let nuevoPrecio = resta(suma(tortaRojel, iva(tortaRojel)), precioDescuento); 
console.log(nuevoPrecio);