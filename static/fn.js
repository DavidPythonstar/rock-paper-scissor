const typing = document.querySelector('.texts')
const textToType = "Welcome to the ultimate battle of wits between you and your computer opponent! It's time to engage in the timeless game of Rock, Paper, Scissors.In this epic showdown, you will face off against your digital adversary. Each of you will choose your weapon - Rock, Paper, or Scissors - in a quest for victory. Will you outsmart the computer or be outwitted by its algorithmic might?"
const buttons = document.querySelectorAll('button');
const dynamic = document.querySelector('.dynamic')

// Define a variable to hold the ID of the clicked button

console.log()
function textTyping(element, text, index=0)
{
    element.textContent += text[index]
    if (index === textToType.length-1)
        return;
    
    setTimeout( () => textTyping(element, text, index + 1), 120);
    
}
textTyping(typing,textToType)

function getComputerChoice()
{
    let computerChoice = "";
    let choice = Math.random()
    if (choice < 0.3)
       computerChoice = "rock";
    else if (choice > 0.3 && choice < 0.6)
        computerChoice = "paper";
    else
        computerChoice = "scissor"

    return computerChoice;
}
choice = getComputerChoice();

let result = ""
function playRound(playerSelection, computerSelection) {
    
    const playerMove = playerSelection.toLowerCase();

    if (playerMove === "rock") {
        if (computerSelection === "paper")
            result = "Lose";
        else if (computerSelection === "scissor")
            result = "Win";
        else if (computerSelection === "rock")
            result = "Tie";
    }
    else if (playerMove === "scissor") {
        if (computerSelection === "rock")
            result = "Lose";
        else if (computerSelection === "paper")
            result = "Win";
        else if (computerSelection === "scissor")
            result = "Tie";
    }
    else if (playerMove === "paper") {
        if (computerSelection === "rock")
            result = "Win";
        else if (computerSelection === "scissor")
            result = "Lose";
        else if (computerSelection === "paper")
            result = "Tie";
        
    }

    return (`you chose ${playerMove} and Computer Chose ${computerSelection} and You ${result}`);
}
let playerChoice = '';
let loses = 0;
let wins = 0;
let ties = 0
buttons.forEach( (button) =>
{
    button.addEventListener('click',(button) =>
    {
        
        playerChoice = button.target.id;
        choice = getComputerChoice()
        let theResult = playRound(playerChoice,choice);
        
        
        let resultH4 = document.createElement('h4');
        resultH4.textContent = theResult;
        dynamic.appendChild(resultH4)
        console.log(result);
        
        resultH4 = "";

        if (result == "Win")
        {
            wins++;
        }
        else if (result === "Lose")
        {
            loses++;
        }
        else if(result === "Tie")
        {
            ties++;
        }
        
        console.log(`you have ${wins} wins ${loses} loses and ${ties} ties`)
        let gameResult = `Wins: ${wins}  Loses: ${loses} Tie: ${ties}`
        const gameResuth6 = document.createElement('h6')
        gameResuth6.textContent = gameResult;
        dynamic.appendChild(gameResuth6)
        if (wins == 5)
        {
            alert(`You won the March with Wins:${wins} Loses:${loses} and Ties:${ties}`)
            loses = 0;
            wins = 0;
            ties = 0
        }
        else if (loses == 5)
        {
            alert(`You lost the March with loses:${loses} wins:${wins} and Ties:${ties}`)
            loses = 0;
            wins = 0;
            ties = 0
        }
    })
    
})

