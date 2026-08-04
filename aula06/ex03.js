const numeros =[]

const resultadoFor = [];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        resultadoFor.push(numeros[i] * 10);
    }
}

const resultadoMetodos = numeros
    .filter(num => num % 2 === 0)
    .map(num => num * 10);

console.log("Resultado com for/if:", resultadoFor);
console.log("Resultado com filter/map:", resultadoMetodos);

const saoIguais = JSON.stringify(resultadoFor) === JSON.stringify(resultadoMetodos);
console.log("Os resultados são iguais?", saoIguais);
