// Funcionalidad del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Obtener valores del formulario
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const asunto = document.getElementById('asunto').value;
      const mensaje = document.getElementById('mensaje').value;
      
      // Validar que los campos no estén vacíos
      if (nombre && email && asunto && mensaje) {
        // Mostrar mensaje de éxito
        const successMessage = document.getElementById('successMessage');
        if (successMessage) {
          successMessage.classList.add('show');
          setTimeout(() => {
            successMessage.classList.remove('show');
          }, 3000);
        }
        
        // Limpiar formulario
        contactForm.reset();
        
        // En una aplicación real, aquí se enviaría a un servidor
        console.log('Formulario enviado:', { nombre, email, asunto, mensaje });
      }
    });
  }
  
  // Cerrar menú desplegable al hacer clic fuera
  document.addEventListener('click', function(event) {
    const navDropdowns = document.querySelectorAll('.nav-dropdown');
    navDropdowns.forEach(dropdown => {
      if (!dropdown.contains(event.target)) {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        if (dropdownContent) {
          dropdownContent.style.display = 'none';
        }
      }
    });
  });
});

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
