

`An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.
              
Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the array and no difference with it, your function should return the int 0.`

const arr = [1,2,3,4,5,6,7,8,9];
const mixArr = [3,2,4,6,5,8,1,9];

function findDeletedNumber(arr, mixArr) {

}




























// const adder = (s,n) => s+n;
// const multiplier = (c,d) => c ^ d


// console.log(arr.reduce(adder));
// console.log(arr.reduce(multiplier));



const fourthAnswers = {
  one: function findDeletedNumber(arr, mixArr) {
    let newStr = 0;
    arr.forEach( value => {
    let i = mixArr.indexOf(value); 
    if (i === -1) {
      newStr += value
      }
    })
    return newStr;
  },
  two: function findDeletedNumber(arr, mixArr) {
    if(arr.length === mixArr.length) return 0;
    for(var k in arr)
      if(mixArr.indexOf(arr[k]) === -1)
        return arr[k];
    return 0;
  },
  three: function findDeletedNumber(arr, mixArr) {
    return arr.find ((element) => {return !mixArr.includes (element)}) || 0;
  },
  four: function findDeletedNumber(arr, mixArr) {
    return arr.reduce(helper)-mixArr.reduce(helper)
  },
  fiv e: function findDeletedNumber(a, b) {
    return [...a, ...b].reduce((c, d) => c ^ d, 0);
  },
  six: function findDeletedNumber(arr, mixArr) {
    return arr.find(n => !mixArr.includes(n)) || 0;
  },
}

// console.log(fourthAnswers.one(arr, mixArr));