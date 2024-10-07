// generate a random colour 
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let colour = '#'
    for(let i = 0; i < 6; i++){
        colour += hex[Math.floor(Math.random() * 16)]
    }
    return colour
}

let intervalId;

const startChangingColor = function (){
   if (!intervalId){
    intervalId = setInterval(changeBgColor, 1000)
   }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
}

const stopChangingColor = function (){
    clearInterval(intervalId)
    intervalId = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);