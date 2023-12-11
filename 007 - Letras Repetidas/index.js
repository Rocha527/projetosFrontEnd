/* 
    Mostrar quantas letras repetidas aparecem em uma palavra.
    ex: Abacate: { a: 3, b: 1, c: 1, t: 1, e: 1 }
*/

const palavra = "Abacate".toLowerCase(); //.replaceAll(" ", "");    //  toLowerCase() deixa todos os caracteres minúsculos
                                        // replace recoloca o caracter informado. ex. espaço
let letras = {};

// console.log(palavra.length);    // length Mostra quantas letras tem

for (let i = 0; i < palavra.length; i++) {  // Adiciona parâmetros
    if (letras[palavra[i]]) {
        letras[palavra[i]]++;
    } else {
        letras[palavra[i]] = 1;
    }
}

console.log(letras);