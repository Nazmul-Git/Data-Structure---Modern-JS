/**
 * Read here..........
 * new Map(Object.entries(obj-name)); this is old method to  conver map from object. And update method is new Map([ [key,value], [], ..]) that convert map from object without use entries method.
 */

//new Map() .. update method
const question = new Map([
  ["question", "What is the best programming language ?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try Again"],
]);
// console.log(question);
/** OUTPUT :
 Map(7) {
  'question' => 'What is the best programming language ?',
  1 => 'C',
  2 => 'Java',
  3 => 'JavaScript',
  'correct' => 3,
  true => 'Correct',
  false => 'Try Again'
}
 */
for(const [key, value] of question){
    // console.log(key, value);
    if(typeof key === 'number'){
        // console.log(` Answer ${key} : ${value}`);
    }
}
const answer=3;
const isTrue=question.get('correct')=== answer;
// console.log(question.get(isTrue));


//###-------- convert array, from map -------------------###
console.log(...question);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());


// ---------------------------Proved with Example-----------------------------

// Object.entries() .. Old method
const dept = {
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
  law: {
    sub: 0,
    credit: 0,
  },
};

//  convert object to map
// console.log(Object.entries(dept));

/** OUTPUT :
 [
  [ 'cse', { sub: 60, credit: 120 } ],
  [ 'eee', { sub: 50, credit: 100 } ],
  [ 'eng', { sub: 45, credit: 79 } ],
  [ 'law', { sub: 0, credit: 0 } ]
]
 */

// here, we get an array, of arrays. each array contain a key and a value. This means, the way of convert from object to map using new map.
const department = new Map(Object.entries(dept));
// console.log(department);
/**  OUTPUT :
 --------------------------------------
 Map(4) {
  'cse' => { sub: 60, credit: 120 },
  'eee' => { sub: 50, credit: 100 },
  'eng' => { sub: 45, credit: 79 },
  'law' => { sub: 0, credit: 0 }
}
----------------------------------------
 */

// Easy & Updated method/data structure ... new Map()

const dept2 = new Map([
  ["cse", { sub: 60, credit: 120 }],
  ["eee", { sub: 50, credit: 100 }],
  ["eng", { sub: 45, credit: 79 }],
  ["law", { sub: 0, credit: 0 }],
]);

// console.log(dept2);
/** OUTPUT :
 -------------------------------------
 Map(4) {
  'cse' => { sub: 60, credit: 120 },
  'eee' => { sub: 50, credit: 100 },
  'eng' => { sub: 45, credit: 79 },
  'law' => { sub: 0, credit: 0 }
}
---------------------------------------
 */

