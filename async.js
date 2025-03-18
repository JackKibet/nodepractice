const { readFile, writeFile } = require('fs')
const os = require('os')
const user = os.userInfo()
readFile('./content/file.txt','utf8',(err, result) => {
    if(err) {
        console.log(err, `hello ${user.username} this file is not found`);
        return
    }
    else {
        const first = result;
        console.log(`hello ${user.username} the result is : ${first}`);
        readFile('./content/second.txt','utf8', (err, result2) => {
            if(err){
                console.log(err, `hello ${user.username} this file is not found`);
        return
            }
            else {
                const second = result2;
                writeFile('./content/final.txt', `here is the result ${first}, ${second}, '\n'`, { flag: 'a'}, (err, value) => {
                    if (err) {
                        console.log(err);
                       return 
                    }
                    else{
                        console.log('file created succesfully');
                        
                        
                    }
                })
            }
        })
    }
})