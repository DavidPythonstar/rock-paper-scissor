const typing = document.querySelector('.texts')
const textToType = "Welcome to the ultimate battle of wits between you and your computer opponent! It's time to engage in the timeless game of Rock, Paper, Scissors.In this epic showdown, you will face off against your digital adversary. Each of you will choose your weapon - Rock, Paper, or Scissors - in a quest for victory. Will you outsmart the computer or be outwitted by its algorithmic might?"

function textTyping(element, text, index=0)
{
    element.textContent += text[index]
    if (index === textToType.length-1)
        return;
    
    setTimeout( () => textTyping(element, text, index + 1), 100);
    
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
    else
            result = "Entered an Invalid input";

    return `you chose ${playerMove} and Computer Chose ${computerSelection} and You ${result}`;
}

function game()
{
    let counter = 0;
    let win = 0;
    let lose = 0;
    let tie = 0;
    
    while (counter < 5)
    {
         player = prompt("Enter your choice")
        console.log(playRound(player,choice));
        if (result === "Win")
            win++;
        else if (result === "Lose")
            lose++;
        else if (result === "Tie")
            tie++;
        else
            counter--;

        counter++;
    }
    if (win > lose)
        console.log(`You win with ${win} wins and ${lose} loses plus ${tie} ties`);
    else
        console.log(`You lose with ${lose} loses and ${wins} wins plus ${tie} ties `)


}
// console.log(playRound(player,choice))
game();