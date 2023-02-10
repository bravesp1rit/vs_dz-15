'use strict';

let numberFromUser = +prompt('Enter number');
let PrimeOrNot = Boolean;

for (let i = numberFromUser;;) {
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
console.log(`${numberFromUser} ${PrimeOrNot}`) ;