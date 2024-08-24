
// select elements by query selector;
const tile = document.querySelectorAll('.tile');

let playGame = true;
if(playGame){
   introCode();
}
function introCode(){}

let turn = true;
tile.forEach((el)=>{
   el.addEventListener('click',function(e){
     el.innerHTML=Playerturn(turn);
     turn =! turn;
   })
})

// changes the element to be added (X OR O) based on turn.
function Playerturn(turn){
   return turn ? "✖" : "O";
}


//funtion that checks if there are elements in a line

function checkPanel(PanelArray){
  //checks the array.

  /*
  123
  456
  789
  147
  258
  369
  357
  159
  */
}

// win/loose and playAgain alert 
function finalMessage(){

}
