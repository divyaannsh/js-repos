const promiseOne  = new Promise(function(resolve,reject){
    // do an async task
    // dbcalls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consume");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
resolve()
    },1000)
}).then function(){
    console.log("Async 2 revolved");
}


const PromiseThree = new Promise(Function (resolve, reject){
    setTimeout(function(){
           resolve({username:"chai", email :"chai@exampl.e"})
    },1000)
})
PromiseThree.then(function(){

})
// console.log("promise consume");

const promisefive = new Promise(function(resolve,reject){

})


async function consumerPromiseFive({
    const response = await promisefive
    console.log(response);
}) 