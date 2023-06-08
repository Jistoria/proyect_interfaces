// Obtener todas las opciones del encabezado
const navItems = document.querySelectorAll('nav ul li');

// Recorrer todas las opciones y agregar el evento de clic
navItems.forEach(item => {
  item.addEventListener('click', () => {
    // Reiniciar la clase 'selected' en todas las opciones
    navItems.forEach(navItem => {
      navItem.classList.remove('selected');
    });
    
    // Agregar la clase 'selected' a la opción seleccionada
    item.classList.add('selected');
  });
});