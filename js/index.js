function crearElemento(tag) {
    return document.createElement(tag)
}

function crearElementoConTexto(tag, texto) {
    let elemento = crearElemento(tag)
    elemento.innerHTML = texto
    return elemento
}

function adicionarElementoAContenedor(elemento, contenedor) {
    contenedor.appendChild(elemento)
}

function adicionarElementoABody(nodo) {
    document.body.appendChild(nodo)
}


document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background = "linear-gradient(to right, #2c3e50, #3498db)"
document.body.style.color = "white"
document.body.style.textAlign = "center"
document.body.style.paddingTop = "100px"


let titulo = crearElementoConTexto("h1", "Selecciona un ejercicio")
adicionarElementoABody(titulo);


const paginas = [
  { nombre: "Ejercicio 1", ruta: "html/ejercicio1.html" },
  { nombre: "Ejercicio 2", ruta: "html/ejercicio2.html" },
  { nombre: "Ejercicio 3", ruta: "html/ejercicio3.html" }
];

paginas.forEach(pagina => {
  let boton = crearElementoConTexto("button", pagina.nombre)

  boton.onclick = () => {
    location.href = pagina.ruta
  };

  boton.style.margin = "15px"
  boton.style.padding = "12px 20px"
  boton.style.fontSize = "16px"
  boton.style.border = "none"
  boton.style.borderRadius = "10px"
  boton.style.backgroundColor = "#1abc9c"
  boton.style.color = "white"
  boton.style.cursor = "pointer"

  adicionarElementoABody(boton)
});