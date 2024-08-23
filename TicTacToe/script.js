

const tile = document.querySelectorAll('.tile');
   let turn = true;
   console.log(typeof turn)
tile.forEach((tile)=>{
    console.log(typeof tile)
    tile.addEventListener("click",(button)=>{ 
        if(turn === true){  
            console.log(butto)

            turn = !turn;  
 }
 else{  
    console.log("heelo")
    //tile.innerHTML(`<img src="./resources/circle-svgrepo-com.svg" alt="circle">`);
    //console.log(turn);
    turn = !turn;   
 }
    })
 
})