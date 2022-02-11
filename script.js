function adicionaPalavra() {

    let texto = null;

    texto = palavraInput.value.toUpperCase();

    if (texto == "") {

        alert("Digite uma palavra.");
        return;

    } else if (palavras.includes(texto)) { //array.includes retorna false or true para palavras já inseridas no array palavras.

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

        //console.log(palavras);

        palavraInput.value = "";
    }

}

function selecionaPalavra() {
 
    sel1 = palavras[Math.floor(Math.random() * (palavras.length))];

    if (sel1 == selAntiga) {

        sel1 = palavras[Math.floor(Math.random() * (palavras.length))];

    } else {

        selAntiga = sel1;
        return palavraSel = sel1;

    }

}

function iniciaJogo() {

    letras = [];
    palavrasErradas = [];
    palavrasAcertadas = [];
    chances = 0;
    acertos = 0;
    document.addEventListener("keypress", acerta, 320, 680, 40);
    document.getElementById("btn").style.visibility = "hidden";
    document.getElementById("btn2").style.visibility = "hidden";
    document.getElementById("text-input").style.visibility = "hidden";
    selecionaPalavra();
    atualizaTela(0, 0, 1200, 700);
    desenhaForca();
    desenhaSlots(350, 590, 40, 10);

}

let acerta = function acerta(event) {

    let sum = 0;
    let x = 300;
    let y = 600;
    let add = 0;
    pincel.fillStyle = "red";
    pincel.font = "40px serif";
    escolha = event.key.toUpperCase();
    let tabelaVerdade = [];
    letras = [...palavraSel];

    if (/[^A-Z]/.test(escolha) || (escolha == "ENTER")){

        return 0;
    }

    if (palavrasAcertadas.includes(escolha) || palavrasErradas.includes(escolha)) { //condição para saber se temos letras repetidas

        alert("Esta letra já foi usada. Tente outra.");
        return null;

    } else {

        for (let i = 0; i < letras.length; i++) { //Constrói um array com valores booleanos para cada letra escolhida
            if (letras[i].includes(escolha)) {

                tabelaVerdade.push(true);

            } else {

                tabelaVerdade.push(false);
            }

        }

    }

    pincel.font = "bold 40px serif";

    if (letras.includes(escolha)) {

        palavrasAcertadas.push(escolha);
        atualizaTela(600, 300, 300, 100);
        desenhaForca();
        pincel.fillStyle = "white";
        pincel.fillText("Acertou!", x - 100, y - 440);
        pincel.fillStyle = "darkgreen";
        
        for (let i = 0; i < palavrasAcertadas.length; i++) {

            pincel.fillText(palavrasAcertadas[i] + " ", (x + 230) + sum, y - 550);
            sum = sum + 30;
        }

    } else {

        palavrasErradas.push(escolha);
        atualizaTela(600, 300, 300, 100);
        desenhaForca();
        pincel.fillStyle = "white";
        pincel.fillText("Errou!", x - 98 , y - 440 );
        chances++;
        pincel.fillStyle = "darkgreen";
        for (let i = 0; i < palavrasErradas.length; i++) {

            pincel.fillText(palavrasErradas[i] + " ", (x + 200) + sum, y - 500);
            sum = sum + 30;
        }
    }

    for (let i = 0; i < letras.length; i++) {   //desenha as palavras acertadas. No array tabelaVerdade, cada elemento é comparado para true ou false. Sendo true, a letra é desenhada.

        if (tabelaVerdade[i]) {
            pincel.fillText(letras[i], x + 55 + add, y - 15);
            pincel.strokeText(letras[i], x + 55 + add, y - 15);
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
            pincel.fillText("Você Perdeu.", 500, 660);
            pincel.fillStyle = "darkgrey";
            //atualizaTela(600, 250, 400, 400);
            pincel.fillStyle = "brown";
            pincel.fillText("A Palavra Correta é:", 500, 300, 550);
            add = 0;
            pincel.fillStyle= "green";

            for (let i = 0; i < letras.length; i++){

                pincel.fillText(letras[i], 500 + add, 350, 500 );
                pincel.strokeText(letras[i], 500 + add, 350, 500 );
                add = add + 30;

            }

            finalizaJogo();
            break;

        default:
            break;

    }

    detectaVitoria();


}

function detectaVitoria() {

    tabelaVitoria = [];

    for (let i = 0; i < letras.length; i++) {

            if (!palavrasAcertadas.includes(letras[i])) {

                tabelaVitoria.push(false);

            } else {

                tabelaVitoria.push(true);
            }

        }
  
    console.log(tabelaVitoria);

    if (tabelaVitoria.every(e => e === true)) { //Condição acertos é uma gambiarra para evitar que a primeira palavra errada retorner a mensagem de vitória


        //atualizaTela(450, 400,50, 400);
        pincel.fillStyle = "brown";
        pincel.fillText("Parabéns, você venceu!", 350, 660);
        //atualizaTela(600, 250, 500, 400);
        finalizaJogo();

    }

}

function finalizaJogo() {

    document.removeEventListener("keypress", acerta, 320, 680, 40);
    document.getElementById("btn").style.visibility = "visible";
    document.getElementById("btn2").style.visibility = "visible";
    document.getElementById("text-input").style.visibility = "visible";

}

let tabelaVitoria = [];
let letras = [];
let selAntiga;
let chances = 0;
let acertos = 0;
let palavrasErradas = [];
let palavrasAcertadas = [];
const palavras = ["JAVASCRIPT", "UBUNTU", "CALOPSITA", "ASSASSINO","TETRAGRAMATON"];
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
pincel.fillRect(0, 0, 1200, 700);
botaoInicia.addEventListener("click", iniciaJogo);
botaoEnvia.addEventListener("click", adicionaPalavra);
