const airline = "Bangladesh Airlines.";
const plane = "A320";
// console.log(plane[0]); // A
// console.log(airline.length); //19
// console.log(airline.indexOf("i")); //12
// console.log(airline.lastIndexOf("i")); //15
// console.log(airline.indexOf("Airlines")); //11
// console.log(airline.slice(11)); //Airlines.
// console.log(airline.slice(11, 19)); //Airlines

const checkMiddleSeat = (seat) => {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    // console.log('Seat position is middle');
  } else {
    // console.log('You got  lucky');
  }
};
checkMiddleSeat("11B"); //Seat position is middle
checkMiddleSeat("23C"); //You got  lucky
checkMiddleSeat("3E"); //Seat position is middle

// console.log(new String('sunny')); //[String: 'sunny']
// console.log(typeof new String('sunny')); //object
// console.log(new String(' sunny').slice(1)); //sunny
// console.log(typeof new String(' sunny').slice(1)); //string

const javaScript = "programming scripting language";
// console.log(javaScript.toLocaleUpperCase());
// console.log(javaScript.toLocaleLowerCase());
// const lower=javaScript.toLowerCase();
// const weWant=lower[0].toUpperCase();
// console.log(weWant);

// we want to write -> Programming Scripting Language
const firstWordUpper = (string) => {
  const arr = javaScript.split(" ");
  for (const i of arr) {
    // console.log(i);
    const lower = i.toLowerCase();
    const wordIdx = lower[0].toUpperCase() + lower.slice(1);
    console.log(wordIdx); //Programming Scripting Language
  }
};
firstWordUpper(javaScript);

const email = "sunny@gmail.com";
const loggedEmail = " Sunny@gmail.Com \n";
const loggedEmailTrim = loggedEmail.toLowerCase().trim();
console.log(loggedEmailTrim); //sunny@gmail.com
console.log(loggedEmailTrim === email); // true

// replace
const priceBD = "288.97 TK in BD TK";
const priceUS = priceBD
  .replace(/TK/g, "$")
  .replace("288.97", "2.8897")
  .replace("BD", "US");
console.log(priceUS);

// include
console.log(priceBD.includes("tk")); //false
console.log(priceBD.includes("TK")); //true

// startWith , endsWith
console.log(priceBD.startsWith("288") && priceBD.endsWith("TK")); //true
