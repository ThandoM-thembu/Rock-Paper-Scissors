//Write a function to get the computer's choice
const getComputerChoice = function(){
    // The choices will be rock, paper, or scissors. We will use an array to store these choices and then randomly select one of them.
   const choices = ["rock", "paper", "scissors"];
   // We will use the Math.random() function to generate a random number between 0 and 1, and then multiply it by the length of the choices array to get a random index. We will then use this index to return the computer's choice.
   const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

//Write a function to get the human choice
const getHumanChoice = function(){
    // Use the prompt method to get user's input
    const userInput = prompt("Please enter rock, paper, or scissors: ");
        //User must type rock, paper, or scissors. If they type something else, we will return an error message.
    if(userInput !== "rock" && userInput !== "paper" && userInput !== "scissors"){
        return "Invalid choice. Please enter rock, paper, or scissors.";
    }

};


//Create a function with two arguments, humanChoice and computerChoice

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)

//Create a function named playGame
const playGame = function(){
    // Move playRound function and score variables so that they're declared inside of the new playGame function. This way, the scores will reset every time the playGame function is called.
    const playRound = function (humanChoice, computerChoice){
    // The humanChoice argument must be case-insensitive
        humanChoice = humanChoice.toLowerCase();
    // The console.log must display a string value representing the round winner, such as: 'You lose! paper bears Rock"
    //Increment the humanScore or computerScore variable based on the round winner 
    if (humanChoice === computerChoice){
        return "It's a tie! You both chose " + humanChoice;
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        return "You win! Rock beats scissors";
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        return "You win! Paper beats rock";
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        return "You win! Scissors beats paper";
    } else {
        computerScore++;
        return "You lose! " + computerChoice + " beats" + humanChoice;
    }    
    };
    // Create a variable named humanScore  and set it to zero
    let humanScore = 0;
    // Create a variable named computerScore and set it to zero
    let computerScore = 0;
}
