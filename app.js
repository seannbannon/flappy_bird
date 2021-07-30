document.addEventListener('DOMContentLoaded', () => {
    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground')

    let birdLeft = 220
    let birdBottom = 100
    let gravity = 2

    function startGame(){
        birdBottom -= gravity
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft + 'px'
    }
    let timerId = setInterval(startGame, 20)

    function jump() {
        birdBottom += 50
        bird.style.bottom = birdBottom + 'px'
        console.log(birdBottom)
    }
    document.addEventListener('keyup', jump)

})

    // making our bird jump, 1 hour 28 sex

    // https://www.freecodecamp.org/news/javascript-projects-for-beginners/#how-to-create-doodle-jump-and-flappy-bird
