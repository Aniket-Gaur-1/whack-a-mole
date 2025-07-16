let score = 0

let moleClickedCounter = false

let timer = 30

let gameActive = true

let highScore = score

const restartGame = () => {
    timer = 30
    score = 0
    gameActive = true
    clearInterval(moleInterval)
    clearInterval(timeInterval)

    moleInterval = setInterval(moleAppear, 3000)
    timeInterval = setInterval(timeLeft, 1000)

    document.querySelector(".time").innerHTML = `Time Left : ${timer}`
    document.querySelector(".score").innerHTML = `Score : ${score}`
}

const timeLeft = () => {
    if (timer === 0) {
        clearInterval(moleInterval)
        clearInterval(timeInterval)

        gameActive = false

        document.querySelector(".circle").remove()

        if (score > highScore) highScore = score
        else highScore = highScore

        document.querySelector(".highScore").innerHTML = `High Score : ${highScore}`

    } else {
        timer--
        document.querySelector(".time").innerHTML = `Time Left : ${timer}`
    }
}

const moleClicked = () => {
    if (gameActive) {
        if (moleClickedCounter) {
            score++
            document.querySelector(".score").innerHTML = `Score : ${score}`
            moleClickedCounter = false
        }
    }
}

const moleAppear = () => {
    const gridBoxes = document.querySelectorAll(".grid")
    const random = Math.floor(Math.random() * gridBoxes.length)
    gridBoxes.forEach(box => box.innerHTML = '')
    gridBoxes[random].innerHTML = '<img src = "./public/bunny.png" alt = "Bunny" class ="circle">'

    document.querySelector(".circle").addEventListener("click", moleClicked)
    moleClickedCounter = true
}

document.querySelector(".restart").addEventListener("click", restartGame)


let moleInterval = setInterval(moleAppear, 1000)
let timeInterval = setInterval(timeLeft, 1000)