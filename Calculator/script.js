const elements = document.querySelectorAll('.numPadButton');
const contentPanel = document.querySelector('.contentPanel');
const clearButton = document.querySelector('#clearButton');
const display = document.querySelector('.display');
elements.forEach((button)=>{
    button.addEventListener('click',function(e){
        const newElement = document.createElement('div');
        display.innerText += e.target.innerText;
        //styling
        newElement.style.backgroundColor="#1d2225";
        newElement.style.fontFamily="Roboto";
        newElement.style.borderRadius="0.3rem";
        newElement.style.margin="0.5rem";
        newElement.style.paddingTop="0.5rem";
        newElement.style.paddingBottom="0.5rem";
        newElement.style.paddingLeft ='2rem';
        newElement.style.paddingRight ='2rem';
        newElement.style.color='#ffffff8f';

        //
        newElement.innerText = e.target.innerText;
        contentPanel.appendChild(newElement);
    })
})

clearButton.addEventListener('click',()=>{
    contentPanel.innerHTML='';
})
