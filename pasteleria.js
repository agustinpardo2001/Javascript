class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}

vendedor() {
    console.log("EL TOTAL SERIA"+ this.precio);
}

const producto1 = new Producto("torta rojel", "450");
const producto2 = new Producto("chocotorta", "350");
const producto3 = new Producto("galleta", "60");
const producto4 = new Producto("muffin", "160");
producto1.sumaIva();
producto2.sumaIva();
producto3.sumaIva();
producto4.sumaIva();
producto1.vender();

//Arrays//

const productos = 
[{ id: 1, producto: "Torta Rojel", tipo: "especialidad", precio: 450 },
{ id: 2, producto: "Chocotorta", tipo: "especialidad" , precio: 350 },
{ id: 3, producto: "Galleta" , tipo: "pasteleria" , precio: 60 },
{ id: 4, producto: "Muffin" , tipo: "pasteleria" , precio: 160 }];

const buscarGalleta = productos.find(producto => producto.id === 3);
console.log(buscarGalleta);

const deTipo = productos.filter(producto => producto.tipo === "especialidad");
console.log(deTipo);

const costos = productos.map(producto => producto.precio === 450);
console.log(costos);

