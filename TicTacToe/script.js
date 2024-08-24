// select elements by query selector;
const tile = document.querySelectorAll('.tile');
const restartButton = document.querySelector('#restartButton');
const resultDisplay = document.querySelector('#tellingTurns');
const crossScore= document.querySelector('.cross>.score');
const circleScore= document.querySelector('.circle>.score');
let playGame = true;

// making an array 
let PanelArr = Array(9).fill(null);

// true for cross
let turn = true;

// changes the element to be added (X OR O) based on turn.
function Playerturn(turn){
   return turn ? "✖" : "O";
}
let gameFreezer =false;
//adding event listener to the tiles
tile.forEach((el)=>{
   el.addEventListener('click',function(e){
      if(gameFreezer)return;
      
          if(PanelArr[el.id] !== null)return;
          resultDisplay.innerHTML=`${Playerturn(!turn)} turn`;
          el.innerHTML=Playerturn(turn);
          if (turn){
            PanelArr[el.id]=1;
         }
          else{
            PanelArr[el.id]=0;
         }
          checkWinner();
          turn =! turn;
   })
})

//funtion that checks if there are elements in a line

function checkWinner() {
   if (
      (PanelArr[0] !== null && PanelArr[0] == PanelArr[1] && PanelArr[1] == PanelArr[2]) ||
      (PanelArr[3] !== null && PanelArr[3] == PanelArr[4] && PanelArr[4] == PanelArr[5]) ||
      (PanelArr[6] !== null && PanelArr[6] == PanelArr[7] && PanelArr[7] == PanelArr[8]) ||
      (PanelArr[0] !== null && PanelArr[0] == PanelArr[3] && PanelArr[3] == PanelArr[6]) ||
      (PanelArr[1] !== null && PanelArr[1] == PanelArr[4] && PanelArr[4] == PanelArr[7]) ||
      (PanelArr[2] !== null && PanelArr[2] == PanelArr[5] && PanelArr[5] == PanelArr[8]) ||
      (PanelArr[0] !== null && PanelArr[0] == PanelArr[4] && PanelArr[4] == PanelArr[8]) ||
      (PanelArr[2] !== null && PanelArr[2] == PanelArr[4] && PanelArr[4] == PanelArr[6])
    ){
      restartButton.innerText="Play Again"
      resultDisplay.innerText=`${Playerturn(turn)} wins!`
      if(turn){crossScore.innerHTML=parseInt(crossScore.innerHTML)+1;
      }
      else{
         circleScore.innerHTML=parseInt(circleScore.innerHTML)+1;
      }
         gameFreezer=true;
    }
};
// win/loose and playAgain alert 
function turnWriter(turn){
   
}
