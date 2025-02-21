// Cargar el header
fetch('/COMPONENTS/header.html')  // Asegúrate de que la ruta sea correcta
    .then(response => response.text())  // Convertir la respuesta a texto
    .then(data => {
        document.getElementById('header-container').innerHTML = data;  // Insertar el header en el contenedor
    })
    .catch(error => console.error('Error al cargar el header:', error));

// Cargar el footer
fetch('/COMPONENTS/footer.html')  // Asegúrate de que la ruta sea correcta
    .then(response => response.text())  // Convertir la respuesta a texto
    .then(data => {
        document.getElementById('footer-container').innerHTML = data;  // Insertar el footer en el contenedor
    })
    .catch(error => console.error('Error al cargar el footer:', error));

// Cargar el social media
fetch('/COMPONENTS/social-media.html')  // Asegúrate de que la ruta sea correcta
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudo cargar el archivo de social media');
        }
        return response.text();
    })
    .then(data => {
        let contenedor = document.getElementById('contenedor-social-media');
        if (data.trim() !== '') {
            contenedor.innerHTML = data;
        } else {
            contenedor.style.display = 'none'; // Ocultar si está vacío
        }
    })
    .catch(error => console.error('Error al cargar social-media:', error));
