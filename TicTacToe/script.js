
// select elements by query selector;
const tile = document.querySelectorAll('.tile');

function tileStat() {
   this.isChecked = false;
   this.isCircle = false;
   this.position = 0;
 }
let i = 1;
tile.forEach((e)=>{
   const Stat = new tileStat();
   Stat.position = i;
   i++;
   console.log(Stat);
   e.addEventListener('click',()=>{
      if(e.Stat.isChecked===false){
         console.log(hello)
      }
   })

})


// function that add elements on click 
function addSVG(isCircle){
   if(isCircle){
      // circle added in dom
   }
   else {
      // cross added in dom
   }
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
