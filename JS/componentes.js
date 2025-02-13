 // Cargar el header
    fetch('COMPONENTS/header.html')
        .then(response => response.text())  // Convertir la respuesta a texto
        .then(data => {
            document.getElementById('header-container').innerHTML = data;  // Insertar el header en el contenedor
        })
        .catch(error => console.error('Error al cargar el header:', error));

    // Cargar el footer
    fetch('COMPONENTS/footer.html')
        .then(response => response.text())  // Convertir la respuesta a texto
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;  // Insertar el footer en el contenedor
        })
        .catch(error => console.error('Error al cargar el footer:', error));

