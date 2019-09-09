`Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:`

"c".isUpperCase() == false
"C".isUpperCase() == true
"hello I AM DONALD".isUpperCase() == false
"HELLO I AM DONALD".isUpperCase() == true
"ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
"ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true



String.prototype.isUpperCase = function(word) {
  
}












































const firstAnswers = {
  one: String.prototype.isUpperCase = function() {
    return this.toString() === this.toUpperCase();
  },
  two: String.prototype.isUpperCase = function () {
    return !/[a-z]/.test(this);
  },
  three: String.prototype.isUpperCase=function() {return this==this.toUpperCase()}, 
}





// console.log(firstAnswers.two);
