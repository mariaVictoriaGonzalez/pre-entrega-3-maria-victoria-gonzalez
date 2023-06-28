const containerCheckout = document.querySelector("section.containerCheckout")
const productosElegidos = JSON.parse(localStorage.getItem("productosElegidos"))
const carritoCantidad = document.querySelector("span.carritoCantidad")

function imprimirCarrito({ codigo, nombre, precio } = productosElegidos) {
    return `<div class="divTabla">
    <table class="tablaCheckout">
        <tbody>
            <tr>
                <td>Codigo: ${codigo}</td>
                <td>${nombre}</td>
                <td> $ ${precio}</td>
                <td><button class="botonEliminarItem" id="${codigo}">Eliminar</button></td>
            </tr>
        </tbody>
        </table>
        </div>`
}

function imprimirTotal() {
    productosElegidos.length > 0 && productosElegidos.forEach((productoElegido) => containerCheckout.innerHTML += imprimirCarrito(productoElegido))
    carritoCantidad.innerHTML = productosElegidos.length
    const totalCompra = productosElegidos.reduce((acc, productoElegido) => acc + productoElegido.precio, 0)
    const spanTotal = document.querySelector("span.spanTotal")
    spanTotal.innerHTML = totalCompra
}

imprimirTotal()

function activarBotonesEliminar() {
    const botonesEliminar = document.querySelectorAll("button.botonEliminarItem")

    for (let botonEliminar of botonesEliminar) {
        botonEliminar.addEventListener('click', (e) => {
            const productoElegido = productosElegidos.find((producto) => producto.codigo === e.target.id)
            productosElegidos.splice(productosElegidos.indexOf(productoElegido), 1)
            localStorage.setItem("productosElegidos", JSON.stringify(productosElegidos))
            containerCheckout.innerHTML = ""
            imprimirTotal()
            activarBotonesEliminar()
        })
    }
}
activarBotonesEliminar()

function imprimirSaludoFinal() {
    return `<div class="divSaludoFinal">
    <p class="parrafoSaludoFinal">Gracias por tu compra!</p>
        </div>`
}

function finalizarCompra() {
    const botonFinalizarCompra = document.querySelector("button.botonFinalizarCompra")
    botonFinalizarCompra.addEventListener("click", () => {
        let productosElegidos = []
        localStorage.clear()
        containerCheckout.innerHTML = imprimirSaludoFinal()
        carritoCantidad.innerHTML = productosElegidos.length
        botonFinalizarCompra.style.display = 'none'
    })
}

finalizarCompra()