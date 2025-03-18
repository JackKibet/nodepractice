// a promise is an object that manages asyncronous operations
// it promises to return a value  PENDING => RESOLVED OR REJECTED
// syntax - new Promise((resolve, reject) => {})

    // DO THESE CHORES IN ORDER 
    // 1. WALK THE DOG
    // 2. CLEAN THE KITCHEN
    // 3. TAKE OUT THE TRASH

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
walkDog().then((value) => {console.log(value); return cleanKitchen()
}).then((value) => {console.log(value); return takeOutTrash()
}).then((value) => {console.log(value);
}).catch((err) => {console.log(err);
});
