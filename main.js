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

// Carrega as imagens
const imagens = [
  "cachorro.png",
  "gato.png",
  "urso.png",
  "leão.png",
  "girafa.png",
  "elefante.png",
];

for (const imagem of imagens) {
  const carta = {
    imagem: `${imagem}`,
    x: Math.floor(Math.random() * canvas.width),
    y: Math.floor(Math.random() * canvas.height),
  };
  cartas.push(carta);
}

// ...
