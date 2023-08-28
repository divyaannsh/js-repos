console.log(2>1);

console.log(null>0);
console.log(null>=0);
//===4
console.log("2"==2);

//datatypes interview 
//primitive datatypes
//7 types : string,number , boolean, null , undefined,symbol, bigInt

const score = 100 
const scoreValue =10.3
const isLoggedIn = false
const outsideTemp =null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id== anotherId);
//refrence type(non primitive)
      //arrray, objects,funtion   

     //stack(primitive),heap (non-primitive)
     let myYoutubName = "divyansh"

     let anothername =myYoutubName
     anothername ="chaiaurcode"
     console.log(anothername);
     console.log(myYoutubName);

     let userOne ={
      email: "user@google",
      upi: "1234"
     }
     let userTwo = userOne
     userTwo.email ="hitsh@ooglr.com"
     console.log(userOne.email);
     console.log(userTwo.email);
