var button = document.querySelector("button");

var pergunta1 = "";

var novaDiv = document.querySelector("#novaMensagem");
button.onclick = function enviar() {
  pergunta1 = document.querySelector("#name");

  alert(pergunta1.value);

  document.appendChild("div");
};

document.addEventListener("keydown", function enviar_enter(e) {
  if (e.key === "Enter") {
    pergunta1 = document.querySelector("#name");

    alert(pergunta1.value);
  }
});
