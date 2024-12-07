const palabras = ["sol", "luna", "mar", "flor", "árbol", "perro", "gato", "coche", "mesa", "silla", "libro", "pluma", "puerta", "ventana", "camino", "puente", "montaña", "río", "bosque", "playa", "isla", "ciudad", "pueblo", "barrio", "escuela", "parque", "cielo", "estrella", "nube", "tierra", "fuego", "agua", "vino", "pan", "queso", "manzana", "naranja", "uva", "limón", "reloj", "pared", "techo", "suelo", "cama", "almohada", "televisor", "radio", "lámpara", "foto"];

let palabraOculta = '';
let palabraMostrada = [];
let errores = 0;
let aciertos = 0;
const MAX_ERRORES = 6; // Número máximo de errores permitidos

function palabrasRandom() {
  const verPalabras = palabras.length;
  const indiceAleatorio = Math.floor(Math.random() * verPalabras);
  const palabraRandom = palabras[indiceAleatorio];
  return palabraRandom;
}

function iniciarJuego() {
  palabraOculta = palabrasRandom();
  palabraMostrada = Array(palabraOculta.length).fill('_');
  document.getElementById("numeroLetras").textContent = palabraMostrada.join(' ');
}

function manejarTecla(tecla) {
  let acierto = false;

  for (let i = 0; i < palabraOculta.length; i++) {
    if (palabraOculta[i] === tecla) {
      palabraMostrada[i] = tecla;
      acierto = true;
      aciertos++;
    }
  }

  if (acierto) {
    document.getElementById("numeroLetras").textContent = palabraMostrada.join(' ');
    document.getElementById("contadorAciertos").textContent = aciertos;
  } else {
    errores++;
    document.getElementById("contadorErrores").textContent = errores;
    actualizarMonigote(errores);
  }

  if (palabraMostrada.join('') === palabraOculta) {
    alert('¡Has ganado!');
  }

  if (errores === MAX_ERRORES) {
    alert('¡Has perdido! La palabra era: ' + palabraOculta);
  }
}

function actualizarMonigote(errores) {
  const imagenMonigote = document.getElementById("imagenMonigoteImg");
  imagenMonigote.src = `img/monigote${errores}.png`; // Cambia la imagen según el número de errores
}


// Inicializar el teclado
document.addEventListener('DOMContentLoaded', () => {
  iniciarJuego();
  const teclado = document.getElementById('teclado');
  const teclas = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

  teclas.forEach(tecla => {
    const boton = document.createElement('button');
    boton.textContent = tecla;
    boton.classList.add('tecla');
    boton.addEventListener('click', () => {
      boton.disabled = true;
      manejarTecla(tecla);
    });
    teclado.appendChild(boton);
  });
});
