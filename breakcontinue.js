let multiplicacao = 0
for (let i = 1; i <= 10; i++) {
    if (i === 4) {
        dizerOla(i);
    }
    let returnCalculadora = 0
    returnCalculadora = calculadora (i,5)
    console.log(returnCalculadora);
}

function dizerOla(numero) {
    multiplicacao = multiplicacao + 1
    console.log("Olá!" + multiplicacao);
}

function calculadora(valorA,valorB) {
    multiplicacao = valorA * valorB
    return multiplicacao
}