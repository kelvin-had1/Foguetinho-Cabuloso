const canvas = document.getElementById('screen')
const propriedadeScreen = canvas.getBoundingClientRect()
function criarMeteoro(tagName, className){
    const elem = document.createElement(tagName)
    elem.className = className
    return elem

}

const meteoro = document.getElementById('elem')
let topMeteoro = -50
let bottomMeteoro = propriedadeScreen.height + 50

console.log( )


addEventListener('keydown', (e)=>{

    try {
        keyPresseds[e.key]()
    } catch (error) {
        console.log(`Invalid key: ${error}`)
    }
})

const temporizador = setInterval(() => {
    if(bottomMeteoro > 0){
        meteoro.style.top = topMeteoro + 'px'
        topMeteoro += 1
        bottomMeteoro -= 1
    }
    
}, 20)


