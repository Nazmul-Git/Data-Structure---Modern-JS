const studentProfile = {
  studentName: "sunny",
  intake: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  sec: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  reputation: [
    {
      light: 65,
      dark: 100,
    },
    {
      light: 55,
      dark: 99,
    }
  ],
  dept: {
    cse: {
      sub: 60,
      credit: 120,
    },
    eee: {
      sub: 50,
      credit: 100,
    },
    eng: {
      sub: 45,
      credit: 79,
    },
  }
  
};

// for of loop
const allReputation = studentProfile.reputation;
for (const rep of allReputation) console.log(rep); // for of loop give only element not index
// { light: 65, dark: 100 }
// { light: 55, dark: 99 }

// -----------------------------
const keys=Object.keys(studentProfile.dept);
console.log(keys); //[ 'cse', 'eee', 'eng' ]

const values= Object.values(studentProfile.dept)
console.log(values);
/*
[
  { sub: 60, credit: 120 },
  { sub: 50, credit: 100 },
  { sub: 45, credit: 79 }
]
*/
// ---------------------------
//  using entries() we can get also index number
for (const rep of allReputation.entries()){
    // console.log(rep);
} 
// [ 0, { light: 65, dark: 100 } ]
// [ 1, { light: 55, dark: 99 } ]
//  we can see after use entires() , each item inside an array.

// -----------------------------------------

// destructuring rep
//  [ key , value ]
for (const [idx, element] of allReputation.entries()) {
//   console.log(`${idx} : ${element}`);
  //  0 : [object Object]
  //  1 : [object Object]
//   here output gives [object Object]. ok.. bcz, element is a object


}
// solved
for (const [idx, {light, dark}] of allReputation.entries()) {
  console.log(`${idx} : ${light} , ${dark}`);
  // 0 : 65 , 100
 //  1 : 55 , 99
}
