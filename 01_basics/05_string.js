const name = "ravi-rr"
const repoCount = 50

//console.log(name + repoCount + "value");

console.log(`Hello my name is ${name}, and my repocount id ${repoCount}`);

const gameName = new String('raviraaj')

//  console.log(gameName[01]);
//  console.log(gameName.__proto__);

//  console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,3)
console.log(anotherString);

const newStringOne = "     raviraaj    "
console.log(newStringOne);
console.log(newStringOne.trimEnd());

const url = "https//ravi02.com/ravi%20saini"
console.log(url.replace('%20','-'))

console.log(url.includes('ravi'))

