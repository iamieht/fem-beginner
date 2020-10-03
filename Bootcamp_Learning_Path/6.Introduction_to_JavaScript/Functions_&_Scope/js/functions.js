// Example function
function addTwo(number) {
  return number + 2;
}

const finalAnswer = addTwo(5);
console.log(finalAnswer);

// Scope
let friends = 0;
for (let i = 0; i <= 10; i++) {
  friends++;
}
//console.log(i) //ReferenceError; i is not defined.

let something = 'outside the if statement';

if (true) {
  let something = 'inside the if statement';
  console.log(something);
}

console.log(something);