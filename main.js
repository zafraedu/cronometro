const body = document.querySelector("body");
const main = document.createElement("main");
body.appendChild(main);
main.innerHTML = `<div class='contador'><span class='minutos'>00</span>:<span class='segundos'>00</span></div><button class='boton-inicio'></button>`;

function Play() {
  var s = 0;
  var min = 0;

  function actualizaContador() {
    s++;
    if (s > 59) {
      min++;
      s = 00;
    }
    if (s < 10) {
      s = "0" + s;
    }
    if (min < 10) {
      min = "0" + min++;
    }
    document.querySelector(".minutos").innerHTML = min;
    document.querySelector(".segundos").innerHTML = s;
    botonPlay.removeEventListener("click", Play);
    botonPlay.addEventListener("click", Stop);
  }

  i = setInterval(actualizaContador, 1000);
  botonPlay.innerHTML = "stop";
}

function Stop() {
  botonPlay.innerHTML = "reset";
  clearInterval(i);
  botonPlay.addEventListener("click", Play);
}

var botonPlay = document.querySelector(".boton-inicio");
botonPlay.addEventListener("click", Play);
botonPlay.innerHTML = "Play";
