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


const header = crearElemento('header')
header.style.background = '#fcfcfc'
header.style.padding = '50px'
header.style.textAlign = 'center'
header.style.fontSize = '24px'
header.style.color = 'black'
adicionarElementoABody(header)


let titulo = crearElementoConTexto('h1', 'YOUR LOGO')
titulo.style.border = '2px solid black'
titulo.style.display = 'inline'
titulo.style.padding = '10px 10px'
adicionarElementoAContenedor(titulo, header)


const section = crearElemento('section')
section.style.margin = '0px'
section.style.backgroundColor = '#ede8e8'
section.style.padding = '50px 0px'
adicionarElementoABody(section)


const div1 = crearElemento('div')
div1.style.backgroundImage = "url('../recursos/div1img.jpg')"
div1.style.height = '600px'
div1.style.backgroundSize = '100% 100%';
div1.style.backgroundRepeat = 'no-repeat'
div1.style.backgroundPosition = 'center'
div1.style.textAlign = 'center'
div1.style.display = 'flex'
div1.style.flexDirection = 'column'
div1.style.justifyContent = 'center'
adicionarElementoAContenedor(div1, section)

let tituloSection1 = crearElementoConTexto('h1', 'STYLE')
tituloSection1.style.fontSize = '200px'
tituloSection1.style.color = 'white'
adicionarElementoAContenedor(tituloSection1, div1)


const div2 = crearElemento('div')
div2.style.textAlign = 'center'
adicionarElementoAContenedor(div2, section)

let tituloDiv2 = crearElementoConTexto('h1', 'UP TO 50%OFF')
tituloDiv2.style.fontSize = '80px'

let parrafoDiv2 = crearElementoConTexto('p', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita temporibus <br> natus dolores impedit, soluta sed dolore ullam omnis eos, nobis error molestiae')
parrafoDiv2.style.fontSize = '30px'
parrafoDiv2.style.lineHeight = '1.5'


const botonDos = crearElementoConTexto('button', 'SHOP NOW');
botonDos.style.padding = '32px 130px'
botonDos.style.margin = '30px'
botonDos.style.fontSize = '40px'
botonDos.style.background = '#fe9901'
botonDos.style.color = '#fff'
botonDos.style.border = 'none'
botonDos.style.cursor = 'pointer'


adicionarElementoAContenedor(tituloDiv2, div2)
adicionarElementoAContenedor(parrafoDiv2, div2)
adicionarElementoAContenedor(botonDos, div2)





const section2 = crearElemento('section')
section2.style.display = 'flex'
section2.style.justifyContent = 'space-between'
section2.style.margin = '0px'
adicionarElementoABody(section2)



const divSection2 = crearElemento('div')
divSection2.style.backgroundImage = "url('../recursos/section2img.avif')"
divSection2.style.height = '900px'
divSection2.style.width = '850px'
divSection2.style.backgroundSize = '120% 100%';
divSection2.style.backgroundPosition = 'center'
divSection2.style.backgroundPosition = 'center'
divSection2.style.backgroundRepeat = 'no-repeat'
adicionarElementoAContenedor(divSection2, section2)


const segundoDivSection2 = crearElemento('div')
section2.style.background = '#fe9901'
adicionarElementoAContenedor(segundoDivSection2, section2)


let tituloSection2 = crearElementoConTexto('h1', 'NEW STYLE')
tituloSection2.style.fontSize = '90px'
tituloSection2.style.color = 'white'
tituloSection2.style.paddingBottom = '10px'
tituloSection2.style.paddingTop = '140px'
tituloSection2.style.marginRight = '50px'
adicionarElementoAContenedor(tituloSection2, segundoDivSection2)


let parrafoSection2 = crearElementoConTexto('p', 'Lorem ipsum dolor sit <br> amet consectetur adipisicing elit. <br> Expedita temporibus natus ')
parrafoSection2.style.fontSize = '37px'
parrafoSection2.style.textAlign = 'center'
adicionarElementoAContenedor(parrafoSection2, segundoDivSection2)


const boton = crearElementoConTexto('button', 'BUY NOW')
boton.style.padding = '18px 130px'
boton.style.margin = '50px 70px'
boton.style.fontSize = '40px'
boton.style.background = '#000000'
boton.style.color = '#fff'
boton.style.border = 'none'
boton.style.cursor = 'pointer'
adicionarElementoAContenedor(boton, segundoDivSection2)


const pieDePagina = crearElemento('footer')
adicionarElementoABody(pieDePagina)


let tituloPieDePagina = crearElementoConTexto('h1', 'FOLLOW ALONG WITH US')
tituloPieDePagina.style.fontSize = '40px'
tituloPieDePagina.style.textAlign = 'center'
adicionarElementoAContenedor(tituloPieDePagina, pieDePagina)

const faLink = crearElemento('link');
faLink.rel = 'stylesheet';
faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
document.head.appendChild(faLink);

const contenedorRedes = crearElemento('div');
contenedorRedes.style.display = 'flex';
contenedorRedes.style.justifyContent = 'center';
contenedorRedes.style.gap = '16px';
contenedorRedes.style.marginTop = '30px';


const redes = [
    { clase: 'fab fa-facebook-f', enlace: '#' },
    { clase: 'fab fa-instagram', enlace: '#' },
    { clase: 'fab fa-twitter', enlace: '#' }
];


redes.forEach(({ clase, enlace }) => {
    const a = crearElemento('a')
    a.href = enlace
    a.style.textDecoration = 'none';


    const icono = crearElemento('i');
    icono.className = clase;


    icono.style.backgroundColor = '#fe9901';
    icono.style.color = 'white';
    icono.style.borderRadius = '50%';
    icono.style.padding = '12px';
    icono.style.fontSize = '20px';
    icono.style.width = '40px';
    icono.style.height = '40px';
    icono.style.display = 'flex';
    icono.style.justifyContent = 'center';
    icono.style.alignItems = 'center';

    adicionarElementoAContenedor(icono, a);
    adicionarElementoAContenedor(a, contenedorRedes);
});


adicionarElementoAContenedor(contenedorRedes, pieDePagina);




let parrafoPieDePagina = crearElementoConTexto('p', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita temporibus natus  dolores impedit, soluta sed <br> doloe ullam omnis eos, nobis error molestiae excepturi culpa accusantium magnam veniam.')
parrafoPieDePagina.style.fontSize = '17px'
parrafoPieDePagina.style.textAlign = 'center'
adicionarElementoAContenedor(parrafoPieDePagina, pieDePagina)