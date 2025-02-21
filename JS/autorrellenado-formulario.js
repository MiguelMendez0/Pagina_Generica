function initAutocomplete() {
    let input = document.getElementById("codigo-postal");

    let autocomplete = new google.maps.places.Autocomplete(input, {
        types: ["geocode"],
    });

    // Cambiar el placeholder después de que Google lo modifique
    setTimeout(() => {
        input.setAttribute("placeholder", "Ingresa tu dirección actual o tu codigo postal");
    }, 100);

    autocomplete.addListener("place_changed", function() {
        let place = autocomplete.getPlace();

        if (!place.address_components) {
            console.log("No address components found");
            return;
        }

        let addressComponents = {};
        place.address_components.forEach(component => {
            let type = component.types[0];
            addressComponents[type] = component.long_name;
        });

        // Mostrar todos los datos en la consola para revisar qué recibimos
        console.log(addressComponents);

        // Llenar los campos con los datos encontrados
        document.getElementById("pais").value = addressComponents["country"] || "";
        document.getElementById("estado").value = addressComponents["administrative_area_level_1"] || "";
        
        // Intentar obtener el municipio desde diferentes componentes
        document.getElementById("municipio").value = 
            addressComponents["locality"] || 
            addressComponents["administrative_area_level_2"] || 
            addressComponents["sublocality_level_1"] || 
            "";

        // Intentar obtener la colonia desde diferentes componentes
        document.getElementById("colonia").value = 
            addressComponents["sublocality_level_1"] || 
            addressComponents["neighborhood"] || 
            addressComponents["political"] || 
            "";
        
        document.getElementById("calle").value = addressComponents["route"] || "";
    });
}

window.onload = initAutocomplete;
