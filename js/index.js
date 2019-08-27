/*
var elemento = document.createElement("h2");

var contenido = document.createTextNode("Este es el titulo");

elemento.appendChild(contenido);

elemento.setAttribute("align", "center");

document.getElementById("sub").appendChild(elemento);



let etiquetasConPadre = ["li","td","th"];





var etiquetasConPadre = ["li","td","th"];


var tienePadre = function(etiqueta){
	



var condicional = etiquetasConPadre.includes("li");





return condicional;
}


var alerto = tienePadre("h2");
console.log(alerto);


//AgregarElemento("h2","Este es el contenidooooo");




 let elemento = document.getElementById("sub");

elemento.innerHTML = "HOLA <i class=\"foo\">Hola como va tu vieja</i>";




var contenido = {


	nombre: "Alberto ",
	apellido:"Gomez",
	usuario: "albertito242354",
	ciudad: "buenos aires"



};








function AgregarFila(contenido){





var elemento = document.createElement("td");

contenido = document.createTextNode(contenido);


elemento.body.appendChild(contenido);

var padre = document.getElementsByTagName("td")[0].parentNode;

referencia = document.getElementsByTagName("td")[0];


};




AgregarFila("perro");





var run = function(){


var formulario = document.getElementsByName('formulario')[0],
elementos =formulario.elements,
boton = document.getElementById('btn');

simbolos = ["!","'","#","&","%"];

abc = formulario.nombre.value;

console.log(abc);

validarNombre = function(e){





if(formulario.nombre.value == 0 ){

alert("Escribi el Nombre");
e.preventDefault();
}


alert(inputNombre);




};


var validar = function(e){
validarNombre();

};

formulario.addEventListener("submit", validar);


};



run();

*/



var myCounter = {
    number : 0,
    plusPlus : function(){
        this.number : this.number + 1;
    },
    isGreaterThanTen : function(){
        return this.number > 10;
    }
}



console.log(myCounter.isGreaterThanTen);


