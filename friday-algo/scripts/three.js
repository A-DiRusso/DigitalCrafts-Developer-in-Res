`Fill out this function that will take in an integer
and return a string 
                    "Value is _ _ _ _ _"
where the given value is padded with 00000's until the lenght of 
value is 5.`

function solution(value){
  
}


`solution(5) // should return "Value is 00005"
`






































const thirdAnswers = {
  one: function solution(value){
    let str = "00000"
    str += value
    let newStr = str.slice(value.toString().length)
    return `Value is ${newStr}`
  },
  two: function solution(value){
    return "Value is " + ("00000" + value).slice(-5);
  },
  three: solution = value => 'Value is ' + value.toString().padStart(5, '0'),
  four: function solution(value) {
    return "Value is " + new Array(6 - String(value).length).join(0) + value;
  },
}

// console.log(thirdAnswers.four);