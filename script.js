/*function analisaTexto() { //problema na listabranca para achar números

    if (listaBranca.test(palavraInput.value)) {

        alert("O jogo não permite números, acentos e caractéres especiais");
        //return null;

    } else if (minusculas.test(palavraInput.value)) {

        texto = palavraInput.value.toUpperCase();
        return texto;

    } else {

        texto = palavraInput.value;
        return texto;
    }
}*/

function adicionaPalavra() {

    let texto = null;

    texto = palavraInput.value.toUpperCase();

    if (texto == "") {

        alert("Digite uma palavra.");
        return;

    } else if (palavras.includes(texto)) { //array.includes retorna false or true para palavras já inceridas no array palavras.

        alert("A palavra já consta na memória.");
        return;

    } else {

        if (listaBranca.test(texto)) {

            alert("O jogo não permite números, acentos e caractéres especiais");
            return null;

        } else {

            palavras.push(texto);
            alert("Palavra Adicionada com Sucesso.");
        }

        console.log(palavras);

        palavraInput.value = "";
    }

}

function selecionaPalavra() { // problemas com nomes repetios e undefined


    sel1 = palavras[Math.floor(Math.random() * (palavras.length))];

    if (sel1 == selAntiga) {

        sel1 = palavras[Math.floor(Math.random() * (palavras.length))];

    } else {

        selAntiga = sel1;
        return palavraSel = sel1;

    }

   /* console.log(sel1);
    console.log(selAntiga);
    return palavraSel = sel1;*/

}

function iniciaJogo() {

    letras = [];
    palavrasErradas = [];
    palavrasAcertadas = [];
    chances = 0;
    acertos = 0;
    document.addEventListener("keypress", acertaPalavra, 320, 680, 40);
    document.getElementById("btn").style.visibility = "hidden";
    document.getElementById("btn2").style.visibility = "hidden";
    document.getElementById("text-input").style.visibility = "hidden";
    selecionaPalavra();
    atualizaTela(0, 0, 1200, 800);
    desenhaForca();
    desenhaSlots(350, 690, 40, 10);



}

function acertaPalavra(event) {

    let sum = 0;
    let x = 355;
    let y = 680;
    let add = 0;
    //let acertos = 0;
    pincel.fillStyle = "red";
    pincel.font = "40px Arial";
    escolha = event.key.toUpperCase();
    let tabelaVerdade = [];
    letras = [...palavraSel];

    if (/\d/.test(escolha)){

        return 0;
    }

    if (palavrasAcertadas.includes(escolha) || palavrasErradas.includes(escolha)) { //condição para saber se temos letras repetidas

        alert("Esta letra já foi usada. Tente outra.");
        return null;

    } else {

        for (let i = 0; i < letras.length; i++) { //Constrói um array com valores booleanos para cada letra sorteada
            if (letras[i].includes(escolha)) {

                tabelaVerdade.push(true);

            } else {

                tabelaVerdade.push(false);
            }

        }

    }

    if (letras.includes(escolha)) {

        palavrasAcertadas.push(escolha);
        atualizaTela(600, 300, 300, 100);
        pincel.fillStyle = "darkgreen";
        pincel.fillText("Acertou", x + 300, y - 300);
        pincel.fillStyle = "red";
        pincel.fillText("Palavras Acertadas: ", x - 200, y - 630);
        pincel.fillStyle = "darkgreen";

        for (let i = 0; i < palavrasAcertadas.length; i++) {

            pincel.fillText(palavrasAcertadas[i] + "-", (x + 170) + sum, y - 630);
            sum = sum + 50;
        }


    } else {

        palavrasErradas.push(escolha);
        atualizaTela(600, 300, 300, 100);
        pincel.fillStyle = "red";
        pincel.fillText("Errou!", x + 300, y - 300);
        chances++;
        pincel.fillStyle = "red";
        pincel.fillText("Palavras Erradas: ", x - 200, y - 550);
        pincel.fillStyle = "darkgreen";

        for (let i = 0; i < palavrasErradas.length; i++) {

            pincel.fillText(palavrasErradas[i] + "-", (x + 130) + sum, y - 550);
            sum = sum + 50;
        }
    }

    for (let i = 0; i < letras.length; i++) {   //desenha as palavras acertadas. No array tabelaVerdade, cada elemento é comparado para true ou false. Sendo true, a letra é desenhada.

        if (tabelaVerdade[i]) {
            pincel.fillText(letras[i], x + add, y);
            pincel.strokeText(letras[i], x + add, y);
            acertos++;
            add = add + 50;

        } else {

            add = add + 50;
        }

    }


    switch (chances) { //condições para desenhar o corpo

        case 1:
            desenhaCabeca();
            break;

        case 2:
            desenhaTronco();
            break;

        case 3:
            desenhaBracoDireito();
            break;

        case 4:
            desenhaBracoEsquerdo();
            break;

        case 5:
            desenhaPernaDireita();
            break;

        case 6:
            desenhaPernaEsquerda();
            //atualizaTela(450, 400,50, 400);
            pincel.fillStyle = "brown";
            pincel.fillText("Você Perdeu.", 500, 300);
            finalizaJogo();
            break;

        default:
            detectaVitoria();

    }

    //detectaVitoria();

    //console.log(letras);
    //console.log(tabelaVerdade.length);
    //console.log(palavrasAcertadas + " Acertadas");
    //console.log(palavrasErradas + " Erradas");
    //console.log(chances + " Chances");
    //console.log(tabelaVerdade);

}

