// const timer = require('./timer.js')
import timer from './timer.js'

console.log(timer);


/*

Common js module
Synchronus file loading
file extension optional
Strict mode is not enabled by default
if we give full file path, then we can load any file using cjs(commonJs)
it is a convention to add cjs in the file extension
Await keyword can not be used at top level
Optional to set "type":"commonJs in package.json because its is default in node js"
In cjs this keyword points to module.exports by default
cjs imports are not hoisted
It can only allow one export values
       -------------------

ES6 module
Asynchronus file loading
file extension mandatory
Strict mode is not enabled by default
we can not load any file, only js and mjs(moduleJs) files are allowed
it is a convention to add cjs in the file extension
Await keyword can be used at top level
we have to set  "type": "module" in package.json
In mjs this keyword is undefined 
mjs imports are hoisted
ES6 allows to export multiple values
*/