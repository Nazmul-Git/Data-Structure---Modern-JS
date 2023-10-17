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
console.log(studentProfile.reputation);
console.log(studentProfile.reputation);

// -----copy----
const studentProfileCopy={...studentProfile};
studentProfileCopy.studentName='Spread Operator';
console.log(studentProfileCopy.studentName);
console.log(studentProfile.studentName);