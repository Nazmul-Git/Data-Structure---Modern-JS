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