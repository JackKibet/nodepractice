// lets create a function thats going to return a new promise




//callbacks

function hello(name, callback){
    console.log(`hello ${name}`);
    callback()
}

hello('Jack Kibet', () => {add(12, 4)})

// function add
function add(a, b){
    return console.log(a + b);
    
}


// in the above examples ive created  a callback fucntion the add fucntion and passed it to the hello function


// lets try another callbacks

function sayHello(a, b, callback){
    const result = a + b;
    callback(result); // pass the result to the callback
}

function display(result){
console.log(result);// log the result

}

sayHello(3, 4, display)

// lets learn how to use settimeout

function walkDog(callback){
    setTimeout(() => {
        console.log('You walk the dog');
    }, 1000); 
    callback()
}
walkDog(() => {cleanKitchen(() =>{takeOutTrash(() => {
    console.log(
    'you finished all the chores'
    );}
    
)})})
function cleanKitchen(callback) {
    setTimeout(() => {
        console.log('You clean the kitchen');
    }, 2000);
    callback()
}

function takeOutTrash(callback) {
    setTimeout(() => {
        console.log('You took out the trash');
        callback()
    }, 3000); 
       
}




console.log('task 1');// task 2 waits for task 1
console.log('task 2');// task 3 waits for task 2
console.log('task 3');// task 3 executes last

