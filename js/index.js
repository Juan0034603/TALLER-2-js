const paginas = [
  { nombre: "Ejercicio 1", ruta: "html/ejercicio1.html" },
  { nombre: "Ejercicio 2", ruta: "html/ejercicio2.html" },
  { nombre: "Ejercicio 3", ruta: "html/ejercicio3.html" }
];

let titulo = crearElementoConTexto("h1", "Selecciona un ejercicio");
adicionarElementoABody(titulo);

paginas.forEach(pagina => {
  let boton = crearElementoConTexto("button", pagina.nombre);

  boton.onclick = function () {
    window.location.href = pagina.ruta;
  };

  // Puedes aplicar estilos directamente aquí si quieres
  boton.style.margin = "15px";
  boton.style.padding = "12px 20px";
  boton.style.fontSize = "16px";
  boton.style.border = "none";
  boton.style.borderRadius = "10px";
  boton.style.backgroundColor = "#1abc9c";
  boton.style.color = "white";
  boton.style.cursor = "pointer";

  adicionarElementoABody(boton);
});

// Opcional: Estilos globales al body
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background = "linear-gradient(to right, #2c3e50, #3498db)";
document.body.style.color = "white";
document.body.style.textAlign = "center";
document.body.style.paddingTop = "100px";