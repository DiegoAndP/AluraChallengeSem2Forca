function atualizaTela(x, y, h, w) {
    
    pincel.beginPath();
    pincel.fillStyle = "darkgrey";
    pincel.fillRect(x, y, h, w);

}

function desenhaForca(x, y) {

    x = 100;
    y = 700
    pincel.moveTo(x, y);
    pincel.lineTo(x * 3 , y);
    pincel.lineTo(x * 2.5, y - 80);
    pincel.lineTo(x + 50, y - 80);
    pincel.lineTo(x, y);
    pincel.strokeStyle = "black";
    pincel.fillStyle= "green";
    pincel.fill();
    pincel.stroke();
    pincel.fillStyle= "brown" ;
    pincel.fillRect(x + 75, y - 480, x / 2, x * 4);
    pincel.strokeStyle= "black";
    pincel.strokeRect(x + 75, y - 480, x / 2, x * 4);
    pincel.fillRect(x + 75, y - 480, x * 2 , x / 2 );
    pincel.strokeRect(x + 75, y - 480, x * 2 , x / 2 );

}

function desenhaCabeca(){

    pincel.beginPath();
    pincel.fillStyle= corCorpo;
    pincel.arc(370, 305, 30, 0, 2 * Math.PI);
    pincel.fill();
    pincel.stroke();
    pincel.beginPath();
    pincel.fillStyle= "white";
    pincel.arc(360, 300, 5, 0, 2 * Math.PI);
    pincel.arc(380, 300, 5, 0, 2 * Math.PI);
    pincel.fill();
}

function desenhaTronco(){

    pincel.fillStyle= corCorpo;
    pincel.fillRect(355, 335, 30, 100);

}

function desenhaBracoDireito(){

    pincel.beginPath();
    pincel.fillStyle= corCorpo;
    pincel.moveTo(355, 335);
    pincel.lineTo(300, 400);
    pincel.lineTo(360, 350);
    pincel.fill();
}

function desenhaBracoEsquerdo(){

    pincel.beginPath();
    pincel.fillStyle= corCorpo;
    pincel.moveTo(380, 330);
    pincel.lineTo(450, 400);
    pincel.lineTo(380, 350);
    pincel.fill();
}

function desenhaPernaDireita(){

    pincel.beginPath();
    pincel.fillStyle= corCorpo;
    pincel.moveTo(355, 430);
    pincel.lineTo(300, 500);
    pincel.lineTo(380, 425);
    pincel.fill();
}

function desenhaPernaEsquerda(){

    pincel.beginPath();
    pincel.fillStyle= corCorpo;
    pincel.moveTo(380, 430);
    pincel.lineTo(450, 500);
    pincel.lineTo(355, 425);
    pincel.fill();
}

function desenhaSlots(x, y, w, h) {
    //x= 450;
    //y = 700
    //w = 50;
    //h = 10;
    //add = 70;
    pincel.fillStyle = "green";
    pincel.strokeStyle = "black";
    let add = 0;

    for (let i = 0; i < palavraSel.length; i++) {

        pincel.fillRect(x + add, y, w, h);
        pincel.strokeRect(x + add, y, w, h);
        add = add + 50;
    }
}
