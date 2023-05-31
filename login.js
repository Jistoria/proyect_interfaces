const usuarioString = localStorage.getItem('usuario');
const usuario = JSON.parse(usuarioString);
console.log(usuario); // Imprime el objeto usuario en la consola

const { createApp } = Vue

createApp({
data() {
  return {
    error: '',
    prueba: 'Hello Vue!',
    contraseña:'',
    email:'',
    usuario: JSON.parse(localStorage.getItem('usuario')) || {},
    emailadmin:'maestrojgcm@gmail.com',

 }
},
methods:{
login: function(e) {
if(this.email==this.emailadmin){
const admin = {
        nombre: 'Soy el admin',
        apellido: 'Guapo',
        email: this.email,
      };
      localStorage.setItem('admin', JSON.stringify(admin));
      window.location.href = 'admin.html';
}else{
if (this.email !== this.usuario.email || this.contraseña !== this.usuario.contraseña) {
this.error = 'Datos inválidos';
e.preventDefault();
}else{
localStorage.setItem('usuario', JSON.stringify(usuario));
window.location.href = 'index.html';
}
}


}
}
}).mount('#app')
