function atualizaTela(x, y, h, w) {
    
    pincel.beginPath();
    pincel.fillStyle = "darkgrey";
    pincel.fillRect(x, y, h, w);

}

function desenhaForca(x, y) {

    x = 100;
    y = 600
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
    pincel.font="bold 40px serif";
    pincel.fillStyle = "darkred";
    pincel.fillText("Palavras Erradas:", x + 75, y - 500);
    pincel.fillText("Palavras Acertadas:", x + 75, y - 550 );

}

function desenhaCabeca(){

    pincel.beginPath();
    pincel.fillStyle= corCorpo;
    pincel.arc(370, 305 - 100, 30, 0, 2 * Math.PI);
    pincel.fill();
    pincel.stroke();
    pincel.beginPath();
    pincel.fillStyle= "white";
    pincel.arc(360, 300 - 100, 5, 0, 2 * Math.PI);
    pincel.arc(380, 300 - 100, 5, 0, 2 * Math.PI);
    pincel.fill();
}

function desenhaTronco(){

    pincel.fillStyle= corCorpo;
    pincel.fillRect(355, 335 - 100, 30, 100);

}

function desenhaBracoDireito(){
    let x = 100;
    pincel.beginPath();
    pincel.fillStyle= corCorpo;
    pincel.moveTo(355, 335 - x);
    pincel.lineTo(300, 400 - x);
    pincel.lineTo(360, 350 - x);
    pincel.fill();
}

function desenhaBracoEsquerdo(){
    let x = 100;
    pincel.beginPath();
    pincel.fillStyle= corCorpo;
    pincel.moveTo(385, 335 - x);
    pincel.lineTo(450, 400 - x);
    pincel.lineTo(380, 350 - x);
    pincel.fill();
}

function desenhaPernaDireita(){
    let x = 100;
    pincel.beginPath();
    pincel.fillStyle= corCorpo;
    pincel.moveTo(355, 430 - x);
    pincel.lineTo(300, 500 - x);
    pincel.lineTo(380, 425 - x);
    pincel.fill();
}

function desenhaPernaEsquerda(){
    let x = 100;
    pincel.beginPath();
    pincel.fillStyle= corCorpo;
    pincel.moveTo(380, 430 - x);
    pincel.lineTo(450, 500 - x);
    pincel.lineTo(355, 425 - x);
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

function introducao(x,y){
    
    


}