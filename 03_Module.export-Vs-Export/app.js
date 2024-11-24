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
exports = {
    sum, 
    product
}
// let abc = module.exports;

// abc.sum = sum;
// abc.product = product;
