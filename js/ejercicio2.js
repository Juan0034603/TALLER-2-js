function crearElemento(tag) {
  return document.createElement(tag);
}

function crearElementoConTexto(tag, texto) {
  let elemento = crearElemento(tag);
  elemento.innerHTML = texto;
  return elemento
}

function adicionarElementoAContenedor(elemento, contenedor) {
  contenedor.appendChild(elemento)
}

function adicionarElementoABody(nodo) {
  document.body.appendChild(nodo)
}

document.body.style.margin = '0px 0px'
document.body.style.fontFamily = 'Arial, sans-serif'


const encabezado = crearElemento('div')
encabezado.style.textAlign = 'center'
encabezado.style.padding = '20px'
adicionarElementoABody(encabezado)



const logo = crearElementoConTexto('span', 'YOUR ')
logo.style.color = '#1b3a57'
logo.style.fontWeight = 'bold'
logo.style.fontSize = '50px'
adicionarElementoAContenedor(logo, encabezado);

const logo2 = crearElementoConTexto('span', 'LOGO')
logo2.style.color = '#5885a2'
logo2.style.fontSize = '50px'
adicionarElementoAContenedor(logo2, encabezado)


const titulo = crearElementoConTexto('h1', 'THE BLOG')
titulo.style.color = '#f5c1b6'
titulo.style.fontWeight = 'bold'
titulo.style.fontSize = '110px'
titulo.style.marginTop = '10px'
titulo.style.marginBottom = '10px'

adicionarElementoAContenedor(titulo, encabezado);





const section = crearElemento('section')
section.style.backgroundImage = "url('../recursos/mujerpunto2.avif')"
section.style.height = '970px'
section.style.backgroundSize = '100% 100%'
section.style.backgroundRepeat = 'no-repeat'
section.style.backgroundPosition = 'center'
section.style.textAlign = 'center'
section.style.display = 'flex'
section.style.justifyContent = 'flex-end'
section.style.textAlign = 'left'
adicionarElementoABody(section)



const div = crearElemento('div')
div.style.marginRight = '70px'
adicionarElementoAContenedor(div, section)




let tituloDivUno = crearElementoConTexto('h1', 'New Season')
tituloDivUno.style.color = '#1b3a57'
tituloDivUno.style.fontSize = '100px'
tituloDivUno.style.marginBottom = '0px'
tituloDivUno.style.marginTop = '150px'
adicionarElementoAContenedor(tituloDivUno, div)

let tituloDosDivUno = crearElementoConTexto('h1', 'Fashion Trends')
tituloDosDivUno.style.color = '#5885a2'
tituloDosDivUno.style.fontSize = '100px'
tituloDosDivUno.style.marginTop = '0px'
tituloDosDivUno.style.marginBottom = '0px'
adicionarElementoAContenedor(tituloDosDivUno, div)


