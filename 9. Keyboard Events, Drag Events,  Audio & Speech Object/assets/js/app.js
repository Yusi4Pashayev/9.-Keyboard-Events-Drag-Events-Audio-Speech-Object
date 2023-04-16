//Keyboard events
let man = document.querySelector('.man');
let youAreAtHome = document.querySelector('.finish>h1');
let positionLeft = 0;
let positionTop = 0;


document.addEventListener('keydown', Move);

function Move(event) {
    event.preventDefault();
    
    if (event.code === 'ArrowLeft') {
        positionLeft = ArrowLeft(positionLeft);
        
        YouAreAtHome(positionLeft, positionTop)
    }
    else if (event.code === 'ArrowUp') {
        positionTop = ArrowUp(positionTop);
        
        YouAreAtHome(positionLeft, positionTop)
    }
    else if (event.code === 'ArrowRight') {
        positionLeft = ArrowRight(positionLeft);
        
        YouAreAtHome(positionLeft, positionTop)
    }
    else if (event.code === 'ArrowDown') {
        positionTop = ArrowDown(positionTop);
        
        YouAreAtHome(positionLeft, positionTop)
    }
}


function ArrowLeft(positionLeft) {
    
    --positionLeft;
    if (positionLeft < 0) {
        return 0;
    }
    man.style.left = positionLeft + '%';
    man.style.transform = " rotateY(180deg)";
    return positionLeft;

}
function ArrowUp(positionTop) {
    --positionTop;
    if (positionTop < 0) {
        return 0;
    }
    man.style.top = positionTop + '%';
    return positionTop;
}
function ArrowRight(positionLeft) {
    ++positionLeft;
    if (positionLeft > 100) {
        return 100;
    }
    man.style.transform = " rotateY(0deg)";
    man.style.left = positionLeft + '%';
    return positionLeft;
}
function ArrowDown(positionTop) {
    ++positionTop;
    console.log(positionTop);
    if (positionTop > 100) {
        return 100;
    }
    man.style.top = positionTop + '%';
    return positionTop;
}

function YouAreAtHome(positionLeft, positionTop) {
    if (positionLeft > 40 && positionLeft < 45 && positionTop > 55 && positionTop < 60) {
        man.classList.add('d-none');
        
        youAreAtHome.innerHTML = 'YOU ARE AT HOME';
        document.removeEventListener('keydown', Move);
    }
}