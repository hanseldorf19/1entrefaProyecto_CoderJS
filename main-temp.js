// Variables globales
let nameUser = localStorage.getItem('usuario');
document.getElementById('saludoUser').innerHTML = `Hola ${nameUser}`;
console.log(nameUser);


let userMyCultHub = [];
const tusGenPelis = [];
const tusPelis =[];
const tusActores = [];
const tusGenMusica = [];


let SelectGenPelis1;
let SelectGenPelis2;
let SelectGenPelis3;

let SelectGenMusica1;
let SelectGenMusica2;
let SelectGenMusica3;


// Funciones

//PELÍCULAS

// Función Menu Determinar los generos de peliculas del usuario

function processGenPelis(){

    //const botonPelis = document.getElementById('botonRegistroPelis');
    //const userGustPelis = document.getElementById('resultadoGustPelis');

    let lista = document.getElementById("genPelis");
    let indiceSeleccionado = lista.selectedIndex;
    let opcionSeleccionada = lista.options[indiceSeleccionado];
    let valoresSeleccionado = opcionSeleccionada.value;
    console.log("Opción seleccionadas: " + valoresSeleccionado);
    let userGustPelis =[valoresSeleccionado];
    console.log(userGustPelis);
}

processGenPelis();  // Lo he tomado de un foro, https://www.arkaitzgarro.com/javascript/capitulo-16.html pero No me funcion !!--(