let parrafoDivUno = crearElementoConTexto('p', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Repellendus <br> soluta minima, facilis aliquid consectetur impedit <br> officiis pariatur excepturi ut aperiam natus quos voluptatibus. <br> Quasi numquam perspiciatis accusamus eius tempore laborum. <br> Repellendus soluta minima, facilis aliquid consectetur')
parrafoDivUno.style.fontSize = '23px'
parrafoDivUno.style.color = '#5885a2'
parrafoDivUno.style.lineHeight = '2'
adicionarElementoAContenedor(parrafoDivUno, div)


const boton = crearElementoConTexto('button', 'Shop Now')
boton.style.backgroundColor = '#004b80'
boton.style.color = 'white'
boton.style.border = 'none'
boton.style.padding = '18px 86px'
boton.style.borderRadius = '30px'
boton.style.fontWeight = 'bold'
boton.style.fontSize = '25px'
boton.style.cursor = 'pointer'
adicionarElementoAContenedor(boton, div)




const sectionFashionHits = crearElemento('section')
sectionFashionHits.style.textAlign = 'center'
sectionFashionHits.style.padding = '20px'
adicionarElementoABody(sectionFashionHits)


const tituloSectionDos = crearElementoConTexto('h2', 'Fashion Hits')
tituloSectionDos.style.color = '#004b80'
tituloSectionDos.style.fontWeight = 'bold'
tituloSectionDos.style.fontSize = '80px'
adicionarElementoAContenedor(tituloSectionDos, sectionFashionHits)


const contenedorColumnas = crearElemento('div')
contenedorColumnas.style.display = 'flex'
contenedorColumnas.style.justifyContent = 'space-around'
contenedorColumnas.style.marginTop = '20px'


const items = [
  {
    imagen: '../recursos/imgpuntounopuntodos.jpg',
    titulo: 'Title',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Your description goes here. Lorem ipsum dolor sit amet, consectetur',
  },
  {
    imagen: '../recursos/imgpuntodospuntodos.jpg',
    titulo: 'Title',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Your description goes here. Lorem ipsum dolor sit amet, consectetur',
  },
  {
    imagen: '../recursos/imgpuntounopuntodos.jpg',
    titulo: 'Title',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Your description goes here. Lorem ipsum dolor sit amet, consectetur',
  },
];

items.forEach(({ imagen, titulo: tit, descripcion }) => {
  const columna = crearElemento('div')
  columna.style.width = '30%'
  columna.style.textAlign = 'center'


  const img = crearElemento('img')
  img.src = imagen;
  img.style.width = '400px'
  img.style.height = '600px'
  img.style.objectFit = 'cover'
  img.style.borderRadius = '8px'
    adicionarElementoAContenedor(img, columna)


  const t = crearElementoConTexto('h3', tit)
  t.style.color = '#004b80'
  t.style.fontWeight = 'bold'
  t.style.marginTop = '10px'
  t.style.fontSize = '70px'
  t.style.marginBottom = '0px'
    adicionarElementoAContenedor(t, columna)



  const desc = crearElementoConTexto('p', descripcion)
  desc.style.fontSize = '23px'
  desc.style.color = '#5885a2'
    adicionarElementoAContenedor(desc, columna)


  const botonDos = crearElementoConTexto('button', 'Read more')
  botonDos.style.backgroundColor = '#004b80'
  botonDos.style.color = 'white'
  botonDos.style.border = 'none'
  botonDos.style.padding = '18px 86px'
  botonDos.style.borderRadius = '30px'
  botonDos.style.fontWeight = 'bold'
  botonDos.style.fontSize = '25px'
  botonDos.style.cursor = 'pointer'
    adicionarElementoAContenedor(botonDos, columna)



  adicionarElementoAContenedor(columna, contenedorColumnas)
});


adicionarElementoAContenedor(contenedorColumnas, sectionFashionHits)




const sectionTres = crearElemento('section')
sectionTres.style.display = 'flex'
sectionTres.style.backgroundImage = "url('../recursos/imagenfinalpuntodos.avif')" 
sectionTres.style.justifyContent = 'center'
sectionTres.style.backgroundRepeat = 'no-repeat'
sectionTres.style.alignItems = 'center'
sectionTres.style.padding = '50px'
sectionTres.style.margin = '50px'
sectionTres.style.gap = '20px'
sectionTres.style.justifyContent = 'flex-start'
sectionTres.style.width = '100vw'
sectionTres.style.height = '800px'
sectionTres.style.marginLeft = '0'
sectionTres.style.marginRight = '0'
sectionTres.style.backgroundSize = 'cover'
sectionTres.style.backgroundPosition = 'center'


const divTexto = crearElemento('div')
divTexto.style.backgroundColor = '#f9c6b1'
divTexto.style.color = 'white'
divTexto.style.padding = '55px'
divTexto.style.width = '40%'

const tituloSectionTres = crearElemento('h2')
tituloSectionTres.style.fontSize = '118px' 
tituloSectionTres.style.margin = '0'
tituloSectionTres.style.display = 'flex'
tituloSectionTres.style.flexDirection = 'column'
tituloSectionTres.style.lineHeight = '1.2'


const parteNegrilla = crearElementoConTexto('span', 'The Best')
parteNegrilla.style.fontWeight = 'bold'
parteNegrilla.style.fontStyle = 'italic'

const parteNormal = crearElementoConTexto('span', 'Collection')
parteNormal.style.fontWeight = 'normal'
parteNormal.style.fontStyle = 'italic'

adicionarElementoAContenedor(parteNegrilla, tituloSectionTres)
adicionarElementoAContenedor(parteNormal, tituloSectionTres)


adicionarElementoAContenedor(tituloSectionTres, divTexto)

const parrafo = crearElementoConTexto('p', 'Lorem ipsum consectetur  sit dolor sit amet, consectetur <br> adipiscing elit. here Your description goes here adipiscing. <br> consectetur here Lorem ipsum dolor sit amet, consectetur')
parrafo.style.marginTop = '15px'
parrafo.style.lineHeight = '1.8'
parrafo.style.fontSize = '20px' 

adicionarElementoAContenedor(parrafo, divTexto)

const botonTres = crearElemento('button')
botonTres.textContent = 'Shop Now'
botonTres.style.marginTop = '25px'
botonTres.style.backgroundColor = '#004d7a'
botonTres.style.color = 'white'
botonTres.style.border = 'none'
botonTres.style.padding = '18px 86px'
botonTres.style.borderRadius = '25px'
botonTres.style.cursor = 'pointer'
botonTres.style.fontSize = '25px'

adicionarElementoAContenedor(botonTres, divTexto)



adicionarElementoAContenedor(divTexto, sectionTres)
adicionarElementoABody(sectionTres)