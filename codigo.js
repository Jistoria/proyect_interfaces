const listaCarrito = document.querySelector("#lista-carrito");
const totalCarrito = document.querySelector("#total-carrito");
const usuarioString = localStorage.getItem('usuario');
const usuario = JSON.parse(usuarioString);
console.log(usuario); // Imprime el objeto usuario en la consola
let carrito = [];
function filtrarProductos() {
  const busqueda = document.getElementById('busqueda').value.toLowerCase();
  const filtroPrecio = document.getElementById('filtroPrecio').value;
  const productos = document.getElementsByClassName('producto');

  for (const producto of productos) {
    const nombre = producto.querySelector('h2').innerText.toLowerCase();
    const precio = parseInt(producto.querySelector('p').innerText.slice(1));

    const cumpleBusqueda = nombre.includes(busqueda);

    let cumplePrecio = false;
    if (filtroPrecio === 'todos') {
      cumplePrecio = true;
    } else if (filtroPrecio === 'menor200') {
      cumplePrecio = precio < 200;
    } else if (filtroPrecio === 'menor500') {
      cumplePrecio = precio < 500;
    } else if (filtroPrecio === 'mayor500') {
      cumplePrecio = precio > 500;
    }

    if (cumpleBusqueda && cumplePrecio) {
      producto.style.display = 'block';
    } else {
      producto.style.display = 'none';
    }
  }
}



  function agregarAlCarrito(nombre, precio) {
    if(!usuario){
      alert("Para usar el carrito debes iniciar sesion");
  }else{
    const producto = {
      nombre,
      precio,
    };
    carrito.push(producto);
    mostrarCarrito();
  }
  
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
  const index = carrito.findIndex((producto) => producto.nombre === nombre);
  if (index !== -1) {
    carrito.splice(index, 1);
    mostrarCarrito();
  }
}


function vaciarCarrito() {
  carrito = [];
  mostrarCarrito();
}



const { createApp } = Vue

createApp({
  data() {
    return {
        usuario: JSON.parse(localStorage.getItem('usuario')) || null,
    }
  },
  methods:{
    logout() {
      localStorage.removeItem('usuario');
      this.usuario = null;
      console.log(this.usuario);
    }
    

},
}).mount('#app')




function realizarCompra() {
alert("¡Gracias por tu compra!");
}

