const studentProfile={
    studentName:'sunny',
    intake:[1,2,3,4,5,6,7,8,9,10,11],
    sec:[1,2,3,4,5,6,7,8,9,10],
    reputation:[
      {green:{lightGreen:65,green:100}},
      {red:{lightRed:65,red:100}}
    ],
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
       },
       law:{
        sub:0,
        credit:0
       }
    },
    orderDestructuring: function({myName,address,gpa}){
       console.log(myName,address,gpa); //sunny   dhaka   5
    }

};

// console.log(studentProfile.dept.bba.credit);
// TypeError: Cannot read properties of undefined (reading 'credit')
console.log(studentProfile ?.dept?.bba?.credit); //undefined
console.log(studentProfile ?.dept?.cse?.credit); //120
console.log(studentProfile ?.dept?.law?.credit || 'empty'); //empty because 0 is a falsy value
console.log(studentProfile ?.dept?.law?.credit ?? 'empty'); // 0 .so always use Nullish ?? method

// Array
const users=[];
// const users=[{name:'sunny', email:'sun32@gmail.com'}];
console.log(users[0]?.name ?? 'Empty users');