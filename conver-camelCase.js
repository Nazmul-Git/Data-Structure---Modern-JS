document.querySelector('.btn').addEventListener('click', ()=>{
    const text= document.querySelector('.inp').value;
    console.log(text);
    const rows=text.split('\n');
    for(const row of rows){
        const [first , second]=row.toLowerCase().trim().split('_');
        const output1=`${first}${second[0].toUpperCase()+second.slice(1)}`
        const output2=`${first}${second.replace(second[0],second[0].toUpperCase())}`
        console.log(output1);
        console.log(output2);
    }
})