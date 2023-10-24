const yourComment=(str)=>{
    if(str){
        const lower=str.toLowerCase();
        const terms=['fuck','ass','fucker','sex'];
        for(const word of terms){
            if(lower.includes(word)){
                console.log(`Your comments is violating the community standard!! ( ${word} )`);
            }
        }
        
    }
}
yourComment('I fuck you, ass hole.');