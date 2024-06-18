let edad = parseInt(prompt( "porfavor ingrese su edad"));
let ciudadania = prompt("escriba si o no en caso de ser o no ciudadano colombiano");
let esCiudadano = confirm("¿Eres ciudadano colombiano?");

console.log(edad, ciudadania, esCiudadano)
if(edad >= 18 && esCiudadano == true) { alert("eres elegible para votar")} else{alert(" no eres elegible para votar")}
