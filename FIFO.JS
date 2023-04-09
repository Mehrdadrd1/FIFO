//adding item to start of myArray

let myArray = [1, 2, "Mehrdad", 4, "Hoora", 6];
const pushFifo = (array, newitem) => {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray[i + 1] = array[i];
  }
  newArray[0] = newitem;
  document.getElementById("PushItem").innerHTML =
    "pushed array is = " + newArray;
};

//removing the last item of myArray

const pullFifo = (myArray) => {
  newArray = [];
  for (i = 0; i < myArray.length - 1; i++) {
    newArray[i] = myArray[i];
  }
  document.getElementById("PullItem").innerHTML =
    "pulled array is = " + newArray;
};
