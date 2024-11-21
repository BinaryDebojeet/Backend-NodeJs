function sum(... num){

    return num.reduce((curr, accu) => curr + accu);
}

function product(... num){

    return num.reduce((curr, accu) => curr * accu);
}
// module.exports = {
//     sum, 
//     product
// }  
// module.exports = "Hi"
// console.log(module.exports);
module.exports.sum = sum;
module.exports.product = product;
// module.exports = {
//     sum, 
//     product
// }

// console.log(module.exports);
// console.log("Sum.js is Running");