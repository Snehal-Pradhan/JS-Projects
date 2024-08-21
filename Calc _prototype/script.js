const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.tile');
const history = document.querySelector(".panel2");

buttons.forEach((button)=> {
    button.addEventListener('click',()=>{
        if(button.innerText ==="AC"){
            display.innerText ="";
        }
        else if(button.innerText ==="CE"){
            display.innerText = display.innerText.slice(0,-1);
            
        }
        else if(button.innerText ==="="){
        const newElement = document.createElement('div');
        newElement.innerText=`${display.innerText} = `
            try{
                display.innerText=eval(display.innerText);
            }
            catch(error){
                display.innerText="Error"
            }
        newElement.innerText+= display.innerText;
        history.appendChild(newElement)
            
        }
        else display.innerText+=button.innerText;
    })
})