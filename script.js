var button = document.querySelector("button");

var textBox = document.querySelector("#name");

var pergunta1 = "";

button.onclick = function enviar() {
  pergunta1 = textBox;

  console.log(pergunta1.value);
  document.write(pergunta1.value);
  pergunta1.value = "";
};

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    button.click();
    pergunta1 = textBox;

    let caixa = document.getElementById("#caixaTexto");
    let mensagem1 = document.createElement("div");
    caixa.appendChild(mensagem1);

    pergunta1.value = "";
  }
});
