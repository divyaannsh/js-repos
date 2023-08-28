const name =" hitesh "
const repoCount = 50
console.log(name + repoCount);
//backtick to call value
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('divyansh')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
console.log(newString);
const anotherString =gameName.slice(-7,4)
console.log(anotherString);

const newStringOne = "   divyansh "
console.log(newStringOne);
console.log(newStringOne.trim());