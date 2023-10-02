function crearNodo(tipoNodo){

    var nodo = document.createElement(tipoNodo);
    return nodo;

// return document.createElement(tipoNodo);

}

function crearNodoTexto(tipoNodo, texto) {

    var nodo = document.createElement(tipoNodo);
    var textoNodo = document.createTextNode(texto);
    nodo.appendChild(textoNodo);
    document.body.appendChild(nodo);

}