// 1. higher order function allow callback function
const oneWord = (str) => {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirst = (str) => {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher Order Function
const transformer = (str, fn) => {
  console.log(`Original str: ${str}`);
  console.log(`Transform str: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("javascript is the best.", upperFirst);
//Original str: javascript is the best.
//Transform str: JAVASCRIPT is the best.
//Transformed by: upperFirst

transformer("javascript is the best.", oneWord);
// Original str: javascript is the best.
// Transform str: javascriptisthebest.
// Transformed by: oneWord

// JS use callback function all the time
const sayHi = () => {
//   console.log("Hi");
  /* output:
Hi
Hi
Hi
Hi
Hi
*/
};

// document.body.addEventListener('click', sayHi);

["hi", "hi", "hi", "hi", "hi"].forEach(sayHi);

// NOTE:
/**
 
 *Learn about function and higher order function.In higher order most important part is callback function.callback function allow to abstracting abstracting means short the code or hide detailing that is important in js.On the top , we can see the example, where transformer function did not concern about oneWord and upperFirstWord function. And this transformer type of functions are called HIGHER ORDER FUNCTION. 
*/

// 2. higher order function allow return a new function .
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`); //Hey... sunny!
  };
};
const greetHey = greet("Hey...");
greetHey("sunny!");

// in arrow
const greetArrow=(greeting)=>{
    return (name)=>{
        // console.log(`${greeting} ${name}`);
    };
}
const sayHello=greetArrow('Hello!...');
sayHello('good morning.');

//---------------------------------------------- real example----------------------------------------------
// A function into object name bookNow use-(for that each object can use me) multiple times by different objects-(here function access object keys use this keyword) without re-write the function many time.

const flight={
    airline:'Bangladesh Airline',
    iataCode:'BA',
    bookings: [],
    // bookNow:function(){},
    bookNow(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flights ${this.iataCode}${flightNum}.`);
        //output: Sunny booked a seat on Bangladesh Airline flights BA333.
        this.bookings.push({flightIs:`${this.iataCode} ${this.airline}`, name});
    }

};
flight.bookNow(333,'Sunny');
flight.bookNow(123,'Siam');
// console.log(flight.bookings);
/** output:
[
  { flightIs: 'BA Bangladesh Airline', name: 'Sunny' },
  { flightIs: 'BA Bangladesh Airline', name: 'Siam' }
]

Nazmul booked a seat on Joy Bangla flights JB59.

 */



const booked=flight.bookNow;
// booked(111, 'Ronaldo'); //TypeError: Cannot read properties of undefined
// here..... TypeError: Cannot read properties of undefined
// when we use function expression (assign a function in a variable) then this keyword did not work.


// 1. solve this issue: call method
const joyBangla={
    airline:'Joy Bangla',
    iataCode:'JB',
    bookings:[]
};
booked.call(joyBangla, 109, 'Nazmul');
// console.log(joyBangla);
/**
{
  airline: 'Joy Bangla',
  iataCode: 'JB',
  bookings: [ { flightIs: 'JB Joy Bangla', name: 'Nazmul' } ]
}
 */

// 2. solve this issue: apply method

const flightParamsData=[109, 'Nazmul'];
booked.apply(joyBangla, flightParamsData);
// console.log(joyBangla);

/**output:
{
  airline: 'Joy Bangla',
  iataCode: 'JB',
  bookings: [
    { flightIs: 'JB Joy Bangla', name: 'Nazmul' },
    { flightIs: 'JB Joy Bangla', name: 'Nazmul' }
  ]
}\\\\\\\\\\\\\\
 */

// 3. or
booked.call(joyBangla, ...flightParamsData);
// console.log(joyBangla);
/**
{
  airline: 'Joy Bangla',
  iataCode: 'JB',
  bookings: [
    { flightIs: 'JB Joy Bangla', name: 'Nazmul' },
    { flightIs: 'JB Joy Bangla', name: 'Nazmul' },
    { flightIs: 'JB Joy Bangla', name: 'Nazmul' }
  ]
}
 */

//  4. bind method
/**
 * Another method is bind() method that solve 
   when we use function expression (assign a function in a variable) then this keyword did not work.
 */
const bookedBind=booked.bind(joyBangla);
bookedBind(101,'Alamin');
console.log(joyBangla);
/**output:
 {
  airline: 'Joy Bangla',
  iataCode: 'JB',
  bookings: [
    { flightIs: 'JB Joy Bangla', name: 'Nazmul' },
    { flightIs: 'JB Joy Bangla', name: 'Nazmul' },
    { flightIs: 'JB Joy Bangla', name: 'Nazmul' },
    { flightIs: 'JB Joy Bangla', name: 'Alamin' }
  ]
}
 */

//  bind method
const bijoy71={
  airline:'Bijoy 71',
  iataCode:'B71',
  bookings:[]
};
const bijoyBind=booked.bind(bijoy71); // assigned variable.bind(object)
bijoyBind(100, 'rokon'); //working

const paramsVariable=[55, 'Rifat'];
bijoyBind(...paramsVariable); //working

// console.log(bijoy71);





/**
 * Over all concept:
 * Suppose you are a higher order function and you stay on the top of the BURJ-KHALIFA. On the other hand, a lower order function have this BURJ-KHALIFA'S ground.Now you want to call the lower order function directly with your object property and lower order function parameter, without via (like, without go to him by stairs or lift.). For this, we assigning lower order function in a variable and call like, assigningVariable(with your object and lower order function parameter ).But did not work, give an TypeError: Cannot read properties of undefined. Now for the solution we can use some method :
 * 
 *  assigned-lower-order-function_variable = lower order function;
 * 
 * 1.call() method:
 *  assigned-lower-order-function_variable.call(obj with property and lower order function parameter);
 * 
 * 2. apply() method:
 *  lower-order-function-parameter_variable = [lower order function parameters];
 *  assigned-lower-order-function_variable.apply(obj with property and lower-order-function-parameter_variable );
 * 
 * 3. call() method:
 *  assigned-lower-order-function_variable.call(obj with property and ...lower-order-function-parameter_variable );
 * 
 * 4. bind() method
 *  binded = assigned-lower-order-function_variable.bind(your object);
 *  binded(...lower-order-function-parameter_variable);
 * 
 */



// ----------Another Example ----------------------------
const addTax=(rate, value)=>value+value*rate;
// console.log(addTax(0.5,100)); //150


const x=addTax(0.5,100);
// console.log('x',x); //150

const y=addTax(0.5,100);
// console.log(y(0.5,100)) //TypeError: y is not a function


const z=addTax;
// console.log(z(0.5,100)) //150

// use addTax function 
const addVat=addTax.bind(null,0.5);
console.log(addVat(100)); //150




// -------------function return a new function----------
const addTaxRate= function(rate){
  return function(value){
    return value+value*rate;
  }
}
const addVat2=addTaxRate(0.5);
// console.log(addVat2(100));  //150
