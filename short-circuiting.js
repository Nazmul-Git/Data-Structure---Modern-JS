// Use any data type, return any data type

// or
// console.log( 5 || 'sunny' ); //5  cz, here 5 and sunny both are truthy so first value will be return.
// console.log( '' || 'sunny' );
// console.log( true || 0 );
// console.log( undefined || null );

// console.log(''|| undefined || 0 || 'sunny' || true || null); ??? ->sunny

// and
console.log( 5 && 'sunny' );  //sunny
console.log( '' && 'sunny' );
console.log( true && 0 && 10 );  // 0 why? = when get falsy value then stop and return the value where he stopped, this situation called ###############short circuiting.
console.log( undefined && null );

// nullish value: null and undefined (not 0 or '')
const x=0 || 10;
const y=0 ?? 10;
console.log('x=',x); //10
console.log('y=',y); //0

// OR assignment operator
const obj1={
    name:'jamal',
    id:0
}
const obj2={
    name:'kamal',
    _id:'no id'
}

// obj1.id= obj1.id || 10;
// obj2.id= obj2.id || 10;
// console.log(obj1, obj2); //{ name: 'jamal', id: 20 } { name: 'kamal', _id: 'no id', id: 10 }

// obj1.id ||= 10
// obj2.id ||= 10;
// console.log(obj1, obj2); //{ name: 'jamal', id: 20 } { name: 'kamal', _id: 'no id', id: 10 }


// obj1.id ||= 10;
// obj2.id ||= 10;
// console.log(obj1, obj2); //{ name: 'jamal', id: 10 } { name: 'kamal', _id: 'no id', id: 10 }

//  Nullish assignment operator
obj1.id ??= 10;
obj2.id ??= 10;
console.log(obj1, obj2); //{ name: 'jamal', id: 0 } { name: 'kamal', _id: 'no id', id: 10 }


obj1._id=obj1._id &&= '<ANONYMOUS>';
obj2._id=obj2._id &&= '<ANONYMOUS>';
console.log(obj1,obj2);


