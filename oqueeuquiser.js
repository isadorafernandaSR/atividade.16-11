//arrow function
const saudacao1 = (nome) => "Vai se fuder, " + nome;

console.log(saudacao1("Estevão"))

//
const conta = (a, b) => a + b;

console.log(conta(2, 3))

//
const descontaoManekk = (valor, porcentagem) => valor - (valor * (porcentagem / 100));
console.log (descontaoManekk(100, 10));

//
let idade = 20;
let situacao = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(situacao);
// n sei se esse era com ternario ou nao

const statusNota = nota => {
  if (nota >= 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
};

console.log(statusNota(8)); 
console.log(statusNota(5));
//esse eu fiz com ternario :D
const textoBotao = logado => logado ? "Sair" : "Entrar";

console.log(textoBotao(true));  // Saída: "Sair"
console.log(textoBotao(false));