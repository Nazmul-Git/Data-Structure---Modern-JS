const poll ={
    question:'What is your best programming language?',
    option:['0:javaScript', '1:python','2:rust','3:c++','4:c'],
    answer:new Array(5).fill(0),
    registerNewAnswer(){
        const answer=Number(
            prompt(
                `${this.question}\n${this.option.join('\n')}\n(write option number)`
            )
        );
        
        typeof answer==='number' && answer< this.answer.length && this.answer[answer]++;
        console.log(this.answer);
        this.displayResult();
        this.displayResult('string');
    },

    displayResult(type='array'){
        if(type==='array'){
            console.log(this.answer);
        }else if(type==='string'){
            console.log(`pool results are ${this.answer.join(', ')}`)
        }
    }
};
// poll.registerNewAnswer();
document.querySelector('.answer').addEventListener('click', poll.registerNewAnswer.bind(poll));


