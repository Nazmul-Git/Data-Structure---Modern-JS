document.querySelector('.btn').addEventListener('click', ()=>{
    const text= document.querySelector('.inp').value;
    // console.log(text);
    const rows=text.split(',');
    for(const [i,row] of rows.entries()){
        const [first , second]=row.toLowerCase().trim().split('_');
        // const output1=`${first}${second[0].toUpperCase()+second.slice(1)}`;
        const output2=`${first}${second.replace(second[0],second[0].toUpperCase())}`;

        console.log(`${output2.padEnd(20)}${'*'.repeat(i+1)}`)
        // console.log(output1);
        // console.log(output2);
    }
})