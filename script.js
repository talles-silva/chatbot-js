var button = document.querySelector("button");

var pergunta1 = "";
function enviar_click() {
  button.onclick = function enviar() {
    pergunta1 = document.querySelector("#name");

    console.log(pergunta1.value);
    pergunta1.value = "";
  };
}

document.addEventListener("keydown", enviar_click());
