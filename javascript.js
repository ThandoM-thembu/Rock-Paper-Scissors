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
    const choice = prompt("Please enter rock, paper, or scissors: ").toLowerCase();
        //User must type rock, paper, or scissors. If they type something else, we will return an error message.
    while(choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors: ").toLowerCase();
    }
    return choice;
};
//Create a function named playGame
const playGame = function(){
    // Move playRound function and score variables so that they're declared inside of the new playGame function. This way, the scores will reset every time the playGame function is called.
     // Create a variable named humanScore  and set it to zero
    let humanScore = 0;
    // Create a variable named computerScore and set it to zero
    let computerScore = 0;
    const playRound = function (humanChoice, computerChoice){
         // The humanChoice argument must be case-insensitive, so we will convert it to lowercase using the toLowerCase() method.
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
    // Play five rounds calling playRound 5 times
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
    // After five rounds, display the winner based on score.
    if (humanScore > computerScore){
        console.log("Congratulations! You win the game with a score of" + humanScore + "to" + computerScore);
    } else if (computerScore > humanScore){
        console.log("Sorry, you lose the game with a score of" + computerScore + "to" + humanScore);
    } else {
        console.log("The game is a tie with a score of" + humanScore + "to" + computerScore);
    }
};

  playGame();
