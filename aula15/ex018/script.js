var numeros = [];
document.addEventListener('keypress', function(e) {
    if(e.key === 'Enter'){
        adicionar();
    }
})

function adicionar(){
    let num = document.querySelector('input#inicio');
    let res = document.querySelector('div#resposta');
    let lista = document.querySelector('select#numeros');
    let calc = document.querySelector('div#calculos');
    
    calc.style.display = 'none';
    res.style.display = 'block';
    if(num.value.length == 0 || num.value > 100 || num.value < 1) {
        res.style.backgroundColor = 'red';
        res.style.color = 'white';
        res.innerHTML = 'O número deve estar entre 1 e 100!'
        num.value = '';
        num.focus();
        return
    }

    let existe = numeros.indexOf(num.value);
    if (existe != -1){
        res.style.backgroundColor = 'red';
        res.style.color = 'white';
        res.innerHTML = `O número ${num.value} foi adicionado anteriormente!`
        num.value = '';
        num.focus();
        return
    }
   
    numeros.push(num.value);
    let indice = numeros.indexOf(num.value);
    res.style.backgroundColor = 'white';
    res.style.color = '#034159';
    res.innerHTML = ` O Número ${numeros[indice]} foi adicionado com sucesso.`

    if (indice != -1){
        document.querySelector('input#dados').style.display = 'block';
        document.querySelector('div#num').style.display = 'block';

        let item = document.createElement('option');
        item.text = `Nº: ${numeros[indice]}`;
        lista.appendChild(item);
        num.value = '';
        num.focus();    
    }

    return;
}

function calculos(){
    let calc = document.querySelector('div#calculos');
    let soma = 0;

    for (let i = 0, num = numeros.length; i < num; i++){
        soma += Number(numeros[i]);
    }

    numeros.sort(compareNumbers);

    calc.style.display = 'block';
    calc.innerHTML = `Foram adicionados ${numeros.length} números. <br>`;
    calc.innerHTML += `O maior valor é ${numeros[numeros.length-1]}. <br>`;
    calc.innerHTML += `O menor valor é ${numeros[0]}. <br>`;
    calc.innerHTML += `A soma de todos os numeros é ${soma}. <br>`;
    calc.innerHTML += `A média destes números é ${soma / numeros.length}.`
}

function compareNumbers(a, b) {
    return a - b;
  }