function desenhaSlots(x, y, w, h) { //desenha os guias para mostrar as letras.

    //x= 450;
    //y = 700
    //w = 50;
    //h = 10;
    //add = 70;
    //pincel.beginPath();
    pincel.fillStyle = "green";
    pincel.strokeStyle = "black";
    let add = 0;

    for (let i = 0; i < palavraSel.length; i++) {

        pincel.beginPath();
        pincel.fillRect(x + add, y, w, h);
        pincel.strokeRect(x + add, y, w, h);
        add = add + 50;
    }
}

function detectaVitoria(tabelaVitoria) {

    tabelaVitoria = [];

    if (palavrasAcertadas.length > 0) {

        for (let i = 0; i < letras.length; i++) {

            if (!palavrasAcertadas.includes(letras[i])) {

                tabelaVitoria.push(false);

            } else {

                tabelaVitoria.push(true);
            }

        }

    }

    if (tabelaVitoria.every(e => e === true)) { //Condição acertos é uma gambiarra para evitar que a primeira palavra errada retorner a mensagem de vitória


        //atualizaTela(450, 400,50, 400);
        pincel.fillStyle = "red";
        pincel.fillText("Paranbéns, Você Venceu!", 500, 300);
        finalizaJogo();

    }

}

function finalizaJogo() {

    document.removeEventListener("keypress", acertaPalavra);
    document.getElementById("btn").style.visibility = "visible";
    document.getElementById("btn2").style.visibility = "visible";
    document.getElementById("text-input").style.visibility = "visible";

}

let letras = [];
let selAntiga;
let chances = 0;
let acertos = 0;
let palavrasErradas = [];
let palavrasAcertadas = [];
const palavras = ["ASSUNTO", "OURO", "PAROXITONA"];
let palavraSel;
let palavraInput = document.getElementById("text-input");
let botaoEnvia = document.getElementById("btn2");
let botaoInicia = document.getElementById("btn");
let corCorpo = "black";
const listaBranca = /[^A-Za-z]/g;
const minusculas = /[a-z]/;
let canvas = document.getElementById("canvas");
let pincel = canvas.getContext("2d");
pincel.fillStyle = "darkgrey";
pincel.fillRect(0, 0, 1200, 800);
botaoInicia.addEventListener("click", iniciaJogo);
botaoEnvia.addEventListener("click", adicionaPalavra);