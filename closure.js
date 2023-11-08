const secureBooking= function(){
    let passengerCount=0;

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers.`)
    }
}
const bookedBy= secureBooking();
// bookedBy(); //1
// bookedBy(); //2
// bookedBy(); //3

console.dir(bookedBy); //[Function (anonymous)]

//  here bookedBy is a function bcz inside bookedBy have secureBooking function and this secureBooking function return a new function. So, return function stored in bookedBy variable, thats the reason bookedBy is a function.We can call bookedBy function directly. sourceBooking() executed from call stack and return function stored in bookedBy variable.When we call bookedBy function then return function will execute and inside return function scope have access his parents function scope execution-context like.. passengerCount variable.And this accessing system is called closure.



// -----------------Another  Example ---------------------
let f;

const g=function(){
    const a=25;
    f=function(){
        console.log(a*2);
    };
};

const h=function(){
    const b=50;
    f=function(){
        console.log(b*2);
    };
};

g();  // [Function (anonymous)]
f();  //50
console.dir(f);  // [Function: f]

h();   
f();  // 100
console.dir(f);  //[Function: f]


// -----------------Another  Example of closure ---------------------

const passenger=function(n,wait){
    const perGroup=n/3;

    // inside setTimeout have anonymous callback function and time parameters.
    setTimeout(function(){
        console.log(`Passengers are ${n}`);
        console.log(`There are 3 groups, each with ${perGroup} passengers.`)
    },wait*1000)

    console.log(` Wait for ${wait} seconds.`);
};
passenger(100,5);

