function oneThroughTwenty() {
    
  for (let number = 1; number <= 20; number++){
    console.log(number);
  }
      

function evensToTwenty() {
    
   let contador = 1 ;
    while (contador <= 20) {
        let resto = contador % 2;
        if (resto == 0){
            console.log(contador);
        }
        contador++;
    }
  
}

   
function oddsToTwenty() {
    
let contador = 1 ;
    while (contador <= 20) {
        let resto = contador % 2;
        if (resto == 1){
            console.log(contador);
        }
        contador++;
    }
   
}

function multiplesOfFive() {
    
 let contador = 1 ;
    while (contador <= 100) {
        let resto = contador % 5;
        if (resto == 0){
            console.log(contador);
        }
        contador++;
    }

}

function squareNumbers() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
    
}

//call function squareNumbers

function countingBackwards() {
    let contador = 20;
        for (let i = contador - 1 ; i >= 1; i--){
         console.log(i);

}
}



function evenNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
}

//call function evenNumbersBackwards

function oddNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
}

//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
}

//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    
   /* Your code goes below
  Write a for or a while loop
  return the result */
}

//call function squareNumbersBackwards
