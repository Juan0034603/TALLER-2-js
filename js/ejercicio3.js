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


document.body.style.margin = '0px'
document.body.style.fontFamily = 'Arial, sans-serif'
document.body.style.backgroundColor = '#000000'
document.body.style.color = '#ffffff'


const faLink = crearElemento('link')
faLink.rel = 'stylesheet'
faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
document.head.appendChild(faLink)


const headerContainer = crearElemento('div')
headerContainer.style.display = 'flex'
headerContainer.style.flexDirection = 'column'
headerContainer.style.alignItems = 'center'
headerContainer.style.borderBottom = '1px solid #333'
headerContainer.style.padding = '20px 0'
adicionarElementoABody(headerContainer)


const logo = crearElementoConTexto('div', 'YOUR LOGO')
logo.style.fontWeight = 'bold'
logo.style.fontSize = '24px'
logo.style.marginBottom = '15px'
adicionarElementoAContenedor(logo, headerContainer)


const navMenu = crearElemento('nav')
navMenu.style.display = 'flex'
navMenu.style.gap = '25px'
adicionarElementoAContenedor(navMenu, headerContainer)


const menuItems = ['Home', 'About us', 'Trends', 'Training']
menuItems.forEach(item => {
    const enlace = crearElementoConTexto('a', item)
    enlace.style.color = '#ffffff'
    enlace.style.textDecoration = 'none'
    enlace.style.fontSize = '14px'
    enlace.href = '#'
    adicionarElementoAContenedor(enlace, navMenu)
})


const seccionPrincipal = crearElemento('section')
seccionPrincipal.style.height = '400px'
seccionPrincipal.style.backgroundImage = "url('../recursos/entrenadorimagenuno.webp')"
seccionPrincipal.style.backgroundSize = 'cover'
seccionPrincipal.style.backgroundPosition = 'center'
seccionPrincipal.style.position = 'relative'
seccionPrincipal.style.marginBottom = '40px'
adicionarElementoABody(seccionPrincipal)


const contenidoPrincipal = crearElemento('div')
contenidoPrincipal.style.position = 'absolute'
contenidoPrincipal.style.bottom = '80px'
contenidoPrincipal.style.left = '40px'
contenidoPrincipal.style.maxWidth = '60%'
adicionarElementoAContenedor(contenidoPrincipal, seccionPrincipal)

const tituloPrincipal = crearElementoConTexto('h1', 'WORKOUT')
tituloPrincipal.style.fontSize = '48px'
tituloPrincipal.style.margin = '0'
tituloPrincipal.style.fontWeight = 'bold'
adicionarElementoAContenedor(tituloPrincipal, contenidoPrincipal)

