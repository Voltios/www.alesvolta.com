let videoContainer = document.getElementsByClassName("video-container");


function accionPlay() {
    if (!medio.paused && !medio.ended) {
        medio.pause();
        play.value = '\u25BA'; //\u25BA
        videoContainer[0].style.backgroundColor = '#fff';
    } else {
        medio.play();
        play.value = '||';
        videoContainer[0].style.backgroundColor = '#daa646';
    }
}

function accionReiniciar() {
    medio.currentTime = 0;
    medio.pause();
    play.value = "►";
    //Usar propiedad .currentTime
    //Reproducir el vídeo
    //Cambiar el valor del botón a ||
}

function accionRetrasar() {
    // console.log(medio.currentTime);f
    medio.currentTime -= 2;

    //Usar propiedad .curentTime
    //Contemplar que no existen valores negativos
}

function accionAdelantar() {
    medio.currentTime += 2;
    //Contemplar que no existen valores mayores a medio.duration	
}

function accionSilenciar() {

    if (medio.muted == false) {
        medio.muted = true;
        sonido.value = "🔇";
    } else {
        medio.muted = false;
        sonido.value = "🔊";
    }
    //Utilizar medio.muted = true; o medio.muted = false;
}

function accionMasVolumen() {
    medio.volume += 0.1;
    // console.log(medio.volume + sonido.value);
    medio.volume > 0 ? sonido.value = "🔊" : sonido.value = "🔇";

    // console.log(medio.volume);
    //Contemplar que el valor máximo de volumen es 1
}

function accionMenosVolumen() {
    medio.volume -= 0.1;

    medio.volume <= 0 ? sonido.value = "🔇" : sonido.value = "🔊";
    //Contemplar que el valor mínimo de volumen es 0
}


function iniciar() {

    let medio = document.getElementById('medio');
    let play = document.getElementById('play');
    let reiniciar = document.getElementById('reiniciar');
    let retrasar = document.getElementById('retrasar');
    let adelantar = document.getElementById('adelantar');
    let silenciar = document.getElementById('silenciar');
    let sonido = document.getElementById("sonido");

    play.addEventListener('click', accionPlay);
    reiniciar.addEventListener('click', accionReiniciar);
    retrasar.addEventListener('click', accionRetrasar);
    adelantar.addEventListener('click', accionAdelantar);
    silenciar.addEventListener('click', accionSilenciar);
    menosVolumen.addEventListener('click', accionMenosVolumen);
    masVolumen.addEventListener('click', accionMasVolumen);
    sonido.addEventListener("click", accionSilenciar);
}

window.addEventListener('load', iniciar, false);