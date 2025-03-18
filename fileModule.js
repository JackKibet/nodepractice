//the file module allows us  to interact with the file system



// file module there are two flavors when it  comes to file module 
// we can do it syncronous/blocking or asyncronous/non-blocking
const {readFileSync, writeFileSync} = require('fs')
// readfilesync will read the content of the file that you provided synronously
const first = readFileSync('./content/file.txt', 'utf8')
const second = readFileSync('./content/subfolder/file2.txt', 'utf8')
console.log(first, second);

//writefilesync will create a file if it doesnt find the file you have provided as argument
// and override the content of the file is the file is available but if you provide a flag property, it will append the new content to the file
writeFileSync('./content/jackKibet.txt', `here is the result: ${first}, ${second}`, { flag: 'a' })
