function initAutocomplete() {
    let input = document.getElementById("codigo-postal");
    let autocomplete = new google.maps.places.Autocomplete(input, {
        types: ["geocode"],
        componentRestrictions: { country: "MX" } // Restricción a México
    });

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
        document.getElementById("calle").value = addressComponents["route"] || "";
    });
}

window.onload = initAutocomplete;