const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 6.0 },
  { nome: "Carla", nota: 9.2 },
  { nome: "Diego", nota: 4.0 },
  { nome: "Eduarda", nota: 7.0 }
];

console.log("--- Aprovados ---");
alunos
  .filter(aluno => aluno.nota >= 7)
  .map(aluno => aluno.nome)
  .forEach(nome => console.log(nome));


console.log("\n--- Quantidade de Reprovados ---");
const totalReprovados = alunos.filter(aluno => aluno.nota < 7).length;
console.log(`Total de reprovados: ${totalReprovados}`);

console.log("\n--- Status Geral ---");
alunos.forEach(aluno => {
  const status = aluno.nota >= 7 ? "APROVADA" : "REPROVADO";
  console.log(`${aluno.nome} - ${status}`);
});
