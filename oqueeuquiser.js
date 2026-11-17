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

//

const numeros = [1, 2, 3, 4];
const dobrados = numeros.map((numero) => numero * 2);

console.log(dobrados);

//
const nomes = ["ana", "bruno", "carla"];
const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase());

console.log(nomesMaiusculos);

//
const produtos = [
  { id: 1, nome: "Caderno", preco: 15 },
  { id: 2, nome: "Caneta", preco: 3 },
  { id: 3, nome: "Mochila", preco: 120 },
];

const nomesProdutos = produtos.map((produto) => produto.nome);

console.log(nomesProdutos); 

//

const numero = new Array(1, 2, 3, 4, 5, 6);

const pares = numero.filter(n => n % 2 === 0);

console.log(pares); 


const notas = [5, 8, 6.5, 9, 7];

const aprovadas = notas.filter(nota => nota >= 7);

console.log(aprovadas);
//

const produto = [
  { nome: "Caderno", preco: 25 },
  { nome: "Mochila", preco: 120 },
  { nome: "Caneta", preco: 5 },
  { nome: "Calculadora", preco: 60 }
];

const produtosBaratos = produto
  .filter(produto => produto.preco < 50)
  .map(produto => produto.nome);

console.log(produtosBaratos);
