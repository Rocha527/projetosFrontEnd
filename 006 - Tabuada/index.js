/*
Precisamos  mostrar a tabuada no console de 0 a 10 neste seguinte formato:
multiplicador x numero = resultado
multiplicador x 0 = resultado
multiplicador x 1 = resultado
multiplicador x 2 = resultado
multiplicador x 3 = resultado

Não será permitido utilizar varios console.log
*/

const multiplicador = 7;

// let i = 0
// chegará ate o valor desejado = 10
// ele add + 1 sobre o valor, então sempre que acabar o código, ele add +1 = 1 + 1 = 2
for (let i = 0; i <= 10; i++){
    const calc = multiplicador * i;
    console.log(`${multiplicador} x ${i} = ${calc}`);
}