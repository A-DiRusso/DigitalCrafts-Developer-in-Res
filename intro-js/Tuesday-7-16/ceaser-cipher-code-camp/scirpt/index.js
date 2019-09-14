function ceaserDeCipher(str) {
    const string = str.toUpperCase();
    return string.split('')
    .map.call(string, function(char){
        x = char.charCodeAt(0);
        if (x < 65 || x > 90) {
            return String.fromCharCode(x);
        } 
        else if (x < 78) {
            return String.fromCharCode(x + 13);
        }
        return String.fromCharCode(x - 13)
    }).join('');

}

console.log(ceaserDeCipher("SERR PBQR PNZC"));
console.log(ceaserDeCipher("serr pbqr pnzc"));

function ceaserCipher(str) {
    const string = str.toUpperCase();
    return string.split('')
    .map.call(string, function(char){
        x = char.charCodeAt(0);
        if (x < 65 || x > 90) {
            return String.fromCharCode(x);
        } 
        else if (x < 78) {
            return String.fromCharCode(x + 13);
        }
        return String.fromCharCode(x - 13)
    }).join('');

}

console.log(ceaserCipher("FREE CODE CAMP"));
console.log(ceaserCipher("free code camp"))