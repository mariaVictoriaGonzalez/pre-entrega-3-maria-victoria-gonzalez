const containerCheckout = document.querySelector("section.containerCheckout")
const productosElegidos = JSON.parse(localStorage.getItem("productosElegidos"))
const carritoCantidad = document.querySelector("span.carritoCantidad")

function imprimirCarrito({ codigo, nombre, precio } = productoElegido) {
    return `<tr>
                <td>${codigo}</td>
                <td>${nombre}</td>
                <td>${precio}</td>
                <td class="button-eliminar-item"><button>Eliminar</button></td>
            </tr>`
}

function imprimirTotal () {
    carritoCantidad.innerHTML = productosElegidos.length
    const totalCompra = productosElegidos.reduce((acc, productoElegido) => acc + productoElegido.precio, 0)
    const spanTotal = document.querySelector("span.spanTotal")
    spanTotal.innerHTML = totalCompra
}

productosElegidos.length > 0 && productosElegidos.forEach((productoElegido) => containerCheckout.innerHTML += imprimirCarrito(productoElegido))

imprimirTotal()