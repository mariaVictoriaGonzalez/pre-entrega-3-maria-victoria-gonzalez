const productos = [
    { nombre: "Figura Hitsune Miku:", codigo: "f0234", precio: 2990, categoria: "figuras", imagen: "./assets/img/producto-figura-hatsune-miku.jpg" },
    { nombre: "Manga Jujutsu Kaisen:", codigo: "m1991", precio: 2000, categoria: "mangas", imagen: "./assets/img/producto-manga-jujutsu-kaisen .jpg" },
    { nombre: "Figura Naruto Shipuden:", codigo: "f5836", precio: 2750, categoria: "figuras", imagen: "./assets/img/producto-figura-naruto.jpg" },
    { nombre: "Manga Kimetsu no Yaiba", codigo: "m0223", precio: 2200, categoria: "mangas", imagen: "./assets/img/producto-manga-kimetsu .jpg" }
]

const container = document.getElementById('container')

function retornoCardHTML(producto) {

    return `<div class="card">
                <div class="imagen"><img.src>${producto.imagen}</h1></div>
                <h3 class="nombre">${producto.nombre}</h3>
                <h4 class="precio">$ ${producto.precio}</h4>
                <button class="comprar" id="${producto.codigo}">Comprar</button>
            </div>`
}

function cargarProductos() {
    container.innerHTML = ''
    productos.forEach((producto) => {
        container.innerHTML += retornoCardHTML(producto)
    });
}

cargarProductos()

// let productosElegidos = []
// procesarCompra()
// function procesarCompra() {
//     do {
//         llenarCarrito()
//         respuestaCompra = confirm("Desea agregar otro producto al carrito?")
//     } while (respuestaCompra);
//     cerrarCompra()
// }

// function llenarCarrito() {
//     let eleccion = prompt("Productos disponibles: Figura Hitsune Miku: codigo: f0234, precio: $2990 | Manga Jujutsu Kaisen: codigo: m1991, precio: $2000 | Figura Naruto Shipuden: codigo: f5836, precio: $2750 | Manga Kimetsu no Yaiba: codigo m0223, precio: $2200. Ingresa el codigo del producto.")
//     let productoElegido = productos.find((producto) => producto.codigo === eleccion)
//     if (productoElegido !== undefined) {
//         productosElegidos.push(productoElegido)
//     } else {
//         alert("Codigo incorrecto! Intenta de nuevo.")
//     }
// }

// function cerrarCompra() {
//     const totalCompra = productosElegidos.reduce((acc, productoElegido) => acc + productoElegido.precio, 0)
//     console.log("Los productos elegidos son: ")
//     console.table(productosElegidos)
//     console.log("El total de su compra es: $" + totalCompra)
//     console.log("Gracias por tu compra!")
// }