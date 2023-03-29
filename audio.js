Howler.volume(0.5)
const audio = {
    backgroundMusic: new Howl({
        src: './audio/backgroundMusic.mp3',
        loop: true
    }), enemyShoot: new Howl({
        src: './audio/enemyShoot.mp3'
    }), explode: new Howl({
        src: './audio/explode.mp3'
    }),
    gameOver: new Howl({
        src: './audio/gameOver.mp3',
        volume: 0.8
    }),
    select: new Howl({
        src: './audio/select.mp3'
    }),
    shoot: new Howl({
        src: './audio/shoot.mp3'
    }),
    start: new Howl({
        src: './audio/start.mp3'
    }),
}

