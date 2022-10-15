menuDesplegado = document.querySelector(".label")
menuBarras = document.querySelector(".artmenuicon")
container = document.querySelector(".container")
mensajeCont = document.querySelector(".statuscontainer")
barra= document.querySelector(".bar")

opcionUno = document.querySelector(".cancionUno")
opcionDos = document.querySelector(".cancionDos")
opcionTres = document.querySelector(".cancionTres")
opcionCuatro = document.querySelector(".cancionCuatro")
opcionCinco = document.querySelector(".cancionCinco")

tituloCancion = document.querySelector(".titulocancion")
artistaCancion = document.querySelector(".artista")

duracionCancionTt = document.querySelector(".duracionTotal")
duracionActualC = document.querySelector(".duracionActual")

frasesCancion = document.querySelector(".mensaje")
imagenCancion = document.querySelector(".artcontainer") // background-image url

reproducir = document.querySelector(".rrep")
pausar = document.querySelector(".rpausar")
siguienteC = document.querySelector(".radelante")
anteriorC = document.querySelector(".ratras")

const nombresCancion = async () =>{
    const request = await fetch("canciones.txt");
    const content = await request.json()
    const arr = content.canciones

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

x=0

const cargarCancion = async numero => {
    const request = await fetch("canciones.txt");
    const content = await request.json()
    const arr = content.canciones

    const nomCancion = arr[numero].nombre
    const artCancion = arr[numero].artista
    const duracionCancion = arr[numero].duracion
    const fraseCancion = arr[numero].frase
    const imgCancion = arr[numero].rutaImagen
    let cancion = arr[numero].rutaCancion

    tituloCancion.textContent = nomCancion
    artistaCancion.textContent = artCancion
    let duracionMaximaMin = Math.floor(duracionCancion/60);
    let duracionMaximaSec = duracionCancion - duracionMaximaMin * 60;
    duracionCancionTt.textContent = (`${duracionMaximaMin}:${duracionMaximaSec}`)
    frasesCancion.textContent = fraseCancion
    imagenCancion.style.backgroundImage = `url('${imgCancion}')`
    barra.setAttribute("max", `${duracionCancion}`)
    cancCont = document.createElement("AUDIO")
    cancCont.setAttribute("src",`${cancion}`)
    cancCont.setAttribute("autoplay","true")
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
            cancCont.setAttribute("src","null")
            console.log("cancion Cargada "+ c)
        }
        else if (c == 4) {
            c=0
            cargarCancion(c)
            cancCont.setAttribute("src","null")
            console.log("cancion Cargada "+ c)
        }
    })
    x=0
    comprobacion()
    comprobacion2()
}
c=undefined

let comprobacion2 = () =>{
    if (c==0){
        anteriorC.style.color = "gray"
    }
    else if(c==4){
        siguienteC.style.color = "gray"
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
        cargarCancion(c)
        cancCont.setAttribute("src","null")
        console.log(c)
    }
    else{
        console.log("no se puede volver atras")
    }
})

siguienteC.addEventListener("click",()=>{
    if(c<4){
        console.log(c)
        c++
        cargarCancion(c)
        cancCont.setAttribute("src","null")
        console.log(c)
    }
    else{
        console.log("no se puede seguir avanzando")
    }
})

cancCont = document.createElement("AUDIO")

opcionUno.addEventListener("click", ()=>{
    c=0
    console.log("Cancion uno seleciconada")
    cargarCancion(0)
    cancCont.setAttribute("src","null")
})

opcionDos.addEventListener("click", ()=>{
    c=1
    console.log("Cancion uno seleciconada")
    cargarCancion(1)
    cancCont.setAttribute("src","null")
})

opcionTres.addEventListener("click", ()=>{
    c=2
    console.log("Cancion uno seleciconada")
    cargarCancion(2)
    cancCont.setAttribute("src","null")
})

opcionCuatro.addEventListener("click", ()=>{
    c=3
    console.log("Cancion uno seleciconada")
    cargarCancion(3)
    cancCont.setAttribute("src","null")
})

opcionCinco.addEventListener("click", ()=>{
    c=4
    console.log("Cancion uno seleciconada")
    cargarCancion(4)
    cancCont.setAttribute("src","null")
})

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


