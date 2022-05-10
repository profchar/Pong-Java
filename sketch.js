//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let velocidadex = 6;
let velocidadey = 6;
let raio = diametro / 2;
let colide = false;
//variaveis raquete
let xRaq = 5;
let yRaq = 150;
let comprimentoRaq = 10;
let alturaRaq = 120;
//Variáveis Oponente
let yRaqueteOponente = 150;
let xRaqueteOponente = 585;
let velocidadeOponente;
let meusPontos = 0;
let pontosOponente=0 ;
//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  colideBorda();
  criaRaquete();
  criaRaquete(xRaq, yRaq);
  criaRaquete(xRaqueteOponente, yRaqueteOponente);
  movimenteRaquete();
  colideRaquete(xRaq, yRaq);
  colideRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoOponente();
  placar();
  pontos()
}

function colideBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0)
    velocidadex = velocidadex * -1;
  if (yBolinha + raio > height || yBolinha - raio < 0)
    velocidadey = velocidadey * -1;

}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}
function movimentaBolinha() {
  xBolinha = xBolinha + velocidadex;
  yBolinha = yBolinha + velocidadey;
}

function criaRaquete(x, y) {
  rect(x, y, comprimentoRaq, alturaRaq);
}

function movimenteRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaq = yRaq - 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yRaq = yRaq + 10;
  }
}

function colideRaquete(x, y) {
  colide = collideRectCircle(
    x,
    y,
    comprimentoRaq,
    alturaRaq,
    xBolinha,
    yBolinha,
    diametro
  );
  
  if (colide) {
    velocidadex = velocidadex * -1;
  }

}

function movimentoOponente() {
  velocidadeOponente = yBolinha - yRaqueteOponente - alturaRaq / 2 +90;

  yRaqueteOponente = yRaqueteOponente + velocidadeOponente;
  
}

function placar() {
  fill(255);
  textSize(30);
  text(meusPontos, 100, 30);
  text(pontosOponente, 500, 30);
}
function pontos(){
  if(xBolinha-raio<0){pontosOponente=pontosOponente+1}
  //ponto.play();
  if(xBolinha+raio>600){meusPontos=meusPontos+1}
  //ponto.play();
}