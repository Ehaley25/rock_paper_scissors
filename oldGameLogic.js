// let x = ["Rock","Paper","Scissors"];
// let getComputerChoice = () => {return x[Math.floor(Math.random() * x.length)]}
// This is how i generated the "AIs" choice ^ just math.random to the length of the array
// first I did an if else statement and realized i can save some lines doing this





// let playersInput = () => {
// let input 
//     if(input == 'rock'){
//         return "Rock"
//     }
//     else if(input == 'paper'){
//         return "Paper"
//     }
//     else if(input == 'scissors'){
//         return "Scissors"
//     }
// }
// made a function that allows players to input their decision using prompt and numbers to limit error in spelling for now.
// everything is done in the console right now as i learn DOM manipulation
// if the player enters anything besides 1,2, or 3 they wont affect their turns, it just asks them to enter once again.


// let rules = (human, computer) =>{ 
//     human = playerChoice
//     computer = getComputerChoice()
//     console.log("Human Choice " + human)
//     console.log("Computers choice " + computer)
//     if(
//         computer == "Paper" && human == "rock" ||
//         computer == "Rock" && human == "scissors" ||
//         computer == "Scissors" && human == "paper" 
//         ){
//             computerScore++
//             gameLine++
//             console.log("Computer score " + computerScore)
//             console.log("Your Score " + humanScore)
//             console.log(gameLine)
//             return "Round Lost!!"
//         }
//         //  line 36-45 is logic to show how the computer wins and get a point added to their total
//         else if(
//             human == computer
//             ){
//                 console.log("Computer score " + computerScore)
//                 console.log("Your Score " + humanScore)
//                 console.log(gameLine)
//                 return "Tie!!"
//             }
//             // Lines 48 - 53 shows how a match will result in a tie with neither sides getting any points
//             else{
//                 humanScore++
//                 gameLine++
//                 console.log("Computer score " + computerScore)
//                 console.log("Your Score " + humanScore)
//                 console.log(gameLine)
//                 return "Round Won!!"
//             }
//             // lines 55-60 show an else statement resulting in the user winning and getting one point added to their total
// } 


    // let play = () => {
    //     for (let i = 0; i < 5; i++) {
    //         rules(i);
    //         if(humanScore == 3 || i == 4 && computerScore < humanScore){
    //             return "Game Over You Win!"
    //         }else if( computerScore == 3 || i == 4 && computerScore > humanScore ){
    //             return "Game Over You Lose!"
    //         }else if(i == 4 && computerScore == humanScore){
    //             return "You tied!!"
    //         }
    //         }}

// this function begins the game; 5 rounds and/or first to three or even the rare occasion of a tie!!
// really simple code but I wanted to get in the habit of commenting on my code in case someone else were to read it.