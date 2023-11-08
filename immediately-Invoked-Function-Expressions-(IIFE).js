// Immediately Invoked Function Expressions (IIFE)

const yourName=function(){
    console.log('your name is name.');
}
yourName();  //your name is name.

// IIFE
(function(){
    console.log('your name is name.');
})();  //your name is name.


(()=>{
    console.log('your name is name.');
})();  //your name is name.