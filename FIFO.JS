const myArray = [1, 2, 3, 4, 5, 6];
let n = [];
const fifo = (array) => {
  for (let n = 0; n < array.length; n++) {
    array[0] = n[array.length]++;
  }
  return array;
};

const push = fifo(myArray);
console.log(push);
