const rest= new Map();
rest.set('name','Italiano')
.set(1, 'Pizza Burg')
.set('categories', ['burger', 'pizza'])
.set('open', 1)
.set('close', 0)
.set(true, 'open')
.set(false, 'close')
// console.log(rest.set(2, 'Burger King'));

console.log(rest.get('name'));
console.log(rest.get('categories'));
console.log(rest.get('close'));
console.log(rest.get(true));

