
// destructuring array
const arr=[1,2,3];
const a=arr[0];
const b=arr[1];
const c=arr[2];
// console.log(a,b,c);

// destructuring
const [x,y,z]=arr;
// console.log(x,y,z);
// console.log(arr);

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
// console.log(first, second);

//  destructuring  swap
[first, second]=[second, first];
// console.log(first, second); 

// receive 2 return values from a function
const [firstIdx, secondIdx]=student.weWant(1,0);
// console.log(firstIdx, secondIdx);

// Nested destructuring ------------------
const arr2=[5,4,2,3,[1,9,0,3]];
const [i,o,p,q,w]=arr2;
// console.log(i,o,p,q,w);








//  destructuring object

const studentProfile={
    studentName:'sunny',
    intake:[1,2,3,4,5,6,7,8,9,10,11],
    sec:[1,2,3,4,5,6,7,8,9,10],
    dept:{
       cse:{
        sub:60,
        credit:120
       },
       eee:{
        sub:50,
        credit:100
       },
       eng:{
        sub:45,
        credit:79
       }
    }
};
const {studentName,intake,dept}=studentProfile;

// console.log(studentName);
// console.log(intake);
// console.log(dept);

const {
    studentName: name, 
    intake: batchNumber,
    dept:department}=studentProfile;

// console.log(studentName);
// console.log(batchNumber);
// console.log(department);

// default value
const {sec=[], sec:section=[]}=studentProfile;
// console.log(sec);
// console.log(section);
// Mutating variable
let l=11;
let m=55;
let n=5;
const obj={l:0, m:0, n:0};
({l,m,n}=obj);
console.log(l,m,n); // 0 0 0