// Map is a ES6 advanced level object, less execution time
const rest= new Map();
rest.set('name','Italiano')
.set(1, 'Pizza Burg')
.set('categories', ['burger', 'pizza'])
.set('open', 11)
.set('close', 19)
.set(true, 'open')
.set(false, 'close')
// console.log(rest.set(2, 'Burger King'));


console.log(rest.get('name'));
console.log(rest.get(1));
console.log(rest.get('categories'));
console.log(rest.get('close'));
console.log(rest.get(true));

const time=12;
const isOpen=rest.get(time>rest.get('open') && time<rest.get('close'));
console.log(isOpen); //open

console.log(rest.has('categories')); // true

rest.clear(); //Map(0) {}
// rest.delete(1);
console.log(rest); 
/** OUTPUT:
 Map(6) {
  'name' => 'Italiano',
  'categories' => [ 'burger', 'pizza' ],
  'open' => 11,
  'close' => 19,
  true => 'open',
  false => 'close'
}
 */

console.log(rest.size); //6


rest.set([1,2], 'test');
console.log(rest);
console.log(rest.get([1,2])); //undefined

// For solution, store array in variable because array/object are stored in memory. here, in bellow- arr contain the same memory reference.Now get value "test"
arr=[1,2];
rest.set(arr, 'test');
console.log(rest.get(arr)); // test


