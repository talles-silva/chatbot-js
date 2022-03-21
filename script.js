var button = document.querySelector("button");

var pergunta1 = "";

var novaDiv = document.querySelector("#novaMensagem");
button.onclick = function enviar() {
  pergunta1 = document.querySelector("#name");

  pergunta1.appendChild(novaDiv);
};
