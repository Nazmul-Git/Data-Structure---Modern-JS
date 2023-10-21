const newSet= new Set([
    'pizza',
    'pasta',
    'sandwich',
    'burger',
    'Pizza',
    'pizza',
    'pasta'
]);
console.log(newSet);
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
console.log(newSet.delete('Pizza')); //true
console.log(newSet);
//  Set(5) { 'pizza', 'pasta', 'sandwich', 'burger', 'Garlic Bread' }