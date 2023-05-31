const formAgregarProducto = document.querySelector('.agregar-producto form');
formAgregarProducto.addEventListener('submit', function(event) {
event.preventDefault(); // Evitar que se recargue la página al enviar el formulario
const nombre = document.getElementById('nombre').value;
const precio = parseFloat(document.getElementById('precio').value);
agregarProducto(nombre, precio);
formAgregarProducto.reset(); // Limpiar el formulario
});
function agregarProducto(nombre, precio) {
const productos = document.querySelector('.productos');
const nuevoProducto = `
  <div class="producto">
    <img src="https://via.placeholder.com/200x200" alt="${nombre}">
    <h2>${nombre}</h2>
    <p>$${precio}</p>
    <button class="eliminar" onclick="eliminarProducto(this)">Eliminar</button>
  </div>
`;
productos.insertAdjacentHTML('beforeend', nuevoProducto);
}

function eliminarProducto(boton) {
const producto = boton.parentNode;
producto.remove();
}