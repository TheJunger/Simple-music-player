const menuDesplegado = document.querySelector(".label")
const menuBarras = document.querySelector(".artmenuicon")
const container = document.querySelector(".container")
const mensajeCont = document.querySelector(".statuscontainer")
const barra= document.querySelector(".bar")

const opcionUno = document.querySelector(".cancionUno")
const opcionDos = document.querySelector(".cancionDos")
const opcionTres = document.querySelector(".cancionTres")
const opcionCuatro = document.querySelector(".cancionCuatro")
const opcionCinco = document.querySelector(".cancionCinco")

const tituloCancion = document.querySelector(".titulocancion")
const artistaCancion = document.querySelector(".artista")

const duracionCancionTt = document.querySelector(".duracionTotal")
const duracionActualC = document.querySelector(".duracionActual")

const frasesCancion = document.querySelector(".mensaje")

const imagenCancion = document.querySelector(".artcontainer") // background-image url

const reproducir = document.querySelector(".rrep")
const pausar = document.querySelector(".rpausar")
const siguienteC = document.querySelector(".radelante")
const anteriorC = document.querySelector(".ratras")
const cancCont = document.createElement("AUDIO")

const canciones = {
    "canciones":[{
        "nombre": "9 de Julio",
        "artista": "Callejeros",
        "frase": "-",
        "rutaCancion": "./musicas/9deJulio.mp3",
        "rutaImagen": "./imagenes/callejeros.jpg"
    },
    {
        "nombre": "Hold The Line",
        "artista": "Toto",
        "frase": "Hold the line",
        "rutaCancion": "./musicas/HoldTheLine.mp3",
        "rutaImagen": "./imagenes/toto.jpg"    
    },
    {
        "nombre": "Como pasa el tiempo",
        "artista": "Cuarteto de Nos",
        "frase": "-",
        "rutaCancion": "./musicas/ComoPasaElTiempo.mp3",
        "rutaImagen": "./imagenes/cuarteto.jpg"    
    },
    {
        "nombre": "Smooth Criminal",
        "artista": "Michael Jackson",
        "frase": "Smooth Criminal",
        "rutaCancion": "./musicas/SmoothCriminal.mp3",
        "rutaImagen": "./imagenes/michael.jpg"    
    },
    {
        "nombre": "Madrugada",
        "artista": "La Beriso",
        "frase": "-",
        "rutaCancion": "./musicas/Madrugada.mp3",
        "rutaImagen": "./imagenes/beriso.jpg"   
    }]
}

const nombresCancion = async () =>{
    const arr = canciones.canciones

    opcionUno.textContent = `${arr[0].nombre} - ${arr[0].artista}`
    opcionDos.textContent = `${arr[1].nombre} - ${arr[1].artista}`
    opcionTres.textContent = `${arr[2].nombre} - ${arr[2].artista}`
    opcionCuatro.textContent = `${arr[3].nombre} - ${arr[3].artista}`
    opcionCinco.textContent = `${arr[4].nombre} - ${arr[4].artista}`
}

menuBarras.addEventListener("click", ()=>{
    menuDesplegado.style.top="0"
    nombresCancion()
})

menuDesplegado.addEventListener("click", ()=>{
    menuDesplegado.style.top="-1000px"
})

mensajeCont.addEventListener("click", ()=>{
    menuDesplegado.style.top="-1000px"
})

let x=0
let reproduciendo = false


