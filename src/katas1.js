function oneThroughTwenty() {
    let retornaNumeros = [];
    for (let number = 1; number <= 20; number++) {
        retornaNumeros.push(number);
    }
    return retornaNumeros;
}
console.log(oneThroughTwenty());
function evensToTwenty() {
    let retornaNumeros2 = [];
    let contador = 1;
    for (let contador = 1; contador <= 20; contador++) {
        if (contador % 2 === 0) {
            retornaNumeros2.push(contador)
        }
    }
    return retornaNumeros2;
} console.log(evensToTwenty());
function oddsToTwenty() {
    let retornaNumeros3 = [];
    for (let contador = 1; contador <= 20; contador++) {
        if (contador % 2 === 1) {
            retornaNumeros3.push(contador)
        }
    }
    return retornaNumeros3;
}
console.log(oddsToTwenty());
function multiplesOfFive() {
    let retornaNumeros4 = [];
    for (let contador = 1; contador <= 20; contador++) {
        if (contador % 5 === 0) {
            retornaNumeros4.push(contador)
        }
    }
    return retornaNumeros4;
} console.log(multiplesOfFive());
function squareNumbers() {
    let retornaNumeros5 = [];
    let contador = 1;
    for (let numero = 1; numero <= 10; numero++) {
        let quadPerf = numero * numero;
        retornaNumeros5.push(quadPerf)
    } return retornaNumeros5
} console.log(squareNumbers())

function countingBackwards() {
    let retornaNumeros6 = [];

    for (let numero = 20; numero >= 1; numero -= 1) {
        retornaNumeros6.push(numero)
    } return retornaNumeros6
} console.log(countingBackwards())
function evenNumbersBackwards() {

    let retornaNumeros7 = [];
    for (let numero = 20; numero >= 1; numero--) {
        if (numero % 2 === 0) {
            retornaNumeros7.push(numero)
        }
    } return retornaNumeros7
}
console.log(evenNumbersBackwards())
function oddNumbersBackwards(num) {
    let retornaNumeros8 = [];

    for (let numero = 20; numero >= 1; numero--) {
        if (numero % 2 === 1) {
            retornaNumeros8.push(numero)
        }
    }
    return retornaNumeros8;
}
console.log(oddNumbersBackwards());
function multiplesOfFiveBackwards() {
    let retornaNumeros9 = [];

    for (let numero = 100; numero >= 1; numero--) {
        if (numero % 5 === 0) {
            retornaNumeros9.push(numero)
        }
    } return retornaNumeros9
} console.log(multiplesOfFiveBackwards());
function squareNumbersBackwards() {
    let retornaNumeros10 = [];

    for (let numero = 10; numero >= 1; numero--) {
        let quadPerf = numero * numero;
        retornaNumeros10.push(quadPerf)
    }
    return retornaNumeros10;
}
console.log(squareNumbersBackwards());
