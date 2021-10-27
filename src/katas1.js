function oneThroughTwenty(num) {
    
  for (let number = 1; number <= num; number++){
    console.log(number);
  }
}
   oneThroughTwenty(20);
      

function evensToTwenty(num) {
    
   let contador = 1 ;
    while (contador <= num) {
        let resto = contador % 2;
        if (resto == 0){
            console.log(contador);
        }
        contador++;
    }
}
evensToTwenty(20);

   
function oddsToTwenty(num) {
    
let contador = 1 ;
    while (contador <= num) {
        let resto = contador % 2;
        if (resto == 1){
            console.log(contador);
        }
        contador++;
    }
}
oddsToTwenty(20)

function multiplesOfFive(num) {
    
 let contador = 1 ;
    while (contador <= num) {
        let resto = contador % 5;
        if (resto == 0){
            console.log(contador);
        }
        contador++;
    }
}
multiplesOfFive(100);
    

function squareNumbers(num) {
  let contador = 1;
  for (let numero = 1 ; numero <= 10; numero++){
    let quadPerf = numero * numero;
    console.log(quadPerf);
  }
}

squareNumbers(100)

function squareNumbers

function countingBackwards(num) {
    let contador = 20;
        for (let numero = contador - 1 ; numero >= 1; numero--){
         console.log(numero);

}
}
countingBackwards(20)
    

function retornaPares(num){
let contador = num;
  for (let numero = contador ; numero >= 1; numero--){
	if (numero % 2 === 0){
		console.log(numero);
}

}
}
retornaPares(20)

function retornaPares(num){
let contador = num;
  for (let numero = contador ; numero >= 1; numero--){
	if (numero % 2 === 1){
		console.log(numero);
}

}
}
retornaPares(20)

function multiplesOfFiveBackwards(num) {
let contador = num ;
   for (let numero = contador; numero >= 1; numero--){
        let resto = numero % 5;
        if (resto == 0){
            console.log(numero);
        }
        contador++;
    }
}
multiplesOfFiveBackwards(100);

function squareNumbersBackwards(num) {
  
  let contador = num;
  for (let numero = 10 ; numero >= 1; numero--){
    let quadPerf = numero * numero;
    console.log(quadPerf);
  }
}

squareNumbersBackwards(100)
