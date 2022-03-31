let a = 0;
let sinal = "";

// funções ->
function limpar() {
  var visor = document.querySelector("#visor");
  visor.innerHTML = "0";
}

function numero(numero) {
  var visor = document.querySelector("#visor");
  if (visor.innerHTML.length < 10) {
    if (parseFloat(visor.innerHTML) == 0) {
      visor.innerHTML = numero;
    } else {
      visor.innerHTML = visor.innerHTML + numero;
    }
  }
}

function soma() {
  var visor = document.querySelector("#visor");
  a = parseFloat(visor.innerHTML);
  sinal = "+";
  visor.innerHTML = "";
}

function multiplicacao() {
  var visor = document.querySelector("#visor");
  a = parseFloat(visor.innerHTML);
  sinal = "*";
  visor.innerHTML = "";
}

function subtracao() {
  var visor = document.querySelector("#visor");
  a = parseFloat(visor.innerHTML);
  sinal = "-";
  visor.innerHTML = "";
}
function divisao() {
  var visor = document.querySelector("#visor");
  a = parseFloat(visor.innerHTML);
  sinal = "/";
  visor.innerHTML = "";
}
function raiz() {
  var visor = document.querySelector("#visor");
  a = parseFloat(visor.innerHTML);
  sinal = "√";
  visor.innerHTML = Math.sqrt(a);
  
}
function cuadrado() {
  var visor = document.querySelector("#visor");
  a = parseFloat(visor.innerHTML);
  sinal = "x2";
  visor.innerHTML = (a*a);
  
}

function igual() {
  var visor = document.querySelector("#visor");
  let resultado = "";
  if (sinal == "+") {
    resultado = parseFloat(visor.innerHTML) + a;
  } else if (sinal == "*") {
    resultado = parseFloat(visor.innerHTML) * a;
  } else if (sinal == "-") {
    resultado =  a - parseFloat(visor.innerHTML);
  } else if (sinal == "/") {
    resultado = a /  parseFloat(visor.innerHTML) ;
  }
  visor.innerHTML = resultado;
}

/// 1º clicamos no numero → aparece o numero no visor
/// 2º clicamos no sinal → colocar o número que está no visor em uma variável;
/// 3º clicamos no segundo numero → a numero aparece no visor
/// 4º clicamos no sinal de igual → pega o numero do visor| soma com o numero da variavel | mostra o resultado
