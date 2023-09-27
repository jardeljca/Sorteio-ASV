let intervalo;
let contador = 0;
let numerosSorteados = [];

function alternarNumeros() {
    const display = document.getElementById("num");
    const numeroAtual = numerosSorteados[contador]; // Obtenha o número atual da matriz.
  
    if (contador < numerosSorteados.length) {
      // Configure um tamanho de fonte crescente para o número.
      const tamanhoFonte = 5 + contador * 1.1 + "px";
      display.style.fontSize = tamanhoFonte;
      
      display.textContent = numeroAtual;
      contador++;
    } else {
      clearInterval(intervalo);
      setTimeout(function () {
        display.style.fontSize = "20px"; // Redefina o tamanho da fonte para o valor original.
        display.textContent = "Número sorteado: " + numerosSorteados[numerosSorteados.length - 1];
      }, 1000);
    }
  }
  

function SortearNumeros() {
  const display = document.getElementById("num");
  display.textContent = "Prepare-se...";
  contador = 0;
  numerosSorteados = [];

  // Defina o intervalo para alternar números a cada 200 milissegundos
  intervalo = setInterval(alternarNumeros, 100);

  // Gere 2000 números aleatórios entre 0 e 2000
  while (numerosSorteados.length < 2000) {
    var num = Math.floor(Math.random() * 2001);
    if (!numerosSorteados.includes(num)) {
      numerosSorteados.push(num);
    }
  }

  // Parar a alternância após 10 segundos
  setTimeout(function () {
    clearInterval(intervalo);
  }, 8500); // 10 segundos em milissegundos
}
