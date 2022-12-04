//Essa função serve para dar o play no áudio, quando ela for chamada da play no áudio selecionado.
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

function pausaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).pause();
}


//querySelectorAll serve para selecionar classes diferente do querySelector que relaciona diretamente com os elementos
const listaDeTeclas = document.querySelectorAll('.tecla');


//diferente do const que serve para declarar constantes o let serve para declarar variáveis
let contador = 0;

while (contador < 13) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`
    
    tecla.onclick = function(){
        tocaSom(idAudio);

    tecla.ondblclick = function(){
        pausaSom(idAudio);
    }
    }
    contador += 1;
}





