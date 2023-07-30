//adding item to start of myArray

let myArray = [1, 2, "Mehrdad", 4, "Hoora", 6];
const pushResult = [];

const pushFifo = (array, newitem) => {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray[i + 1] = array[i];
  }
  newArray[0] = newitem;
  return newArray;
};

pushResult = pushFifo();
console.log(`Pushed array is ${pushResult}`);

document.getElementById(
  "PushItem"
).innerHTML = `pushed array is = ${pushResult}`;

//removing the last item of myArray

const pullFifo = (array) => {
  let newArray = [];
  for (i = 1; i < array.length; i++) {
    newArray[i] = array[i];
  }
  return newArray;
};

const pulledFifo = pullFifo();
console.log(`pulled array is ${pulledFifo}`);

document.getElementById(
  "PushItem"
).innerHTML = `pulled array is = ${pulledFifo}`;
