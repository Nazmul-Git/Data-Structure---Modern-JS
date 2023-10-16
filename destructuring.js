
// destructuring array
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
    framework:['react.js', 'express.js'],
    weWant: function(firstIdx, secondIdx){
        return [this.framework[firstIdx], this.framework[secondIdx]]
    }
    
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

// receive 2 return values from a function
const [firstIdx, secondIdx]=student.weWant(1,0);
console.log(firstIdx, secondIdx);

// Nested destructuring ------------------
const arr2=[5,4,2,3,[1,9,0,3]];
const [i,o,p,q,w]=arr2;
console.log(i,o,p,q,w);








// // destructuring object