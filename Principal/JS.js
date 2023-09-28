let intervalo;
let contador = 0;
let numeros = [1, 2, 3, 4, 5, 6, 7];

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