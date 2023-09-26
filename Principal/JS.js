/* Função sortear números */
function SortearNumeros() {
    var numeros = [];

/* O código abaixo irá gerar 6 números aleatórios */
    while(numeros.length < 2000) {
        var num = Math.floor(Math.random()*2001);
        if(!numeros.includes(num)){
            numeros.push(num);
        }
    }

/* O trecho de código abaixo exibirá os números sorteados na página */
    document.getElementById("num1").innerHTML = numeros[0];
}