//acceder al input y al guardar, al clickear boton de guardar, almacenar el valor del inputText en localstorage
document.getElementById("buttonText").addEventListener("click", function() {

    const valorInput = document.getElementById("inputText").value;

    localStorage.setItem("dataNueva", valorInput);
//vaciar input
    document.getElementById("inputText").value = "";
});

