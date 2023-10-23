const shop ={
    food:[
        {
            item:10,
            quality:95
        },
        {
            item:15,
            quality:89
        }
    ],
    food2:{
        breakfast:{
            item:7,
            quality:96
        },
        lunch:{
            item:5,
            quality:85
        },
        dinner:{
            item:8,
            quality:92
        }
    }
};
for(const [idx, element] of shop.food.entries()){
    console.log(`${idx} : ${element}`);
}

for(const [idx, {item,quality}] of shop.food.entries()){
    console.log(`${idx} : ${item}, ${quality}`)
}


// console.log(shop.food2.breakfast.item); //7
// console.log(shop.food2.evening.item); //TypeError: Cannot read properties of undefined (reading 'item')

//  avoid this type error
// console.log(shop.food2.evening?.item); //undefined      there is no error at list.



// ----------------------------------------------------

const question={
    question:'What is the best language ?',
    1:'c',
    2:'java',
    3:'js',
    correct:3,
    true:'correct',
    false:'try again'
}
console.log(Object.entries(question));
console.log(new Map(Object.entries(question)));
