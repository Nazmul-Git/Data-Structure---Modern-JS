const studentProfile = {
  studentName: "sunny",
  intake: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  sec: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  reputation: [
    {
      green: {
        lightGreen: 65,
        green: 100,
      },
    },
    {
      red: {
        lightRed: 65,
        red: 100,
      },
    },
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
  },
  orderDestructuring: function ({ myName, address, gpa }) {
    console.log(myName, address, gpa); //sunny   dhaka   5
  },
};

// for of loop
const allReputation=studentProfile.reputation;
for(const rep of allReputation) console.log(rep); // for of loop give only element not index

//  using entries() we can get also index number
for(const rep of allReputation.entries()) console.log(rep);