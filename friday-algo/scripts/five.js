
const duplicate = (arr) => {
  
}




const dup = duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]

// console.log(dup);
















// ===================================================================================














`Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
`

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
domainName("www.google.ru") == "cnet"






















// ===================================================================================









const fifthAnswers = {
  one: function domainName(url){
    let httpString = url;
   // //  console.log(httpString);
   //  let stringSplit = httpString.split('.');
   //  console.log(stringSplit[0]);
   //  console.log(stringSplit[1]);
   let replacementString = httpString.replace('//', '.');
   console.log(replacementString);
   let splitRepString = replacementString.split('.');
   console.log(splitRepString);
   
   if (splitRepString[1] === "www") {
       return splitRepString[2];
         } 
     if (splitRepString[0].length > 6 || splitRepString[0].includes('c') || splitRepString[0].includes('7')) {
     return splitRepString[0];
     }
   return splitRepString[1];
   },
   two: function domainName(url){
    url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
  },
  three: function domainName(url){
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
  },
  four: function domainName(url){
    var cleanUrl = '';
    var restricted = ['de', 'br', 'fr', 'io', 'it', 'net', 'info', 'tv', 'name', 'users', 'pro', 'img', 'error', 'uk', 'warez', 'www', 'ru', 
    'http', 'https', 'com', 'co', 'jp', 'us', 'net', 'org', 'edu', 'biz', 'za', 'index', 'php', 'kata', 'default', 'html', 'archive', 'error'];
    var splitAddr = url.split(/[/.:]/);
    for(var i = 0; i < splitAddr.length; i++) {
      if(restricted.indexOf(splitAddr[i]) == -1) {
        cleanUrl += splitAddr[i];
      }
    }
    return cleanUrl;
  }
}

// function domainName(url){
//   return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
// }

function domainName(url){
  let httpString = url;
 // //  console.log(httpString);
 //  let stringSplit = httpString.split('.');
 //  console.log(stringSplit[0]);
 //  console.log(stringSplit[1]);
 let replacementString = httpString.replace('//', '.');
//  console.log(replacementString);
 let splitRepString = replacementString.split('.');
//  console.log(splitRepString);
 
 if (splitRepString[1] === "www") {
     return splitRepString[2];
       } 
   if (splitRepString[0].length > 6 || splitRepString[0].includes('c') || splitRepString[0].includes('7')) {
   return splitRepString[0];
   }
 return splitRepString[1];
 }
// console.log(domainName('www.google.com'))