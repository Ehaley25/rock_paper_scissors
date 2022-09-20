let x = ["Rock","Paper","Scissors"];
let getComputerChoice = () => {return x[Math.floor(Math.random() * x.length)]}
// This is how i generated the "AIs" choice ^ just math.random to the length of the array
// first I did an if else statement and realized i can save some lines doing this

let playersInput = () => {
let input = prompt("Please enter a number 1-3, 1 = Rock, 2 = Paper, 3 = Scissors", 0)
    if(input == 1){
        return "Rock"
    }
    else if(input == 2){
        return "Paper"
    }
    else if(input == 3){
        return "Scissors"
    }
    else{
        return playersInput()
    }
}
// made a function that allows players to input their decision using prompt and numbers to limit error in spelling for now.
// everything is done in the console right now as i learn DOM manipulation
// if the player enters anything besides 1,2, or 3 they wont affect their turns, it just asks them to enter once again.


let humanScore = 0
let computerScore = 0
// start of keeping track of score 0 - 0


let rules = (human, computer) =>{     
    human = playersInput()
    computer = getComputerChoice()
    console.log("Human Choice " + human)
    console.log("Computers choice " + computer)
    if(
        computer == "Paper" && human == "Rock" ||
        computer == "Rock" && human == "Scissors" ||
        computer == "Scissors" && human == "Paper" 
        ){
            computerScore++
            console.log("Computer score " + computerScore)
            console.log("Your Score " + humanScore)
            return "Round Lost!!"
        }
        //  line 36-45 is logic to show how the computer wins and get a point added to their total
        else if(
            human == computer
            ){
                console.log("Computer score " + computerScore)
                console.log("Your Score " + humanScore)
                return "Tie!!"
            }
            // Lines 48 - 53 shows how a match will result in a tie with neither sides getting any points
            else{
                humanScore++
                console.log("Computer score " + computerScore)
                console.log("Your Score " + humanScore)
                return "Round Won!!"
            }
            // lines 55-60 show an else statement resulting in the user winning and getting one point added to their total
} 



let play = () => {
for (let i = 0; i < 5; i++) {
    rules(i);
    if(humanScore == 3 || i == 4 && computerScore < humanScore){
        return "Game Over You Win!"
    }else if( computerScore == 3 || i == 4 && computerScore > humanScore ){
        return "Game Over You Lose!"
    }else if(i == 4 && computerScore == humanScore){
        return "You tied!!"
    }
    }}

// this function begins the game; 5 rounds and/or first to three or even the rare occasion of a tie!!
// really simple code but I wanted to get in the habit of commenting on my code in case someone else were to read it.