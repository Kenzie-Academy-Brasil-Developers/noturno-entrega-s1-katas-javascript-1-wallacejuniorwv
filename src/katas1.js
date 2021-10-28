function oneThroughTwenty(num) {

  let retornaNumeros = [];
  for (let number = 1; number <= num; number++) {
    retornaNumeros.push(number);
  }
  return retornaNumeros;
}
console.log(oneThroughTwenty(20));


function evensToTwenty(num) {

  let retornaNumeros2 = [];
  let contador = 1;
  for (let contador = 1; contador <= num; contador++) {
    if (contador % 2 === 0) {
      retornaNumeros2.push(contador)
    }
  }
  return retornaNumeros2;

} console.log(evensToTwenty(20));


function oddsToTwenty(num) {

  let retornaNumeros3 = [];

  for (let contador = 1; contador <= num; contador++) {
    if (contador % 2 === 1) {
      retornaNumeros3.push(contador)
    }
  }
  return retornaNumeros3;

}
console.log(oddsToTwenty(20));


function multiplesOfFive(num) {

  let retornaNumeros4 = [];

  for (let contador = 1; contador <= num; contador++) {
    if (contador % 5 === 0) {
      retornaNumeros4.push(contador)
    }

  }
  return retornaNumeros4;
} console.log(multiplesOfFive(100));


function squareNumbers(num) {
  let retornaNumeros5 = [];

  let contador = 1;
  for (let numero = 1; numero <= 10; numero++) {
    let quadPerf = numero * numero;
    retornaNumeros5.push(quadPerf)
  } return retornaNumeros5
} console.log(squareNumbers(100))
// ok
function countingBackwards(num) {
  let retornaNumeros6 = [];
  let contador = num;
  for (let numero = contador; numero >= 1; numero--) {
    retornaNumeros6.push(numero)
  } return retornaNumeros6
} console.log(countingBackwards(20))

function evenNumbersBackwards(num) {
  let contador = num;
  let retornaNumeros7 = [];

  for (let numero = contador; numero >= 1; numero--) {
    if (numero % 2 === 0) {
      retornaNumeros7.push(numero)
    }
  } return retornaNumeros7
}
console.log(evenNumbersBackwards(20))


function oddNumbersBackwards(num) {
  let retornaNumeros8 = [];
  contador = num;
  for (let numero = contador; numero >= 1; contador--) {
    if (contador % 2 === 1) {
      retornaNumeros8.push(contador)
    }
  }
  return retornaNumeros8;
}
console.log(oddNumbersBackwards(20));

function multiplesOfFiveBackwards(num) {
  let retornaNumeros9 = [];
  let contador = num;
  for (let numero = contador; numero >= 1; numero--) {
    if (numero % 5 === 0) {

      retornaNumeros9.push(numero)
    }
  } return retornaNumeros9
} console.log(multiplesOfFiveBackwards(100));

function squareNumbersBackwards(num) {
  let retornaNumeros10 = [];

  let contador = num;
  for (let numero = 10; numero >= 1; numero--) {
    let quadPerf = numero * numero;
    retornaNumeros10.push(quadPerf)

  }
  return retornaNumeros10;
} console.log(squareNumbersBackwards(100));