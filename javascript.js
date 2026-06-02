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
    //Convert the user's input to lowercase to make it case-insensitive
    return userInput.toLowerCase();
    //User must type rock, paper, or scissors. If they type something else, we will return an error message.
    if(userInput !== "rock" && userInput !== "paper" && userInput !== "scissors"){
        return "Invalid choice. Please enter rock, paper, or scissors.";
    }

};
// Create a variable named humanScore  and set it to zero
let humanScore = 0;
// Create a variable named computerScore and set it to zero
let computerScore = 0;



