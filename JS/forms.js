const form = document.getElementById("registro")
form.addEventListener("submit", function(event){
    event.preventDefault();    
    const nombre = document.getElementById("nombre").value;
    const primerapellido = document.getElementById("primerapellido").value;
    const segundoapellido = document.getElementById("segundoapellido").value;
    const codigo_postal = document.getElementById("codigo_postal").value;
    const pais = document.getElementsByName("pais")[0].value; // Asegúrate de seleccionar el valor correctamente
    const estado = document.getElementById("estado").value;
    const municipio = document.getElementById("municipio").value;
    const colonia = document.getElementById("colonia").value;
    const calle = document.getElementById("calle").value;
    const num_ext = document.getElementById("num-ext").value;
    const num_int = document.getElementById("num-int").value;
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;
    const pass_confirm = document.getElementById("contraseña-confirmada").value;

    // Validación de contraseñas
    if (contraseña != pass_confirm) {
        alert("Las contraseñas no coinciden");
    }

    const datos = {
        nombre,
        primerapellido,
        segundoapellido,
        codigo_postal,
        pais,
        estado,
        municipio,
        colonia,
        calle,
        num_ext,
        num_int,
        correo,
        contraseña
    };

    // Enviar los datos al backend mediante fetch
    fetch("http://localhost:3000/usuario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    })
    
    .then(data => {
        alert("El usuario se ha registrado exitosamente.")
        console.log('Success:', data);
        // Aquí podrías redirigir o mostrar un mensaje de éxito
    })
    .catch((error) => {
        alert("Tu error fue haber nacido.")
        console.error('Error:', error);
    });
});
