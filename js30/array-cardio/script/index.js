const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are teh best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 },
];

//Some and Every Checks
//Array.prototype is at least one perons 19?
// const isAdult = people.some((person) => {
//     const currentYear = (new Date()).getFullYear();
//     if (currentYear - person.year >= 19) {
//         return true;
//     }
// })
//Determines whether the specified callback function returns true for any element of an array.

// @param callbackfn — A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.
const isAdult = people.some(person => (new Date().getFullYear()) - person.year >= 19);
console.log(isAdult);

// Determines whether all the members of an array satisfy the specified test.
const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log(allAdults);

 // Array.prototype.find()
// Find is like filter, but instead returns just the first one you are looking for or undefinded 
// find the comment with the ID of 823423
const comment = comments.find(comment => comment.id === 823423);
console.log(comment);

// const newComments = [
//     ...comments.slice(0, index),
//     ...comments.slice(index + 1)
// ];




let inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const morePeople = ['Beck, Glenn', 'Becker, Carl', 'Beckett,        Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven,         Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow,         Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion,      David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington,          Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd',     'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle,     Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard,            Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',       'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden,         Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh',    'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair,     Robert', 'Blair, Tony', 'Blake, William'];


// Array.prototype.filter()    
// 1. Filter the list of inventors for those who were born in the 1500's
const inventorsBornIn1500Array = inventors.filter((inventor) => {
    return inventor.year >= 1500 && inventor.year <= 1600;
})  
console.log(inventorsBornIn1500Array)

//Array.prototype.map()
// Give us an array of the inventor first and last names
const inventorsFullNamesArray = inventors.map((inventor) => `${inventor.first} ${inventor.last}`);
console.log(inventorsFullNamesArray);


inventors = inventors.map((inventor) => {
    return {...inventor, 
            age: (inventor.passed - inventor.year)
    };
})
console.log(inventors)
// // const sortedYears = years.sort((a, b) => a -b);
// console.log(inventors);

// const inventorsWithAge = inventors.map(inventor => {
//     return inventors = {...inventors, age: 0}
// })
// console.log(iTry);
// const ageLoop = () => {
//     for (let i = 0; i < inventors.length; i++) {
//         let anAge = (inventors[i].passed - inventors[i].year);
//         inventors[i] = {...inventors[i], age: anAge};
//     }
//     return inventors;
// };
console.log(ageLoop())
const sortByAge = inventors.sort((a, b) => {
    for(let i = 0; i < inventors.length; i++) {
        a.age - b.age
    }
});
console.log('Sort By Age: ', sortByAge);
// const inventorsAges = inventors.map(inventor => {
//     inventor.forEach(i => {
//         return i = {
//             ...i,
//             year: 0,
//         }
//     })
// })


//Array.prototype.sort() 
// sort the inventors by birthdate, oldest ot youngest
// const inventorsByAgeArray = inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year));
// console.log(inventorsByAgeArray)

// const anAge = inventors[0].passed - inventors[0].year;
// console.log(anAge);

// const birth = inventors.map(i => i.year);
// const death = inventors.map(i => i.passed);
// const age = death.map((y, death)=> {
//     return death.map((p, y) => {
//         p - y
//     })
    
// })

// const findAnAge = () => {
//     const ageArray = inventors.map((inventor, birth, death) => {
//         inventor.death - inventor.birth
//     });
//     return ageArray;
// }

// console.log(findAnAge());

// Array.prototype.sort();
const inventorsByYearOfBirth = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.log(inventorsByYearOfBirth)

// Array.prototype.reduce();
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

// Sort the inventors by years lived
const oldest = inventors.sort((a, b) => {
    const lastInventor = a. passed - a.year;
    const nextInventor = b.passed - b.year;
    return lastInventor > nextInventor ? -1 : 1;
});
console.table(oldest);

const alpha = morePeople.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
});
console.table(alpha);

 // 8. Reduce Exercise
    // Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk',       'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck',     'pogostick'];

const transportation = data.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.table(transportation);