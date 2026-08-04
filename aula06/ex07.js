const produtos = [
  { nome: "Teclado", preco: 120, estoque: 8, categoria: "periferico" },
  { nome: "Mouse", preco: 60, estoque: 25, categoria: "periferico" },
  { nome: "Monitor", preco: 900, estoque: 0, categoria: "tela" },
  { nome: "Headset", preco: 250, estoque: 4, categoria: "periferico" },
  { nome: "Notebook", preco: 3500, estoque: 2, categoria: "computador" }
];

function listarPorCategoria(produtos, categoriaAlvo) {
 
  const resultado = produtos
    .filter(({ categoria, estoque }) => categoria === categoriaAlvo && estoque > 0)
    .map(({ nome, preco }) => `${nome} - R$ ${preco.toFixed(2)}`);

  if (resultado.length === 0) {
    return ["Nenhum produto disponivel nesta categoria."];
  }

  return resultado;
}
console.log("--- Teste 'periferico' ---");
console.log(listarPorCategoria(produtos, "periferico"));

console.log("\n--- Teste 'tela' (Estoque zero) ---");
console.log(listarPorCategoria(produtos, "tela"));

console.log("\n--- Teste 'livro' (Inexistente) ---");
console.log(listarPorCategoria(produtos, "livro"));

