function disminuir(){
    let input = document.getElementById("cantidad");
    input.value = parseInt(input.value)-1 ? parseInt(input.value) -1 : 1;

}

function incrementar(){
    let input = document.getElementById("cantidad");
    input.value = parseInt(input.value)+1;
}

