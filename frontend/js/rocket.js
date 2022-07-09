const foguete = document.getElementById('rocket')
const leftScreen = 10
const rightScreen = 460
let position = 255


const keyPresseds = {
    ArrowLeft: () =>{
        moveLeft()
        
    },
    ArrowRight: () =>{
        moveRight()
    }
}


function moveLeft(){
    if(position != leftScreen){
        position -= 5
        foguete.style.left = position + 'px'    
    }
    
}

function moveRight(){
    if(position != rightScreen){
        position +=  + 5
        foguete.style.left = position + 'px'
    }
}

