// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard

let hasBlackjack = false
let isAlive = true
let message = ""


function startGame() {
    if (sum < 21) {

        message = "Do you want to draw card "
    }
    else if (sum === 21) {

        message = " Wohoo !! You got BlackJack 🥳"
        hasBlackjack = true
    }
    else {
        isAlive = false
        message = "You're Lose 😔 "
    }

    console.log(message)

}