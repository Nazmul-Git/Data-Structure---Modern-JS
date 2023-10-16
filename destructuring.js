const arr=[1,2,3];
const a=arr[0];
const b=arr[1];
const c=arr[2];
console.log(a,b,c);

// destructuring
const [x,y,z]=arr;
console.log(x,y,z);
console.log(arr);

// ------------------------------

const student={
    name:'sakib',
    id:20,
    language:['c', 'JS' ],

}
let [first, second]=student.language;
// console.log(first, second);

// manually swap
const temp=first;
first=second;
second=temp;
console.log(first, second);

//  destructuring  swap
[first, second]=[second, first];
console.log(first, second); 
