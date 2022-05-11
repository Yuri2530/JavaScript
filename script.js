window.onload = iniciar;

function viniciar() {
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar)

}

function clickBtnAgregar() {
    var txt = document.getElementById("txtNota");

    var divNotas = document.getElementById("divNotas");
    divNotas.innerHTML = txtNota.value;

}