let x;
let gradi = 0;

function rollDice(){
  x = Math.floor(Math.random() * 6) + 1;
  gradi = gradi + 360;
  document.getElementById('img').style.rotate=`${gradi}deg`;
  document.getElementById('text').innerHTML=x;
  document.getElementById('textSection').style.fontSize="20vh";
  if(x == 1){
    document.getElementById('img').src="imgs/dice1.png";
  } else if(x == 2){
    document.getElementById('img').src="imgs/dice2.png";
  } else if(x == 3){
    document.getElementById('img').src="imgs/dice3.png";
  } else if(x == 4){
    document.getElementById('img').src="imgs/dice4.png";
  } else if(x == 5){
    document.getElementById('img').src="imgs/dice5.png";
  } else if(x == 6){
    document.getElementById('img').src="imgs/dice6.png";
  }
}