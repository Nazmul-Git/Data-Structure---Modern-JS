const secureBooking= function(){
    let passengerCount=0;

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers.`)
    }
}
const bookedBy= secureBooking();
bookedBy(); //1
bookedBy(); //2
bookedBy(); //3

console.dir(bookedBy); //[Function (anonymous)]

//  here bookedBy is a function bcz inside bookedBy have secureBooking function and this secureBooking function return a new function. So, return function stored in bookedBy variable, thats the reason bookedBy is a function.We can call bookedBy function directly. sourceBooking() executed from call stack and return function stored in bookedBy variable.When we call bookedBy function then return function will execute and inside return function scope have access his parents function scope execution-context like.. passengerCount variable.And this accessing system is called closure.