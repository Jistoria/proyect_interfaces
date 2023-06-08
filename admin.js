const formAgregarProducto = document.querySelector('.agregar-producto form');
formAgregarProducto.addEventListener('submit', function(event) {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const precio = parseFloat(document.getElementById('precio').value);
  const imagen = document.getElementById('imagen').value || "https://via.placeholder.com/200x200" ;
  agregarProducto(nombre, precio, imagen);
  formAgregarProducto.reset();
});

function agregarProducto(nombre, precio, imagen) {
  const productos = document.querySelector('.productos');
  const nuevoProducto = `
    <div class="producto">
      <img src="${imagen}" alt="${nombre} style="width: 200px; height: 200px;">
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
