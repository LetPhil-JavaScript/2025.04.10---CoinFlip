console.log("Welcome to Coin Flipper!")

// DOM Elements
const coinContainer = document.querySelector(".coin-container")
const coinDisplay = document.querySelector(".coin-display")
const flipBtn = document.querySelector("#flipBtn")
const totalFlips = document.querySelector(".total-flips")

let totalCount = 0;

flipBtn.addEventListener('click', displayFlip)

function displayFlip() {
    totalCount++
    coinDisplay.innerText = "Flipping"
    setTimeout(flipCoin, 1000)
    totalFlips.innerText = totalCount
    console.log("Total Flips:", totalCount)
};

function flipCoin() {
   console.log("Coin Flipped!")
   let result
   if(Math.random() < 0.5) {
        result = "Heads"
   } else {
        result = "Tails"
   }
   console.log(result)
   coinDisplay.innerText = result
}

// Upgrading Coin Flip:
// Show total amount of how many times the coin has been flipped.

// Show count of heads and tails

// Change Flip Button text to "Flipping" on the flipe
// Adding Player Names, Player 1 vs Player 2
// ----- <> Win/Lose for Players

// Adding an Image of Coin w/ Animation