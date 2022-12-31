let msgEl = document.getElementById("messageEl")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector(".card-el")

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard] // array - ordered list
let sum = firstCard + secondCard

let hasBlackjack = false
let isAlive = true
let message = ""
let newcard = ""

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    return (randomCard)
}

function startGame() {
    renderGame()
}

function renderGame() {
    // rendering out firstCard and secondCard
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + "  "
    }
    sumEl.textContent = "Sum:" + sum
    if (sum < 21) {
        message = "Do you want to draw card "

    }
    else if (sum === 21) {
        message = " Wohoo !! You got BlackJack 🥳"
        hasBlackjack = true
        // msgEl.textContent = message

    }
    else {
        isAlive = false
        message = "You're Lose 😔 "
        // msgEl.textContent = message

    }

    msgEl.textContent = message

    // console.log(message)

}

function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}


