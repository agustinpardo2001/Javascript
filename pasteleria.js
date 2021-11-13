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