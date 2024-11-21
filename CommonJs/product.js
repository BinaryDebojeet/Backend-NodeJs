function product(... num){

    return num.reduce((curr, accu) => curr * accu);
}
module.exports = product;  