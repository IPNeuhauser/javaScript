function verificar(){
    var pais = document.querySelector('input#pais');
    var resp = document.querySelector('div#resp');

    if(pais == 'Brasil') {
        resp.innerTEXT(`Vocé é Brasileiro!`)
    } else {
        resp.innerTEXT('Você é Estrangeiro!')
    }
}