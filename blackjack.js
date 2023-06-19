const getRandomCard = () => {
    let rand = Math.floor(Math.random() * 13) + 1
    if (rand === 1) {
        return 11
    } else if (rand > 10) {
        return 10
    } else {
        return rand
    }
}
let score = 0
let message = ""
let paraEl = document.querySelector('#para')
let cardEl = document.getElementById("card")
let sumEl = document.querySelector('#sum')
let scoreEl = document.getElementById('score')
let isalive = false
let win = false
let gameContinue = false
let sum

const check = () => {
    if (sum < 21) {
        message = "Do you want to pick a new card?"
        gameContinue = true
    } else if (sum === 21) {
        message = "Blackjack"
        win = true
        score++
    } else {
        message = "You are out of game"
        isalive = false
    }
    paraEl.textContent = message
    scoreEl.textContent = "score" + " " + score
}

const start = () => {
    win = false
    if (gameContinue != true || isalive != true) {
        isalive = true
        const card1 = getRandomCard()
        const card2 = getRandomCard()
        sum = card1 + card2
        cardEl.textContent = "Card: " + card1 + " " + card2
        sumEl.textContent = "sum: " + sum
        check()
    }
}

const new_card = () => {
    if (isalive === true && win === false) {
        const card3 = getRandomCard()
        sum += card3
        cardEl.textContent += " " + card3
        sumEl.textContent = "sum: " + sum
        check()
    }
}