const parrafoPrincipal = crearElementoConTexto('p', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula commodo odio.')
parrafoPrincipal.style.fontSize = '14px'
parrafoPrincipal.style.marginTop = '10px'
parrafoPrincipal.style.marginBottom = '20px'
adicionarElementoAContenedor(parrafoPrincipal, contenidoPrincipal)

const botonPrincipal = crearElementoConTexto('button', 'GET STARTED')
botonPrincipal.style.backgroundColor = '#ffffff'
botonPrincipal.style.color = '#000000'
botonPrincipal.style.border = 'none'
botonPrincipal.style.padding = '8px 15px'
botonPrincipal.style.fontSize = '12px'
botonPrincipal.style.cursor = 'pointer'
adicionarElementoAContenedor(botonPrincipal, contenidoPrincipal)


const seccionNewsletter = crearElemento('section')
seccionNewsletter.style.padding = '0 40px 40px'
seccionNewsletter.style.display = 'flex'
seccionNewsletter.style.justifyContent = 'space-between'
seccionNewsletter.style.alignItems = 'center'
seccionNewsletter.style.marginBottom = '40px'
seccionNewsletter.style.borderBottom = '1px solid #333'
adicionarElementoABody(seccionNewsletter)

const textoNewsletter = crearElemento('div')
textoNewsletter.style.flex = '1'
adicionarElementoAContenedor(textoNewsletter, seccionNewsletter)

const tituloNewsletter = crearElementoConTexto('h2', 'Subscribe our Newsletter')
tituloNewsletter.style.fontSize = '24px'
tituloNewsletter.style.margin = '0 0 10px'
adicionarElementoAContenedor(tituloNewsletter, textoNewsletter)

const parrafoNewsletter = crearElementoConTexto('p', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula commodo odio.')
parrafoNewsletter.style.fontSize = '14px'
parrafoNewsletter.style.margin = '0'
adicionarElementoAContenedor(parrafoNewsletter, textoNewsletter);

const botonNewsletter = crearElementoConTexto('button', 'GET IT NOW')
botonNewsletter.style.backgroundColor = 'transparent'
botonNewsletter.style.color = '#ffffff'
botonNewsletter.style.border = '1px solid #ffffff'
botonNewsletter.style.padding = '8px 15px'
botonNewsletter.style.fontSize = '12px'
botonNewsletter.style.marginTop = '15px'
botonNewsletter.style.cursor = 'pointer'
adicionarElementoAContenedor(botonNewsletter, textoNewsletter)

const descuentoNewsletter = crearElemento('div')
descuentoNewsletter.style.position = 'relative'
adicionarElementoAContenedor(descuentoNewsletter, seccionNewsletter)

const bannerDescuento = crearElementoConTexto('div', '30%<br>OFF')
bannerDescuento.style.backgroundColor = '#ffffff'
bannerDescuento.style.color = '#000000'
bannerDescuento.style.padding = '8px 15px'
bannerDescuento.style.textAlign = 'center'
bannerDescuento.style.fontWeight = 'bold'
bannerDescuento.style.fontSize = '18px'
bannerDescuento.style.lineHeight = '1.2'
adicionarElementoAContenedor(bannerDescuento, descuentoNewsletter)


function crearTarjeta(titulo, texto, rutaImagen) {
    const tarjeta = crearElemento('div')
    tarjeta.style.display = 'flex'
    tarjeta.style.marginBottom = '20px'
    tarjeta.style.borderBottom = '1px solid #333'
    tarjeta.style.paddingBottom = '20px'
    

    const imagenArea = crearElemento('div')
    imagenArea.style.backgroundImage = `url('${rutaImagen}')`
    imagenArea.style.backgroundSize = 'cover'
    imagenArea.style.backgroundPosition = 'center'
    imagenArea.style.width = '40%'
    imagenArea.style.minHeight = '150px'
    adicionarElementoAContenedor(imagenArea, tarjeta)
    

    const textoArea = crearElemento('div')
    textoArea.style.padding = '0 20px'
    textoArea.style.flex = '1'
    adicionarElementoAContenedor(textoArea, tarjeta)
    
    const tituloTarjeta = crearElementoConTexto('h3', titulo)
    tituloTarjeta.style.fontSize = '24px'
    tituloTarjeta.style.margin = '0 0 10px'
    adicionarElementoAContenedor(tituloTarjeta, textoArea)
    
    const parrafoTarjeta = crearElementoConTexto('p', texto)
    parrafoTarjeta.style.fontSize = '14px'
    parrafoTarjeta.style.margin = '0 0 15px'
    adicionarElementoAContenedor(parrafoTarjeta, textoArea)
    
    const enlaceTarjeta = crearElementoConTexto('a', 'Check more our site  →')
    enlaceTarjeta.style.color = '#ffffff'
    enlaceTarjeta.style.fontSize = '12px'
    enlaceTarjeta.style.textDecoration = 'none'
    enlaceTarjeta.href = '#'
    adicionarElementoAContenedor(enlaceTarjeta, textoArea)

    return tarjeta
}


const seccionTarjetas = crearElemento('section')
seccionTarjetas.style.padding = '0 40px'
adicionarElementoABody(seccionTarjetas)


const tarjeta1 = crearTarjeta('BUILD YOUR BODY', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula commodo odio.', '../recursos/entrenaruno.jpg')
adicionarElementoAContenedor(tarjeta1, seccionTarjetas)

const tarjeta2 = crearTarjeta('Training Everyday', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula commodo odio.', '../recursos/entrenardos.jpg')
adicionarElementoAContenedor(tarjeta2, seccionTarjetas)

const tarjeta3 = crearTarjeta('MORE STRONGER', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula commodo odio.', '../recursos/entrenartres.webp')
adicionarElementoAContenedor(tarjeta3, seccionTarjetas)

const pieDePagina = crearElemento('footer')
pieDePagina.style.padding = '20px 40px'
pieDePagina.style.display = 'flex'
pieDePagina.style.justifyContent = 'space-between'
pieDePagina.style.borderTop = '1px solid #333'
pieDePagina.style.fontSize = '12px'
adicionarElementoABody(pieDePagina)

const footerLinks = ['Newsletter', 'Settings', 'Privacy policy']
footerLinks.forEach(item => {
    const enlace = crearElementoConTexto('a', item)
    enlace.style.color = '#888'
    enlace.style.textDecoration = 'none'
    enlace.style.marginRight = '20px'
    enlace.href = '#'
    adicionarElementoAContenedor(enlace, pieDePagina);
});