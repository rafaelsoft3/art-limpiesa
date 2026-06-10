let serieA = {
  nombre: "Los simpsons",
  categoria: "Entretenimiento",
  actores: ["Homero", "Lisa"],
};

let serieB = {
  nombre: "Los simpsons",
  categoria: "Entretenimiento",
  actores: ["Homero", "Lisa"],
};

let series = [serieA, serieB];

// esta es la función principal que recorre las series
// y crea los elementos principales
function pintarSeries() {
  // se limpia el contenedor cada vez que se pintan las series
  document.getElementById("contenido").innerHTML = "";
  
  
  series.forEach((serie, index) => {
  
    let ulElement = document.createElement("ul");

    let liElement = document.createElement("li");
    liElement.innerText = serie.nombre;

    let botonEliminar = document.createElement("button");
    botonEliminar.onclick = () => {
      // al eliminar se remueve el elemento 
      // del arreglo de series en el indice actual
      series.splice(index, 1);
      // luego se remueve el elemento html
      ulElement.remove();
      // se vuelven a pintar las series
      pintarSeries();
    };

    botonEliminar.innerText = "eliminar";

    liElement.appendChild(botonEliminar);

    let ulInterno = document.createElement("ul");

    agregarActores(ulInterno, serie.actores);
    liElement.appendChild(ulInterno);

    ulElement.appendChild(liElement);
    
    
    // agregar al contenedor la lista de series
    document.getElementById("contenido").appendChild(ulElement);
  });
}

function agregarActores(ulElement, actores) {
  // iterar la lista de actores
  actores.forEach((actor, index) => {
    // crear un elemento de la lista li
    let liElement = document.createElement("li");
    
    // agregar un elemento de texto al li
    // que contiene el nombre del actor
    liElement.appendChild(document.createTextNode(actor));

    // crear el botón que servirá para eliminar el actor
    let botonEliminar = document.createElement("button");
    // agregarle un texto al botón
    botonEliminar.appendChild(document.createTextNode("eliminar"));
    // agregar la función que se ejecutará cuando se presione
    // el botón
    botonEliminar.onclick = () => {
      // se remueve el elemento del arreglo de actores
      // se remueve el elemento html
      // y se pinta de nuevo la lista
      liElement.remove();
      actores.splice(index, 1);
      pintarSeries();
    };

    // agregar botón al li
    liElement.appendChild(botonEliminar);
    // agregar el li al ul
    ulElement.appendChild(liElement);
  });
}

pintarSeries();   