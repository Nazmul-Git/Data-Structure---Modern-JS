const engg=['cse', 'eee'];
const dept= {
    // ES6 version
    [engg[0]]: {
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
    }
};

const studentProfile={
    studentName:'sunny',
    intake:[1,2,3,4,5,6,7,8,9,10,11],
    sec:[1,2,3,4,5,6,7,8,9,10],
    // ES6 enhanced object literals
    dept,
    // no need to clone :
    currentStudent(){
        return 'God Job';
    }

};
console.log(studentProfile);
studentProfile.currentStudent();