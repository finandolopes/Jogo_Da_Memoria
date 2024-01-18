// Variáveis
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const cartas = [];
let pontos = 0;
let maioresPontuacoes = [];

// Funções
function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Desenhar as cartas
  for (const carta of cartas) {
    ctx.drawImage(carta.imagem, carta.x, carta.y);
  }

  // Desenhar os pontos
  ctx.fillStyle = "black";
  ctx.fillText(`Pontos: ${pontos}`, 10, 10);

  // Desenhar as maiores pontuações
  for (const pontuacao of maioresPontuacoes) {
    ctx.fillStyle = "red";
    ctx.fillText(`${pontuacao}`, 10, canvas.height - 10);
  }
}

function gerarCartas() {
  const imagens = ["cachorro", "gato", "urso", "leão", "girafa", "elefante"];
  for (let i = 0; i < 12; i++) {
    const carta = {
      imagem: `img/cards/${imagens[i]}.png`,
      x: Math.floor(Math.random() * canvas.width),
      y: Math.floor(Math.random() * canvas.height),
    };
    cartas.push(carta);
  }
}

function virarCarta(carta) {
  carta.virada = true;
  desenhar();
}

function clicar(event) {
  const carta = event.target;
  if (!carta.virada) {
    virarCarta(carta);

    // Verifica se o par foi encontrado
    for (const outraCarta of cartas) {
      if (carta.imagem === outraCarta.imagem && outraCarta.virada) {
        pontos++;
        outraCarta.virada = false;
        carta.virada = false;

        // Se todos os pares foram encontrados, o jogo termina
        if (pontos === 6) {
          alert("Parabéns! Você venceu!");
          maioresPontuacoes.push(pontos);
          desenhar();
        }
      }
    }
  }
}

// Eventos
window.addEventListener("keydown", (event) => {
  if (event.keyCode === 32) {
    virarCarta(event.target);
  }
});
canvas.addEventListener("click", clicar);

// Gerar as cartas
gerarCartas();
