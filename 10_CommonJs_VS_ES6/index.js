// console.log(this)
// module.exports.num = 33
// module.exports.user = {name: "Debojeet"}
// console.log(this)

// import timer from './timer.js'

// console.log("Running index.js comes last");
// const timer = require('./timer.js');

( async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    console.log(response)
})()    // We are using effe function because we are using common js module

// In module js we do not need any funtions.
const response = await fetch('https://jsonplaceholder.typicode.com/todos');
console.log(response) 