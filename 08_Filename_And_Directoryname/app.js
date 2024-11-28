import {num} from './math.js'
import.meta.a = 'Debojeet'
const {dirname, filename}  = import.meta;
// const {dirname: __dirname, filename, a}  = import.meta;

// console.log(meta);
// console.log(a);
// console.log(filename, dirname)
// console.log(__dirname, filename)

console.log(dirname);
console.log(process.cwd());

process.chdir('./src')
