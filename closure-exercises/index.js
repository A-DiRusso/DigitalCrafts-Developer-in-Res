// //jS

const { log } = console;

const object = {
    name: "bob",
    number: 7,
}
const { number } = object;
const { name } = object

const expample = () => {
    log(name);
    
}
expample();

 
// log("Is this thing on?")

// const body = document.querySelector('body');
// body.style.backgroundColor = "grey";
// const title = document.createElement('h1');
// title.classList.add('title-h1'); 
// title.style.color = "blue"
// title.innerHTML = `Hello Closure :)`;
// body.append(title);


// // const counterFunction = () => {
// //     let count = 0;
// //     let newCount = count + 1;
// //     return newCount;
// // };

// // function counterFunctionTwo() {
// //     let count = 0;
// //     let regNewCount = count + 1;
// //     return regNewCount;
// // } 

// // const callCounterFunction = () => {
// //     let count;
// //     count++
// //     const twoWaysToCount = counterFunction(cout) && counterFunctionTwo();
// //           return twoWaysToCount; 
// // }


// // log('Arrow Function Returns: ', callCounterFunction());
// // log('Regular Function Returns : ', callCounterFunction());

// // closure - most sipmly a private scope accomplished by having an outter function that outlives the inner function. The outter functions job is to create the inner function

// const doSomeMath = () => {
//     const a = 5;
//     const b = 4;
//     const sum = 4 + 5;
//     return sum;
// }

// const add = (x) => {
//     const actuallyAdd = (y) => {
//         return x + y 
//     }
//     return actuallyAdd;
// }

// log(add(3)(4));

// const a = 1;

// const doMoreMath = (firstNum) => {
//     const sum = (secondNum) => {
//         return firstNum + secondNum;
//     }
//     return sum;
// }

// // const first = doMoreMath()();
// log(doMoreMath(45)(9));
// // log(doMoreMath());

// // const Toggle = (initial) => {
// //     let toggle = initial;
// //     this.update = () => {
// //         return toggle = !toggle;
// //     };
// // };
// function Toggle(initial) {
//     let toggle = initial;
//     this.update = () => {
//          toggle = !toggle;
//          console.log(toggle)
//     };
// };
// function Add(initial) {
//     let toggle = initial;
//     this.update = () => {
//          toggle++;
//          console.log(toggle)
//     };
// };

// const x = new Toggle(false);
// x.update();
// x.toggle = true;
// x.update();

// const y = new Add(0);
// y.update();
// y.update();
// y.update();
// y.update();

// const giveMeEms = (pixels) => {
//     const baseValue = 16;
//     const doTheMath = () => {
//         return pixels/baseValue
//     }
//     return doTheMath;
// }


// const smallSize = giveMeEms(12);
// const mediumSize = giveMeEms(18);
// const largeSize = giveMeEms(24);
// const xLargeSize = giveMeEms(32);

// log("Small: ", smallSize());
// log("Medium: ", mediumSize());
// log("Large: ", largeSize());
// log("X-Large: ", xLargeSize());


// const addClosure = (num1) => {
//     const addTwo = (num) => {
//         return num1 + num
//     }
//     return addTwo;
    
// }

// const startWithFive = addClosure(5);
// const addNine = startWithFive(9);
// const addTen = startWithFive(10);
// log(addNine);
// log(addTen);

// const count1 = (userNum) => {
//     const count2 = (count=1) => {
//         let newNum = count + userNum++;
//         return newNum
//     }
//     return count2;
// }

// const countCaller = count1(10);
// log(countCaller());
// log(countCaller());
// log(countCaller());
// log(countCaller());
// //   const downCount = counterObject(3);
// // log(downCount.increment(3));
// // const upCount = downCount();
// // log(downCount.increment(3));
// // log(downCount.increment(3));
// // log(downCount.increment(3));
// // log(downCount.decrement(9));
// // log(downCount.decrement(9));
// // log(downCount.decrement(9));

// const objectCounter = (num) => {
//     const objectFunction = () => {
//         const object = {
//             count: num,
//             increment: (count) => {
//                 count++
//                 return count;
//             },
//             decrement: (count) => {
//                 count--;
//                 return count;
//             },
//         }
//         return object;
//     }
//     return objectFunction;
// }

// const counterObject = (() => {
//     let num = 0
//     const makeAChange = (index) => {
//         num += index;
//     }
//     const object = {
//         increment: () => {
//             makeAChange(1);
//         },
//         decrement: () => {
//             makeAChange(-1);
//         },
//         index: () => {
//             return num;
//         },
//     }
//     return object;
// })();
// // counterObject.increment();
// console.log("counter: ", counterObject.index());



// const counter = (function() {
//     let privateCounter = 0;
//     function changeBy(val) {
//       privateCounter += val;
//     }
//     const object = {
//       increment: function() {
//         changeBy(1);
//       },
//       decrement: function() {
//         changeBy(-1);
//       },
//       value: function() {
//         return privateCounter;
//       }
//     };
//     return object;
//   })();
  
//   console.log(counter.value()); // logs 0
//   counter.increment();
//   counter.increment();
//   counter.increment();
//   counter.increment();
//   console.log(counter.value()); // logs 2
//   counter.decrement();
//   counter.decrement();
//   console.log(counter.value()); // logs 1


// // this is the same as 
// const add25th = num1 => num2 => num1 + num2;
// // this 
// function add25thClosure(num1){
//     return function(num2){
//         return num1 + num2
//     }
// }

// // Global Scope
// log('global scope starts here');
// const imAGobal = 5;

// const asyncAdd = () => {
//     const a = 1;
//     const b = 2;

//     const innerAdd = () => {
//         console.log(`${a+b+imAGobal}`);
//     }

//     setTimeout(() => {
//         innerAdd();
//     },1000)
// }
// asyncAdd;

// (function counterScope() {
//     let count = 0;
//     const container = document.createElement('button');
//     container.innerText = "-";
//     body.append(container);
// }());
