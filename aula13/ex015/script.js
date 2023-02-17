function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var userAno = document.getElementById('iano');
    var msg = document.getElementById('msg');
    var imagem = document.getElementById('imagem');

    if(userAno.value.length == 0 || userAno.value > ano){
        alert("Erro! Verifique os dados.");
    } else {
        var userSex = document.getElementsByName('sexo');
        var idade = ano - Number(userAno.value);
        var genero = '';

        if (userSex[0].checked) {
            genero = 'homem'
            msg.innerHTML = `Você é um Homem de ${idade} anos.`
        } else {
            genero = 'mulher'
            msg.innerHTML = `Você é uma Mulher de ${idade} anos.`
        }

        imagem.style.display = 'block';

        if (idade < 18 && genero == 'homem') {
            imagem.style.backgroundImage = `url('images/crianca-masc')`;
        } else if (idade < 18 && genero == 'mulher') {
            imagem.style.backgroundImage = `url('images/crianca-fem')`;
        } else if (idade < 50 && genero == 'homem') {
            imagem.style.backgroundImage = `url('images/adulto-masc')`;
        } else if (idade < 50 && genero == 'mulher') {
            imagem.style.backgroundImage = `url('images/adulto-fem')`;
        } else if (idade >= 50 && genero == 'homem') {
            imagem.style.backgroundImage = `url('images/velho-masc')`;
        } else if (idade >= 50 && genero == 'mulher') {
            imagem.style.backgroundImage = `url('images/velho-fem')`;
        }
    }
}