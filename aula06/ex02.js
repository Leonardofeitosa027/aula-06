const palavras = ["sol", "computador", "rede", "programacao", "bit", "algoritmo"];

const palavrasLongas = palavras.filter(palavra => palavra.length > 5);

console.log("Palavras com mais de 5 letras:", palavrasLongas);
console.log("Quantidade de palavras que sobraram:", palavrasLongas.length);
