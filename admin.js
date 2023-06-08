const formAgregarProducto = document.querySelector('.agregar-producto form');
formAgregarProducto.addEventListener('submit', function(event) {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const precio = parseFloat(document.getElementById('precio').value);
  const descripcion = document.getElementById('descripcion').value;
  const imagen = document.getElementById('imagen').value || "https://via.placeholder.com/200x200";
  agregarProducto(nombre, precio, descripcion, imagen);
  formAgregarProducto.reset();
});

function agregarProducto(nombre, precio, descripcion, imagen) {
  const productos = document.querySelector('.productos');
  const nuevoProducto = `
    <div class="producto">
      <img src="${imagen}" alt="${nombre}">
      <h2>${nombre}</h2>
      <p>$${precio}</p>
      <p class="descripcion">${descripcion}</p>
      <button class="eliminar" onclick="eliminarProducto(this)">Eliminar</button>
    </div>
  `;
  productos.insertAdjacentHTML('beforeend', nuevoProducto);
}

function eliminarProducto(boton) {
  const producto = boton.parentNode;
  producto.remove();
}
  