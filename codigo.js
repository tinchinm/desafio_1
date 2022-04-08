class Producto{
    constructor(nombre, stock, precio){
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
    }
}

let libros = [];

for(let i = 0; i < 4; i++){

    let nombre = prompt("ingrese el nombre del libro");
    let stock = prompt("ingrese la cantidad disponible");
    let precio = prompt("ingrese el precio");

    libros.push(new Producto(nombre, stock, precio));

}

console.log(libros);

console.log("La cantidad de libros en la biblioteca es de: " + libros.length + " libros.")

libros.sort((a, b) => {
    if (a.precio > b.precio) {
        return 1;
    }
    if (a.precio < b.precio) {
        return -1;
    }
    return 0;
});

console.log(libros);

libros.splice(2, 1);

console.log(libros);