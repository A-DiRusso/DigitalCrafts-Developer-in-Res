//jS
// *******Array Methods:**********
//for each
const numbers = [1, 2, 3, 4, 5]
function log(what) {
    console.log(what);
}
console.log("@@@@@@@@ forEach Print @@@@@@@@@");
numbers.forEach(log);

console.log("@@@@@@@@ forEach Print @@@@@@@@@");
numbers.forEach((what) => {
    console.log(what);
});

console.log("@@@@@@@@ for Loop Print @@@@@@@@@");
for(let what = 0; what < numbers.length; what++) {
    console.log(numbers[what]);
}

numbers.forEach((what, i, arr) => {
    console.log(`${i}: ${what} is a part of ${arr}`);
});

const squares = [];

function square(n) {
    return n * n;
}

numbers.forEach((number) => {
    squares.push(square(number));
});
console.log("@@@@@@@@ forEach Square @@@@@@@@@");
console.log(squares)

const squareMap = numbers.map(square);
console.log("@@@@@@@@ Map Square @@@@@@@@@");
console.log(squareMap);




// Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:

// Write two versions of the above function. One using a while loop and the other using a for loop.

function forLoopPrintNumbers(start, end) {
    for(let i = start; i  <= end; i++) {
        // let numberList = document.createElement('h1');
        //     numberList.classList.add('number-list');
        //     numberList.append(i);
            console.log(i);
    }
}
console.log("@@@@@@@@ For Loop Print @@@@@@@@@");
forLoopPrintNumbers(2, 6);
function whileLoopPrintNumbers(start, end) {
    let i = start;
    while (i >= start && i <= end) {
        console.log(i);
        i++;
    }
}
console.log("@@@@@@@@ While Loop Print @@@@@@@@@");
whileLoopPrintNumbers(3, 7);

// Write a function printSquare which is given a size and prints a square of that size using asterisks.

function printSquare(size) {
    let row = '';
    for (let i = 0; i < size; i++) {
        row = '';
        row = row + i;
        for (let j = 0; j < size; j++) {
            row = row + '*'
        }
        console.log(row);
    }
}
console.log("@@@@@@@@ Print Box @@@@@@@@@");
printSquare(5);
// Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

function printBox(width, height) {
    for (let i = 1; i <=height; i++) {
        if (i === 1 || i === height) {
            console.log('*'.repeat(width));
        } else {
            console.log('*' + ' '.repeat(width - 2) + '*');
        }
    }
}
console.log("@@@@@@@@ Print Box @@@@@@@@@");
printBox(5, 5);

// Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text
function makeRow(length, num) {
    let row = '';
    for (let i = 0; i < length; i++) {
        row = row + num;
    }
    return row;
}

function printBanner(text) {
    console.log(makeRow(text.length + 8, '*'));
    console.log('*   ' + text + '   *');
    console.log(makeRow(text.length + 8, '*'));
}
console.log("@@@@@@@@ Print Banner @@@@@@@@@");
printBanner("We Build The Web");
// Write a function factors which is given a number and returns an array containing all its factors

function numFactors(num) {
    let factors = [];
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    console.log(factors);
}
console.log("@@@@@@@@ Number Factors @@@@@@@@@");
numFactors(10);

// Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string

function cipher(string, offset) {
    let code = '';
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        let charCode = string.charCodeAt(i);
        if (charCode >= 65 && charCode <= 122) {
            letter = String.fromCharCode(((charCode - 65 + offset) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            letter = String.fromCharCode(((charCode - 97 + offset) % 26) + 97);
        }
        code += letter;
    }
    return code;
}
console.log("@@@@@@@@ Ceaser Cipher @@@@@@@@@");
console.log(cipher('Genius without education is like silver in the mine', 13))

// Write a function decipher which is given a string, an offset, and returns the original message
function decipher(string, offset) {
    let deCoded = '';
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        let charCode = string.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            letter = String.fromCharCode(((charCode - 65 + offset) % 26 + 65));
        } else if (charCode >= 97 && charCode <= 122) {
            letter = String.fromCharCode(((charCode - 97 + offset) % 26) + 97);
        }
        deCoded += letter;
    }
    return deCoded;
}
console.log("@@@@@@@@ Ceaser DeCipher @@@@@@@@@");
console.log(decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13));

// Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions
const leet = [ 
    {
    "e" : 3,
    "g" : 6,
    "i" : 1,
    "o" : 0,
    "s" : 5,
    "t" : 7,
}
];
// these are all arrays containing the Objects values
const leetKeys = Object.keys(leet[0]);
const leetValues = Object.values(leet[0]);
const leetEntries = Object.entries(leet[0]);

console.log(`this is the Array of Object.keys(leet[0]): ${leetKeys}`)
console.log(`this is the Array of Object.values(leet[0])", ${leetValues}`)
console.log(`this is the Array of Object.entries(leet[0])", ${leetEntries}`)
console.log("Object.keys(leet[0]).map(k) return Object.values(leet[0])", leetKeys.map((v) => {v.leetValues}));

function leetSpeak(string, leet) {
    let leetCode = '';
    let leetSpoken;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'A' || string[i] === 'a') {
            string[i] = 4;
            leetCode += string[i];
        }  else if (string[i] === 'E' || string[i] === 'e') {
            leetSpoken = 3;
            leetCode += leetSpoken;
        } else if (string[i] === 'G' || string[i] === 'g') {
            leetSpoken = 6;
            leetCode += leetSpoken;
        } else if (string[i] === 'I' || string[i] === 'i') {
            leetSpoken = 1;
            leetCode += leetSpoken;
        } else if (string[i] === 'O' || string[i] === 'o') {
            leetSpoken = 0;
            leetCode += leetSpoken;
        } else if (string[i] === 'S' || string[i] === 's') {
            leetSpoken = 5;
            leetCode += leetSpoken;
        } else if (string[i] === 'T' || string[i] === 't') {
            leetSpoken = 7;
            leetCode += leetSpoken;
        } else {
            leetCode += string[i];
        }
    }
    return leetCode;
}
console.log(leetSpeak('aaAeg iost', 13))

// Write a function, which is given a string, return the result of extending any long vowels to the length of 5

function longVowels(string) {

}

// Write a function sumNumbers which is given an array of numbers and returns the sum of the numbers

function sumNumbers(sumArray) {

}

// Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array

function positiveNumbers(posArray) {

}

// Write a function matrixAdd which is given two two-dimensional arrays, and returns a new two-dimensional array containing their matrix sum

function matrixAdd(arrOne, arrTwo) {

}

// Write a function matrixMultiply which is given two two-dimensional arrays - you can assume the matricies are of size 2x2. It will return the result of matrix multiplication between the two given matricies

function matrixMultiply(arrOne, arrTwo) {

}

// Write a function rockPaperScissors which takes the throw of player 1 and the throw of player 2. A throw can have the values of 'rock', 'paper', or 'scissors'. It will return 'player 1' if player 1 wins, 'player 2' if player 2 wins, and 'draw' if there is no winner

function rockPaperScissors(player1, player2) {

}

// Write a function ticTacToe which takes a two-dimensional array of size 3x3. Each cell in the two dimensional array can be one of 'O', 'X', or null. The ticTacToe function will determine the winner by

function ticTacToe(board) {

}





