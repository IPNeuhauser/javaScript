function carregar () {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML= `Agora são ${hora} horas.`;
    
    if (hora >= 0 && hora < 12) {
        document.body.style.background = '#CCAA61'
        img.style.backgroundImage = `url('imagens/manha.jpg')`;
        img.style.backgroundPosition = 'center center';
    } else if (hora >= 12 && hora < 18){
        document.body.style.backgroundColor = '#C95B42';
        img.style.backgroundImage = `url('imagens/tarde.jpg')`;
        img.style.backgroundPosition = 'center bottom';
    } else {
        document.body.style.backgroundColor = '#20283E';
        img.style.backgroundImage = `url('imagens/noite.jpg')`;
        img.style.backgroundPosition = 'center bottom';
    }
}