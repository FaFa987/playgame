// let first = getRandomCard()
// let secendCard = getRandomCard()
let cards = []
let sum = 0

let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
//console.log(messageEl)
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")

console.log(cards)

let player = { 
    name : "FaFa",
    chips : 145}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": " + player.chips + ' $'

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1
  if(randomNumber > 10){
    return 10
  }
  else if(randomNumber === 1){
    return 11
  }
  else{
    return randomNumber
  }
}

function startGame(){
    isAlive = true
    let first = getRandomCard()
    let secendCard = getRandomCard()
    cards = [first , secendCard]
    sum = first + secendCard
    renderGame()
}

function renderGame(){
    cardEl.textContent = "cards: "
    for ( let i=0 ; i<cards.length ; i++){
       cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "sum: " + sum;
    if (sum < 21){
        message ="Do you want a new card";
    } else if (sum === 21){
        message ="You've got blackjack"
        hasBlackJack = true
    } else {
        message ="You're out of game"
        isAlive = false
    }
    messageEl.textContent = message
     
}


function newCard(){
    if (hasBlackJack === false && isAlive === true ){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
   

}
//let firstCard = 10


// console.log(hasBlackJack)
// console.log(3 >= 2 );

//let greeting = ["i am fafa","i am fucking good","i am waiting" , "bye for ever"]
// let newMessage = "bye"

// message.push(newMessage)
// console.log(message)


// message.pop()
// console.log(message)

//start ; finish ; step size
// let number = [4 , 5 , 9]
// for (i=0 ; i < number.length ; i ++){
//     console.log(number[i])
// }

// for(let i = 0 ; i <= greeting.length ; i +=1){
// console.log(greeting[i])
// }