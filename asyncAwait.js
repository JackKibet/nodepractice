// 1. Async = makes a function return a promise
// 2. Await = makes an async function wait for a promise
// asyncronous vs syncronous code javascript
// 1.executes line by line consecutively in a sequencial manner
// you can say that it is code that  waits for an operation to complete
// 2. asyncronous code - allows multiple operations to be performed concurrently
// without waiting doesnt block the execution flow and allows the program to continue

function walkDog(){
    const dogWalked = true;
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        if (dogWalked) {
            resolve('You walked the Dog')
        }
        else{
            reject('You did not walk the dog')
        }
       }, 1500);
    })
  }
  function cleanKitchen(){
    const kitchenCleaned = true;
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (kitchenCleaned) {
            resolve('You cleaned the itchen')
        }
        else{
            reject('You did not clean the kitchen')
        }
    }, 2000);
   })
  }
  function takeOutTrash(){
    const trashTaken = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           if (trashTaken) {
                resolve('trash taken out')
           }
           else{
            reject('you did not take out the trash')
           } 
        }, 1000);
    })
    
  }

async function doChores(){
    const dogWalkedResult = await walkDog();
    console.log(dogWalkedResult);
    
    const kitchenResult = await cleanKitchen();
    console.log(kitchenResult);
    
    const trashResult = await takeOutTrash();
    console.log(trashResult);
    
  }
  doChores().catch((err) => {console.log(err);
  })