// let input = '1,9,10,3,2,3,11,0,99,30,40,50';
// let input = '1,0,0,0,99';
// let input = '2,4,4,5,99,0';
// let input = '1,1,1,4,99,5,6,0,99';
let input = '1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,9,1,19,1,19,5,23,1,23,6,27,2,9,27,31,1,5,31,35,1,35,10,39,1,39,10,43,2,43,9,47,1,6,47,51,2,51,6,55,1,5,55,59,2,59,10,63,1,9,63,67,1,9,67,71,2,71,6,75,1,5,75,79,1,5,79,83,1,9,83,87,2,87,10,91,2,10,91,95,1,95,9,99,2,99,9,103,2,10,103,107,2,9,107,111,1,111,5,115,1,115,2,119,1,119,6,0,99,2,0,14,0';
let array = input.split(',');
let output = [];
let i = 0;

// because JS is loosely typed
for (let i = 0; i < array.length; i++) {
  array[i] = parseInt(array[i]);
}
console.log(`${i}\tInitial Array: ${array}`);

// To do this, before running the program, replace position 1 with the value 12
// and replace position 2 with the value 2.
array[1] = 12;
array[2] = 2;

while(i < array.length) {
  if (array[i] === 1) {
    array[array[i + 3]] = array[array[i + 1]] + array[array[i + 2]];
  } else if (array[i] === 2) {
    array[array[i + 3]] = array[array[i + 1]] * array[array[i + 2]];
  } else if (array[i] === 99) {
    i = array.length;
  } else {
    console.warn('Detected none');
  }
  i += 4;
  console.log(`${i}\tUpdated Array: ${array}`);
}

console.log(array);
