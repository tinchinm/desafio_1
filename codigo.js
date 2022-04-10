class Producto{
    constructor(nombre, stock, precio){
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
    }
}

let libros = [];

for(let i = 0; i < 2; i++){

    let nombre = prompt("ingrese el nombre del libro");
    let stock = prompt("ingrese la cantidad disponible");
    let precio = prompt("ingrese el precio");

    libros.push(new Producto(nombre, stock, precio));

}

console.log(libros);

let tabla = document.createElement("table");

tabla.className = "tabla";

tabla.innerHTML = `
                    <tr class=tabla_head>
                        <td>Nombre</td>
                        <td>Stock</td>
                        <td>Precio</td>
                    </tr>
                `;

for (const libro of libros) {

let filas = document.createElement("tr")

filas.innerHTML = `
                    <td>${libro.nombre}</td>
                    <td>${libro.stock}</td>
                    <td>$ ${libro.precio}</td>
                    `;

tabla.appendChild(filas);
}

document.body.appendChild(tabla);