const cargarCancion = async (numero) => {
    const arr = canciones.canciones

    let nomCancion = arr[numero].nombre
    let artCancion = arr[numero].artista
    let fraseCancion = arr[numero].frase
    let imgCancion = arr[numero].rutaImagen
    let cancion = arr[numero].rutaCancion

    tituloCancion.textContent = nomCancion
    artistaCancion.textContent = artCancion

    frasesCancion.textContent = fraseCancion
    imagenCancion.style.backgroundImage = `url('${imgCancion}')`

    if(reproduciendo == false) {
        cancCont.setAttribute("src",`${null}`)
        cancCont.setAttribute("src",`${cancion}`)
        cancCont.setAttribute("autoplay","true")
        cancCont.addEventListener("loadeddata", ()=>{
            let duracionMaxima = cancCont.duration
            let duracionMaximaMin = Math.floor(duracionMaxima/60);
            let duracionMaximaSec = duracionMaxima - duracionMaximaMin * 60;
            duracionCancionTt.textContent = (`${duracionMaximaMin}:${Math.floor(duracionMaximaSec)}`)
            barra.setAttribute("max", `${duracionMaxima}`)
    
        })
        cancCont.addEventListener("timeupdate", () =>{
            let timeact = Math.floor(cancCont.currentTime)
            barra.setAttribute("value",timeact)
            let duracionActualMin = Math.floor(timeact/60);
            let duracionActualSec = timeact - duracionActualMin * 60;
            duracionActualC.textContent = `${duracionActualMin}:${duracionActualSec}`
            if(duracionActualSec < 10){
                duracionActualC.textContent = `${duracionActualMin}:0${duracionActualSec}`
            }
        })
        cancCont.addEventListener("ended", () =>{
            if (c < 4) {
                c++
                cargarCancion(c)
            }
            else if (c == 4) {
                c=0
                cargarCancion(c)
            }
        })
        reproduciendo = true
    }

    if(reproduciendo == true){
        cancCont.setAttribute("src",`${null}`)
        cancCont.setAttribute("src",`${cancion}`)
        cancCont.setAttribute("autoplay","true")
        cancCont.addEventListener("loadeddata", ()=>{
            let duracionMaxima = cancCont.duration
            let duracionMaximaMin = Math.floor(duracionMaxima/60);
            let duracionMaximaSec = duracionMaxima - duracionMaximaMin * 60;
            duracionCancionTt.textContent = (`${duracionMaximaMin}:${Math.floor(duracionMaximaSec)}`)
            barra.setAttribute("max", `${duracionMaxima}`)
    
        })
        cancCont.addEventListener("timeupdate", () =>{
            let timeact = Math.floor(cancCont.currentTime)
            barra.setAttribute("value",timeact)
            let duracionActualMin = Math.floor(timeact/60);
            let duracionActualSec = timeact - duracionActualMin * 60;
            duracionActualC.textContent = `${duracionActualMin}:${duracionActualSec}`
            if(duracionActualSec < 10){
                duracionActualC.textContent = `${duracionActualMin}:0${duracionActualSec}`
            }
        })
        reproduciendo = true
        cancCont.addEventListener("ended", () =>{
            if (c < 4) {
                c++
                cargarCancion(c)
            }
            else if (c == 4) {
                c=0
                cargarCancion(c)
            }
        })
    }
    x=0
    comprobacion()
    comprobacion2()

}
let c=undefined

let comprobacion2 = () =>{
    if (c==0){
        anteriorC.style.color = "gray"
        siguienteC.style.color = "rgb(255, 172, 47)"
    }
    else if(c==4){
        siguienteC.style.color = "gray"
        anteriorC.style.color ="rgb(255, 172, 47)"
    }
    else{
        anteriorC.style.color ="rgb(255, 172, 47)"
        siguienteC.style.color = "rgb(255, 172, 47)"

    }
}

anteriorC.addEventListener("click",()=>{
    if(c>0){
        console.log(c)
        c--
        console.log(c)
        cancCont.setAttribute("src","null")
        cargarCancion(c)

    }
    else{
        console.log("no se puede volver atras")
    }
})

siguienteC.addEventListener("click",()=>{
    if(c<4){
        console.log(c)
        c++
        console.log(c)
        cancCont.setAttribute("src","null")
        cargarCancion(c)

    }
    else{
        console.log("no se puede seguir avanzando")
    }
})

opcionUno.addEventListener("click", ()=>{
    c=0
    cargarCancion(0)
})

opcionDos.addEventListener("click", ()=>{
    c=1
    cargarCancion(1)
})

opcionTres.addEventListener("click", ()=>{
    c=2
    cargarCancion(2)
})

opcionCuatro.addEventListener("click", ()=>{
    c=3
    cargarCancion(3)
})

opcionCinco.addEventListener("click", ()=>{
    c=4
    cargarCancion(4)
})

// play/pause event

let rep = () =>{
    cancCont.play()
    x--
    comprobacion()
}

let pse = () =>{
    cancCont.pause()
    x++
    comprobacion()
}

reproducir.addEventListener("click", ()=>{
    rep()
})

pausar.addEventListener("click", ()=>{
    pse()
})

const comprobacion = () =>{
    if (x == 1){
        pausar.style.display = "none"
        reproducir.style.display="inline"
    }
    else{
        pausar.style.display = "inline"
        reproducir.style.display="none"
    }
}

