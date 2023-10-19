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