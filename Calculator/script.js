const elements = document.querySelectorAll('.numPadButton');
const historyPanel = document.querySelector('.historyPanel');
console.log(elements);
elements.forEach((button)=>{
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        const newElement = document.createElement('div');
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


        newElement.innerText = e.target.innerText;
        historyPanel.appendChild(newElement);
    })
})