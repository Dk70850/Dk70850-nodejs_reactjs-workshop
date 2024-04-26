//function add(a,b) {
    //return a+b;
//}
//console.log(add(5,3))

//traditional way
//function add(a,b){
    //console.log("hey i am inside function")
    //return a+b
//}
//let sum = console.log(add(5,3))

//modern way
//let add = (a,b)=>{
    //return a+b;
//}
//console.log(add(2,3))

//non blocking and blocking programming languages

//task A//2ms
//task B//2ms
//Heavy Task c//20ms
//task D//2ms

//Sleep function(python is synchronous while java script is asynchronous)
//console.log("first line")
//function secondTask(){
//setTimeout(function(){
    //console.log("second line")
//},1000)
//}
//secondTask()
//console.log("third line")
async function main(){
    console.log("first line")
    async function secondTask() {
    await new Promise(function(resolve, reject){
        setTimeout(function () {
            try{
                console.log("second line")
                resolve()
            }
            catch(err){
                reject()
            }
       
    }, 1000)
})
}
await secondTask()
console.log("third line")
}
