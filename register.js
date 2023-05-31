const { createApp } = Vue
    

createApp({
    data() {
      return {
        errors: [],
        prueba: 'Hello Vue!',
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
  
