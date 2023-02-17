function contar(){
    let inicio = document.querySelector('input#inicio');
    let fim = document.querySelector('input#fim');
    let passo = document.querySelector('input#passo');
    let res = document.querySelector('div#res');
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        alert('É necessário preencher o formulário!');
        return;
    }

    res.style.display = 'block';
    res.innerHTML = 'Contando: ';

    for (let c = Number(inicio.value); c <= Number(fim.value); c += Number(passo.value)){
        res.innerHTML += `${c} &#x27A1 `;
    }

    res.innerHTML += `&#x1F3C1`;
}