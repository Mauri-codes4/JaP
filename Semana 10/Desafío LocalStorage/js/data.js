//al clickear en ver data: mostrar lo guardado en el localstorage
const dataNueva = localStorage.getItem("dataNueva");
//el ? es para verificar si es true or false, si es false dice que no hay datos
document.getElementById("data").textContent = dataNueva ? dataNueva : "No hay datos guardados";