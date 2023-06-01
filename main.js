let contador = document.querySelector(".contador");
let botonS = document.querySelector("#start");
let botonR = document.querySelector("#reset");
var min = 0;
seg = 0;
mls = 0;

function eventos() {
  botonS.addEventListener("click", Start);
  botonR.addEventListener("click", Reset);
}

function Start() {
  intervalo = setInterval(Timer, 10);
  botonS.removeEventListener("click", Start);
  botonS.addEventListener("click", Pause);
  botonS.innerHTML = "pause";
  contador.classList.remove("contador");
  contador.classList.add("contador2");
  botonR.classList.add("reset2");
  botonS.classList.add("start2");
}
function Pause() {
  clearInterval(intervalo);
  botonS.addEventListener("click", Start);
  botonS.innerHTML = "start";
}
function Reset() {
  clearInterval(intervalo);
  min = 0;
  seg = 0;
  mls = 0;
  contador.innerHTML = 0;

  botonR.classList.remove("reset2");
  contador.classList.remove("contador2");
  contador.classList.add("contador");
  botonS.classList.remove("start2");
}

function Timer() {
  mls++;
  contador.innerHTML = seg + " " + mls;
  if (mls > 99) {
    mls = 0;
    seg++;
  } else if (seg > 59) {
    seg = 0;
    min++;
  }
  if (min > 0) {
    contador.innerHTML = min + " : " + seg + " " + mls;
  }
  if (mls < 10) {
    contador.innerHTML = seg + " " + "0" + mls;
  }
  if (mls < 10 && min > 0) {
    contador.innerHTML = min + " : " + seg + " " + "0" + mls;
  }
}

eventos();
