let body = document.querySelector("body");
let tenis = document.querySelector(".imagem-tenis");
let botaoCarrinho = document.querySelector(".botao-carrinho");

function mudarVisual(cor, imagem) {
  tenis.classList.add("troca-efeito");

  body.style.background = cor;
  tenis.src = imagem;

  botaoCarrinho.style.backgroundColor = cor;

  setTimeout(() => {
    tenis.src = imagem;
    tenis.classList.remove("troca-efeito");
  }, 500);
}

window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});
