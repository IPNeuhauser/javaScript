function calcular(){
    let num = document.querySelector('input#num');
    let tab = document.querySelector('select#tabuada');
    let res = document.querySelector('div#res');

    tab.innerHTML = '';

    if(num.value.length == 0){
        let item = document.createElement('option');
        item.text = 'Deseja calcular a tabuada de qual número?'
        tab.appendChild(item);
        return
    }

    res.style.display = 'block';
    num = Number(num.value);

    for(let i = 0; i <= 10; i++){
        let item = document.createElement('option');
        item.text = `${num} x ${i} = ${num * i}`;
        item.value = `tab${i}`;
        tab.appendChild(item);
    }
}