`Square every digit `

`For Example 9119 would return 811181 because 9^2 = 81, and 1^2 = 1`
function squareDigits(num){
  
  
}

`Note: The function accepts an integer and returns an integer`


































const secondAnswers = {
  one: function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  },
  two:   function squareDigits(num){
    var array = num.toString().split('').map( function(int) {
      var i = parseInt(int);
      return i * i;
    });
    
    return parseInt(array.join(""));
  },
  three: squareDigits = (num) => Number((num + '').split("").map(c => c *c).join("")),
  four: function squareDigits(num){
    let numString = num.toString();
    let digits = [];
    
    for (let i = 0; i < numString.length; i++) {
      digits[i] = (numString[i] * numString[i]);
    }
    return Number(digits.join(''));
  }, 

}
// // const num = 123
// // console.log(secondAnswers.three(num));

  
  
  
  
  




