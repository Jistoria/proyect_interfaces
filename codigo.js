const listaCarrito = document.querySelector("#lista-carrito");
const totalCarrito = document.querySelector("#total-carrito");
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
const usuarioString = localStorage.getItem('usuario');
const usuario = JSON.parse(usuarioString);
console.log(usuario); // Imprime el objeto usuario en la consola


const { createApp } = Vue

createApp({
  data() {
    return {
      prueba: 'Bienvenido!',
        usuario: JSON.parse(localStorage.getItem('usuario')) || {},
        errors: [],
        nombre: '',
        apellido:'',
        email:'',
        telefono:'',
        direccion:'',
        contraseña:'',
        r_contraseña:''
    }
    

  },
  methods:{
    checkForm: function (e) {
      
      

      this.errors = [];
      if (!this.nombre) {
        this.errors.push('El nombre es obligatorio.');
      }
      if (!this.email) {
        this.errors.push('El email es obligatorio.');
      }
      if (!this.apellido) {
        this.errors.push('El apellido es obligatorio.');
      }
      if (!this.telefono) {
        this.errors.push('El numero te telefono es obligatorio.');
      }
      if (!this.direccion) {
        this.errors.push('La direccion es obligatoria.');
      }
      if (!this.contraseña) {
        this.errors.push('La contraseña es obligatoria.');
      }
      if (!this.r_contraseña) {
        this.errors.push('Escriba la contraseña de nuevo.');
      }
      if (this.contraseña !== this.r_contraseña) {
        this.errors.push('Las contraseñas no coinciden');
      }
      if (this.errors.length === 0) {
        // Crear objeto usuario con los datos del formulario
          const usuario = {
          nombre: this.nombre,
          apellido: this.apellido,
          email: this.email,
          telefono: this.telefono,
          direccion: this.direccion,
          contraseña: this.contraseña
        };
        localStorage.setItem('usuario', JSON.stringify(usuario));
        window.location.href = 'login.html';
      }
e.preventDefault();
}


  }
}).mount('#app')
function realizarCompra() {
// Aquí puedes agregar la lógica para procesar la compra, como enviar una solicitud al servidor, guardar la información en una base de datos, etc.

// Por ahora, simplemente mostraremos un mensaje de confirmación
alert("¡Gracias por tu compra!");

// También puedes restablecer el carrito o redirigir al usuario a una página de confirmación de compra, dependiendo de tus necesidades.
}

