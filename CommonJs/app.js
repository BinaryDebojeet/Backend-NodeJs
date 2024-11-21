function sum(... num){

    return num.reduce((curr, accu) => curr + accu);
}

console.log(sum(7,7,9));
