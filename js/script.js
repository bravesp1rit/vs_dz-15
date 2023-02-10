'use strict';

let numberFromUser = +prompt('Enter number');
let PrimeOrNot = Boolean;

for (let i = numberFromUser;;) {
    if(numberFromUser === 1){
        PrimeOrNot = 'Is 1';
    } else if (isNaN(numberFromUser)){
        PrimeOrNot = 'not a number';
    } else if (numberFromUser === 0){
        PrimeOrNot = 'you canceled or input 0';
    }
  for (let j = 2; j < i; j++) {
    if (i % j == 0){ 
        PrimeOrNot = false;
        break;
    } else{
        PrimeOrNot = true;
    }
  }
  break;
}
console.log(PrimeOrNot) ;