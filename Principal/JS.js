let intervalo;
let contador = 0;
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,47,48,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,72,75,77,79,85,89,91,94,95,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,172,174,175,177,178,179,180,181,182,184,188,189,190,191,196,197,200,204,211,212,225,246,271,300,307,313,322,323,355,377,378,389,390,400,401,403,405,423,433,435,440,444,451,456,466,469,472,473,477,487,489,499,601,603,606,608,617,618,633,641,648,655,656,660,666,667,670,680,684,688,690,694,699,735];

function adicionarIntervalo(numeros, 1001, 1200) {
  for (let i = 1001; i <= 1200; i++) {
    numeros.push(i);
  }
}

function alternarNumeros() {
  const display = document.getElementById("num");

  if (contador < 2000) {
    // Escolha um número aleatório da sua matriz 'numeros'
    const numeroAtual = numeros[Math.floor(Math.random() * numeros.length)];

    // Configure um tamanho de fonte crescente para o número.
    const tamanhoFonte = 3 + (contador/2) * 1.1 + "px";
    display.style.fontSize = tamanhoFonte;

    display.textContent = numeroAtual;
    contador++;
  } else {
    clearInterval(intervalo);
    setTimeout(function () {
      display.style.fontSize = "40px"; // Redefina o tamanho da fonte para o valor original.
      display.textContent = "Número sorteado: " + numeros[numeros.length - 1];
    }, 1000);
  }
}

function SortearNumeros() {
  const display = document.getElementById("num");
  display.textContent = "Prepare-se...";
  contador = 0;

  // Defina o intervalo para alternar números a cada 100 milissegundos
  intervalo = setInterval(alternarNumeros, 100);

  // Parar a alternância após 10 segundos
  setTimeout(function () {
    clearInterval(intervalo);
  }, 10000); // 10 segundos em milissegundos
}