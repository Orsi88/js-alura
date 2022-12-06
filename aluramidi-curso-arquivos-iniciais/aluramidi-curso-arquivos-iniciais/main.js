function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//O for otimiza a estrutura de repetição
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`

    console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);
    };

    console.log(contador);
}