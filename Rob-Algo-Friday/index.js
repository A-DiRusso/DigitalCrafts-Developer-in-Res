const fs = require('fs');

fs.readFile('./numbers.txt', (err, data) => {
  if (err) throw err;
  const numArr = Array.from(data.toString().split('\n'));
  const allSingleNumsArr = (numArr.reduce((a,b) => a + b).split(''));
  console.log(allSingleNumsArr.map(str => parseInt(str)).reduce((a,b) => a + b));  
});



// const convertPhone = (phoneStr) => {
//   // const str = phoneStr.toString();
//   // console.log(str);
//   const regex = /[0-9]/g
//   const phoneNumber = phoneStr.match(regex);
//   console.log(phoneNumber.toString().match(/\d{3}\d{3}\d{4}/g));
// }

// const phoneStr = '5555555555'
// console.log(convertPhone(phoneStr));




const caseConverter = (str, conversionType) => {
  let convertArr = [];
  let splitStrArr = str.split(' ');
  let newStrArr = splitStrArr.slice(0,1);
  let endStrArr = splitStrArr.slice(1, splitStrArr.length);

  switch(conversionType){
    case 'camelCase':
      convertArr.push(newStrArr[0].toLowerCase());
      const capsArr = endStrArr.map(word => word[0].toUpperCase() + [...word].splice(1, word.length).join(''));
      convertArr.push(...capsArr);
      const camelStr = convertArr.reduce((a,b) => a + b).toString();
      return camelStr;       
      break;
    case 'snake_case':
      convertArr.push(newStrArr[0].toLowerCase());
      convertArr.push('_');
      const snakesArr = Array.from(endStrArr.join('_'));
      const endStr = snakesArr.join('');
      convertArr.push(endStr);
      const snakeStr = convertArr.reduce((a,b) => a + b).toString();
      return snakeStr;    
      break;
    case 'PascalCase':
      const pascalStr = splitStrArr.map(word => word[0].toUpperCase() + [...word].splice(1, word.length).join('')).reduce((a,b)=>a+b);
      return pascalStr;
      break;
    default:
      return 'Not a valid case'
  }

}
console.log('snake_case');
console.log(caseConverter('Hello world more words', 'snake_case'));
console.log()
console.log()
console.log('camelCase');
console.log(caseConverter('Hello world more words', 'camelCase'));
console.log()
console.log()
console.log('PascalCase');
console.log(caseConverter('Hello world more words', 'PascalCase'));
















  // if( conversionType === 'camelCase'){
  //   convertArr.push(newStrArr[0].toLowerCase());
  //   const capsArr = endStrArr.map(word => word[0].toUpperCase() + [...word].splice(1, word.length).join(''));
  //   convertArr.push(...capsArr);
  //   const camelStr = convertArr.reduce((a,b) => a + b).toString();
  //   return camelStr;   
  // } else if(conversionType === 'snake-case'){
  //   convertArr.push(newStrArr[0].toLowerCase());
  //   convertArr.push('-');
  //   const capsArr = Array.from(endStrArr.join('-'));
  //   const endStr = capsArr.join('');
  //   convertArr.push(endStr);
  //   const snakeStr = convertArr.reduce((a,b) => a + b).toString();
  //   return snakeStr;
  // }