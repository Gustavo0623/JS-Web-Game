function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'

        function moveCharacter(){
            if (direction === 'west'){
                if (x > 0){
                    x = x - 1
                }
                else x = x
            }
            if (direction === 'north'){
                if (y < 330){
                    y = y + 1
                }
                else y = y
            }
            if (direction === 'east'){
                if (x < 1390){
                    x = x + 1 
                }
                else x = x
            }
            if (direction === 'south'){
                if (y > 103){
                    y = y - 1  
                }
                else y = y
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }

        setInterval(moveCharacter, 1)
    
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
    
            if(e.key === 'ArrowLeft'){
            direction = 'west'
            }
            if(e.key === 'ArrowRight'){
            direction = 'east'
            }
            if(e.key === 'ArrowUp'){
            direction = 'north'
            }
            if(e.key === 'ArrowDown'){
            direction = 'south'
            }
            callback(direction)
        })

        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })
    }

    return{
        to:moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}