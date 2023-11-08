const secureBooking= function(){
    let passengerCount=0;

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers.`)
    }
}
const bookedBy= secureBooking();
bookedBy();
bookedBy();
bookedBy();

console.dir(bookedBy); //[Function (anonymous)]
//  here bookedBy is a function bcz inside bookedBy have secureBooking function and this secureBooking function return a new function. So, return function stored in bookedBy variable, thats the reason bookedBy is a function.We can call bookedBy function directly.