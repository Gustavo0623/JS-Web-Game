// declaring funtion for background tiles //

function tile(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}
// declaring function for images //

function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

// variables for background //

let horizon = window.innerHeight / 1.75
let sky = window.innerHeight-horizon
let grass = horizon

// added from callback practice

const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
character.style.zIndex = 1

function handleDirectionChange(direction){
    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
}
// dialogue function 
const initialGreet = newText('Hello')

function newText(dialogue){
    text = document.createElement('p')
    text.textContent= dialogue
    text.style.display= 'flex'
    text.style.backgroundColor= '#fff'
    text.style.fontSize= '12px'
    text.style.borderRadius= '30px'
    document.body.append(text)
    text.style.zIndex= 2
    text.style.padding= '5px'

    return text
}
// using functions //

// Greet not responding properly when hitting barrier needs adjusting or maybe add it to a div that is the same size as character image? //
// move(initialGreet).withArrowKeys(680, 270, handleDirectionChange)

move(character).withArrowKeys(675, 210, handleDirectionChange)

tile('assets/sky.png', 0, horizon, window.innerWidth/100, sky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, grass/100)

move(newImage('assets/pine-tree.png')).to (1300, 350)
move(newImage('assets/pine-tree.png')).to (0, 350)
move(newImage('assets/tree.png')).to (150, 350)
move(newImage('assets/tree.png')).to (280, 350)
move(newImage('assets/tree.png')).to (410, 350)
move(newImage('assets/tree.png')).to (540, 350)
move(newImage('assets/tree.png')).to (670, 350)
move(newImage('assets/tree.png')).to (800, 350)
move(newImage('assets/tree.png')).to (930, 350)
move(newImage('assets/tree.png')).to (1060, 350)
move(newImage('assets/tree.png')).to (1190, 350)
move(newImage('assets/pillar.png')).to (300, 120)
move(newImage('assets/pillar.png')).to (950, 120)
move(newImage('assets/crate.png')).to (280, 170)
move(newImage('assets/crate.png')).to (1080, 170)
move(newImage('assets/well.png')).to (650, 100)

move(newItem('assets/sword.png')).to (400, 200)
move(newItem('assets/sheild.png')).to (670, 300)
move(newItem('assets/staff.png')).to (950, 200)
