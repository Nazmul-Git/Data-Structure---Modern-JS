const studentProfile={
    studentName:'sunny',
    intake:[1,2,3,4,5,6,7,8,9,10,11],
    sec:[1,2,3,4,5,6,7,8,9,10],
    reputation:[
      {green:{lightGreen:65,green:100}},
      {red:{lightRed:65,red:100}}
    ],
    reputationColor:function(repu1,repu2){
       console.log(repu1,repu2);
       

    //    this.reputation.push(repu1);
    //    console.log(this.reputation);
    },
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
    },
    orderDestructuring: function({myName,address,gpa}){
    //    console.log(myName,address,gpa); //sunny   dhaka   5
    }

};

const allIntake1=[...studentProfile.intake];
const allIntake2=[...studentProfile.intake, 12,13,14,15];
// console.log(allIntake1);
// console.log(allIntake2);

//Spread operator Iterable/useable: array, string, map, sets . NOT OBJECT

const str='sunny';
const letter=[...str];
// console.log(letter);

// *********Spread operator did not work in template string `` ********
// console.log(`${...str}`)    //(not possible) X

const newReputation=[
    yellow={
        lightYellow:40,
        yellow:50
    },
    {
        black:0
    }
];
// console.log(newReputation);
// studentProfile.reputationColor(newReputation); // last a undefine thake
studentProfile.reputationColor(newReputation[0], newReputation[1]); //// last a undefine thake na
//  BUT shortly we can use here,  spread operator
studentProfile.reputationColor(...newReputation ); // last a undefine nai.
studentProfile.reputation=[...studentProfile.reputation, ...newReputation];
// console.log(studentProfile.reputation);

// -----copy----
const studentProfileCopy={...studentProfile};
studentProfileCopy.studentName='Spread Operator';
console.log(studentProfileCopy.studentName);
console.log(studentProfile.studentName);

//  SPREAD- because on right side of equal
const arr5=[1,2, ...[3,4,5]];
// console.log(arr5); // [ 1, 2, 3, 4, 5 ]

//  REST- because on left side of equal
// NOTE : rest is must be the last element in array
const [a,b, ...others]=[1,2,3,4,5];
// console.log(a,b, others); // 1 2 [ 3, 4, 5 ]


//**REST in object**
const {cse, ...withoutCse}=studentProfile.dept;
console.log(withoutCse);

//**spread in function**
//  Rest parameter
const add=(...numbers)=>{
    // console.log(numbers)
    let sum=0;
    for(let i=0; i<numbers.length; i++){
        sum+=numbers[i];
        
    };
    // console.log(sum);
}

add(1,2,3,4,5,6,7,8,9); //45
const result=[1,2,3,4,5,6,7,8,9];
add(...result);  //45
//OUTPUT: [1,2,3,4,5,6,7,8,9]
// So, REST syntax taking multiple parameter or values and pass them into an array