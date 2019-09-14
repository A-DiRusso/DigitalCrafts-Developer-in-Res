JavaScript Loops and Arrays:

While Loop:
    let count = 0;
    while( count >= 100) {
        //code
        count++;
    }

for Loop: 
    for (let count = 0; count <= 100; count++) {
        ///code
    }

Arrays - like a python list but less strict

const powerRangers = ['Jason', 'Billy', 'Trina', 'Zack', 'Kim'];

powerRangeres[0] = 'Jason';
powerRangers.push('Tommy'); ///adds Tommy to end of the array;
const powerRangersSeason2 = [...powerRangers]; // ... is the spread operator

const powerRangersSeason2 = [...powerRangers, 'Aguitar Rangers']; // adds the spread and 'Aguitar Rangers' the order matters 'Aguitar' could go first, and then would be powerRangersSeason2[0]

const show = powerRangersSeason2.pop(); // removes 1 from the end - can be modified for more than one
const show powerRangerSeason2.shift(); // removes 1 from the begining - can be modified for more than one

JavaScript Objects:

Most things are objects including functions
Objects are collections of related stuff




