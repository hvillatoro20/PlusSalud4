// Mostrar la sección correspondiente al hacer clic en los enlaces del menú
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(targetId).classList.add('active');
    });
});

// Mostrar la sección de Inicio por defecto
document.getElementById('inicio').classList.add('active');

// Chatbot
document.getElementById('chatbot-btn').addEventListener('click', function() {
    const chatWindow = document.getElementById('chatbot-window');
    chatWindow.style.display = chatWindow.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('enviar-chat').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const celular = document.getElementById('celular').value;
    const correo = document.getElementById('correo').value;

    const mensaje = `Nombre: ${nombre}\nCelular: ${celular}\nCorreo: ${correo}`;
    alert('Información enviada:\n' + mensaje);
    // Aquí puedes agregar código para enviar la información al correo electrónico
});

// Selección de hora para la cita
document.querySelectorAll('.hora-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.hora-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

// Enviar formulario de cita
document.getElementById('citaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const tipoServicio = document.getElementById('tipoServicio').value;
    const calendario = document.getElementById('calendario').value;
    const hora = document.querySelector('.hora-btn.active').dataset.hora;

    const mensaje = `Tipo de Servicio: ${tipoServicio}\nFecha: ${calendario}\nHora: ${hora}`;
    alert('Cita agendada:\n' + mensaje);
    // Aquí puedes agregar código para enviar la información al correo electrónico
});