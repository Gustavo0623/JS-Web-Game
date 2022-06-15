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

function newImage2(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + '%'
    object.style.bottom = bottom + '%'
    document.body.append(object)
    return object
}
// declaring function for items //

function newItem(url, left, bottom){
    let object = newImage2(url, left, bottom)
    
    object.addEventListener('dblclick', function(){
        object.remove()
    })
}

// variables for background //

let horizon = window.innerHeight / 1.75
let sky = window.innerHeight-horizon
let grass = horizon

// using functions //

tile('assets/sky.png', 0, horizon, window.innerWidth/100, sky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, grass/100)

newImage2('assets/green-character.gif', 15, 5)
newImage2('assets/pine-tree.png', 87, 29)
newImage2('assets/pine-tree.png', 87, 0)
newImage2('assets/pine-tree.png', 0, 29)
newImage2('assets/pine-tree.png', 0, 0)
newImage2('assets/tree.png', 12, 50)
newImage2('assets/tree.png', 22, 50)
newImage2('assets/tree.png', 32, 50)
newImage2('assets/tree.png', 42, 50)
newImage2('assets/tree.png', 52, 50)
newImage2('assets/tree.png', 62, 50)
newImage2('assets/tree.png', 72, 50)
newImage2('assets/tree.png', 82, 50)
newImage2('assets/pillar.png', 25, 13)
newImage2('assets/pillar.png', 65, 13)
newImage2('assets/crate.png', 25, 20)
newImage2('assets/crate.png', 75, 20)
newImage2('assets/well.png', 47, 20)

newItem('assets/sword.png', 38, 40)
newItem('assets/sheild.png', 48, 40)
newItem('assets/staff.png', 58, 40)
