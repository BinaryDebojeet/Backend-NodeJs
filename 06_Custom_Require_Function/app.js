const b = loadModule('./math.js')
const {sum} = loadModule('./sum.js');
const vm = require('vm');
vm.runInThisContext('var a = 5')
console.log(sum(1,2,3,4));
// console.log(typeof sum)
function loadModule(path){

    const fs = require('fs');
    const vm = require('vm');
    const fileContent = fs.readFileSync(path).toString();
    console.log(fileContent);
    return (function (send) {
    
        // Module wrapper come here
        eval(fileContent);
    //    console.log(send);
    return send;
      })({}) ;
      
}