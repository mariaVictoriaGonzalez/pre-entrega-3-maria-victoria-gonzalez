const productos = [
    { nombre: "Figura Hitsune Miku:", codigo: "f0234", precio: 2990, categoria: "figuras", imagen: '../assets/img/producto-figura-hatsune-miku.jpg' },
    { nombre: "Manga Jujutsu Kaisen:", codigo: "m1991", precio: 2000, categoria: "mangas", imagen: '../assets/img/producto-manga-jujutsu-kaisen .jpg' },
    { nombre: "Figura Naruto Shipuden:", codigo: "f5836", precio: 2750, categoria: "figuras", imagen: '../assets/img/producto-figura-naruto.jpg' },
    { nombre: "Manga Kimetsu no Yaiba", codigo: "m0223", precio: 2200, categoria: "mangas", imagen: '../assets/img/producto-manga-kimetsu .jpg' }
]

const container = document.getElementById('container')

function retornoCardHTML(producto) {
    return `<div class="card">
                <div class="imagen"><img alt= "${producto.nombre}" src= "${producto.imagen}"></div>
                <h3 class="nombre">${producto.nombre}</h3>
                <h4 class="precio">$ ${producto.precio}</h4>
                <div class="comprar"><button id="${producto.codigo}" class="botonCompra">Comprar</button></div>
            </div>`
}

function cargarProductos() {
    container.innerHTML = ''
    productos.forEach((producto) => {
        container.innerHTML += retornoCardHTML(producto)
    })
    llenarCarrito()
}
cargarProductos()
let productosElegidos = []

function llenarCarrito() {
    const botones = document.querySelectorAll('button.botonCompra')
    const carritoCantidad = document.querySelector("span.carritoCantidad")

    for (let boton of botones) {
        boton.addEventListener('click', (e) => {
            const productoElegido = productos.find((producto) => producto.codigo === e.target.id)
            productosElegidos.push(productoElegido)
            console.table(productosElegidos)
            carritoCantidad.innerHTML = productosElegidos.length
            localStorage.setItem("productosElegidos", JSON.stringify(productosElegidos))
        })
    }
}

function cerrarCompra() {
    const botonFinalizar = document.querySelector('button.botonFin')

    botonFinalizar.addEventListener("click", () => {
        location.href = "../pages/checkout.html"
    })
}

cerrarCompra()