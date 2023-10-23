const newSet= new Set([
    'pizza',
    'pasta',
    'sandwich',
    'burger',
    'Pizza',
    'pizza',
    'pasta'
]);
// console.log(typeof newSet); //object
// console.log(newSet);
// Set(5) { 'pizza', 'pasta', 'sandwich', 'burger', 'Pizza' }
console.log(newSet.size); //5
console.log(newSet.has('pasta')); //true
console.log(newSet.has('burrito')); //false
console.log(newSet.add('Garlic Bread'));

/*
Set(6) {
  'pizza',
  'pasta',
  'sandwich',
  'burger',
  'Pizza',
  'Garlic Bread'
}
*/
// console.log(newSet.clear()); //Set(0)
console.log(newSet.delete('Pizza')); //true
console.log(newSet);
//  Set(5) { 'pizza', 'pasta', 'sandwich', 'burger', 'Garlic Bread' }

for(const set of newSet){
    console.log(set);
    /**
     pizza
     pasta
     sandwich
     burger
     Garlic Bread
    */
}


//***NOTE:  In this Set() method there are no. index ***
//***NOTE:  Set() method use for , there is no repeated data ***

//***NOTE:  Already learned Set(), WE LEARN ABOUT MORE JavaScript METHOD/DATA STRUCTURE. like,, map(), find(), etc.......***
