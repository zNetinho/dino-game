const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumping = false;
let position = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
        }
    }
}

function jump() {

    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);
            //pulo
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    //descendo
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

function createCactos() {
    const cactos = document.createElement('div');
    let cactosPosition = 1000;
    let randonTime = Math.random() * 6000;

    cactos.classList.add('cactos');
    background.appendChild(cactos);
    cactos.style.left = cactosPosition + 'px';

    let leftTimer = setInterval(() => {
        if (cactosPosition < -60) {
            clearInterval(leftTimer);
            background.removeChild(cactos);
        } else if (cactosPosition > 0 && cactosPosition < 60 && position < 60) {
            clearInterval(leftTimer);
            isGameOver = true;
            document.body.innerHTML = '<h1 class ="game-over">fim de jogo</h1>';
        } else {
            cactosPosition -= 10;
            cactos.style.left = cactosPosition + 'px';
        }
    }, 20);
    setTimeout(createCactos, randonTime);
}

createCactos();
document.addEventListener('keyup', handleKeyUp);