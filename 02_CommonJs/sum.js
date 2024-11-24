function sum(... num){

    return num.reduce((curr, accu) => curr + accu);
}

for(let i=0; i<10; i++){
    console.log(i);
    
}

console.log("Sum.js is Running");

module.exports = sum;