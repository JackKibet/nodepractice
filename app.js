//const amount = 8;

//if(amount > 10) {
   // console.log("number is large");
    
//}
//else{
    //console.log("number is small");
    
//}
console.log(`hey its my 1st node app`);
console.log('hello jack');
const math = Math.floor((Math.random() * 90 ));
console.log(math);
const names = require('./names')


const sayHi = require('./func')

sayHi('jack')
sayHi(names.jack)
sayHi(names.john)

require('./summation')
// built-in modules
//1. operating system module
const os = require('os');
const { release } = require('process');
// by referencing os directly you simply mean that the module is global
//user info node knows we are looking for a bult-in module
const user = os.userInfo()
console.log(user);
// system uptime
console.log(`system uptime is: ${os.uptime()} seconds`);

// current operating system

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}
console.log(currentOS);
// path  module
const path = require('path')
// type of file and folder separator in your system
console.log(path.sep);
// file path by also providing a separator you can create a relative file path

const filePath = path.join('/content', 'subfolder', 'text.txt')
console.log(filePath);

// by using the method basename()  you will receive the file you are looking for or creating
//the method is basename()
const base = path.basename(filePath)
console.log(base);
// the resolve method returns an absolute path meaning from c directory to where the file is

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute);
//console.log(os);
