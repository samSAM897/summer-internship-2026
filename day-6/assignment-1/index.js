const findArrayAvg = (arr) => {
  let arrSum = 0;
  arr.forEach((num) => {
    arrSum += num;
  });

  let arrLen = arr.length;
  return arrSum / arrLen;
};

const sampleArr = [10, 12, 14, 14, 22, 25, 31, 29, 12];
// console.log(findArrayAvg(sampleArr));

function swapUsingReference(objRef) {
  let temp = objRef.var2;
  objRef.var2 = objRef.var1;
  objRef.var1 = temp;
}

const sampObj = {
  var1: 5,
  var2: 2,
};
// console.log(sampObj);
swapUsingReference(sampObj);
// console.log(sampObj);

let a = 5;
let b = 2;
// console.log(a + " ," + b);
[a, b] = [b, a];
// console.log(a + " ," + b);

const arr = new Array("Orange", "Kiwi", "Zucchini", "Banana");
arr.sort();
console.log(arr);
arr.reverse();
console.log(arr);
