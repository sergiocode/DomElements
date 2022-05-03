// Buttons variables
const btnModificarContentido = document.getElementById('btnModificarContentido');
const btnCambiarEstilo = document.getElementById('btnCambiarEstilo');
const btnAddDiv = document.getElementById('btnAddDiv');
const btnAddP = document.getElementById('btnAddP');

const contenidoModificar = document.getElementById('contenidoModificar');
const divDemo1 = document.getElementById('divDemo1');
const addDiv = document.getElementById('addDiv');
const ejNewElements = document.querySelectorAll('.ejNewElement');
const addP = document.getElementById('addP');

let autoDivId = 0;

function showAlert(){
    alert('Has hecho click en un elemento que has generado previamente');
}


btnModificarContentido.addEventListener('click', () => {
    const msg = prompt('Introduce el contenido nuevo?');
    contenidoModificar.innerHTML = `${msg}`;
});

btnCambiarEstilo.addEventListener('click', () => {
    const altura = prompt('Que altura quieres asignarle? (px)');
    const anchura = prompt('Que anchura quieres asignarle? (px)');

    divDemo1.style.height = `${altura}px`;
    divDemo1.style.width = `${anchura}px`;
    divDemo1.style.backgroundColor = 'white'
    divDemo1.style.color = 'black';
});

btnAddDiv.addEventListener('click', () => {
    var div = document.createElement('div');
    div.classList.add('ejNewElement');
    div.innerHTML = 'Nuevo div';
    div.setAttribute("id", autoDivId);
    autoDivId += 1;
    addDiv.appendChild(div);
});

btnAddP.addEventListener('click', () => {
    var p = document.createElement('p');
    var texto = prompt('Escribe el texto a añadir:');

    p.classList.add('ejNewP');
    p.innerHTML = texto;
    addP.appendChild(p);
});

// Remove element

function eliminarElemento(){
    var padre = document.querySelector('#demoEliminarElemento');
    var elemento = document.querySelector('#eliminarDiv');

	if (!elemento){
		alert("Ya se ha eliminado el elemento :)");
	} else {
        padre.removeChild(elemento);
	}
}

// Atributos personalizados

function mostrarEdades() {

    let nombreAna = document.getElementById('nombreAna');
    let edadAna = nombreAna.dataset.edad;
    nombreAna.innerHTML = nombreAna.innerHTML + " (edad: " + edadAna + ")";

    let nombreAlfonso = document.getElementById('nombreAlfonso');
    let edadAlfonso = nombreAlfonso.dataset.edad;
    nombreAlfonso.innerHTML = nombreAlfonso.innerHTML + " (edad: " + edadAlfonso + ")";

    let nombreSergio = document.getElementById('nombreSergio');
    let edadSergio = nombreSergio.dataset.edad;
    nombreSergio.innerHTML = nombreSergio.innerHTML + " (edad: " + edadSergio + ")";
}

function mediaEdades() {
    let nombreAna = document.getElementById('nombreAna');
    let edadAna = nombreAna.dataset.edad;
    
    let nombreAlfonso = document.getElementById('nombreAlfonso');
    let edadAlfonso = nombreAlfonso.dataset.edad;
    
    let nombreSergio = document.getElementById('nombreSergio');
    let edadSergio = nombreSergio.dataset.edad;

    let media = (parseInt(edadAna) + parseInt(edadAlfonso) + parseInt(edadSergio)) / 3;
    
    let mostrarMedia = document.getElementById('mostrarMedia');

    mostrarMedia.innerHTML = "Edad media: " + media;
}