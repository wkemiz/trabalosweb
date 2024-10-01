//operadores aritméticos
let x = 10;
let y = 5;

let soma = x + y;
let subtracao = x - y;
let multiplicacao = x * y;
let divisao = x / y;
let resto = x % y;

//operadores de atribuição
let a = 10;
a += 5; //equivalente a: a = a + 5;
a = a + 5;

//operadores de comparação
let idade = 20;
let maiorDeIdade = idade >= 18;
let igual10 = idade == 10;

//estrutura condicional
const kilo = 10;
if (kilo >=10) {
    console.log("Kilo 10+");
} else {
    console.log("Kilo -10");
}

// Estrutura de repetição

// Loop (for)

for (let i = 0; i < 5; i++) {
    console.log("Interação", i);
}

// Loop (while)
let contador = 0;

while (contador <5) {
    console.log("O contador é", + contador);
    contador ++;
}