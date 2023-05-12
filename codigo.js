const listaCarrito = document.querySelector("#lista-carrito");
const totalCarrito = document.querySelector("#total-carrito");
let carrito = [];

function agregarAlCarrito(nombre, precio) {
  const producto = {
    nombre,
    precio,
  };
  carrito.push(producto);
  mostrarCarrito();
}

function mostrarCarrito() {
  listaCarrito.innerHTML = "";
  carrito.forEach((producto) => {
    const { nombre, precio } = producto;
    const itemCarrito = document.createElement("li");
    itemCarrito.innerHTML = `
      ${nombre} - $${precio}
      <button onclick='eliminarDelCarrito("${nombre}")'>Eliminar</button>
    `;
    listaCarrito.appendChild(itemCarrito);
  });
  calcularTotal();
}

function calcularTotal() {
  let total = 0;
  carrito.forEach((producto) => {
    total += producto.precio;
  });
  totalCarrito.textContent = total;
}

function eliminarDelCarrito(nombre) {
  carrito = carrito.filter((producto) => producto.nombre !== nombre);
  mostrarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  mostrarCarrito();
}
