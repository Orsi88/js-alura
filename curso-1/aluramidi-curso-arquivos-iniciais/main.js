function tocaSom (seletorAudio) {
    //document.querySelector(idElementoAudio).play();
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {

        elemento.play();
    }
    else {
        alert('Elemento não encontrado');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//O for otimiza a estrutura de repetição
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`


    tecla.onclick = function(){
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
           tecla.classList.add('ativa'); 
        }      
    }

    tecla.onkeyup = function () {

           tecla.classList.remove('ativa');
    }
}   