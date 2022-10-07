let playerChoice;

let humanScore = 0
let computerScore = 0


let displayHumanScore = document.querySelector("#humanScore")
displayHumanScore.innerText = ("Score: 0")

let displayComputerScore = document.querySelector("#computerScore")
displayComputerScore.innerText = ("Score: 0")

let results = document.querySelector("#results")
results.innerText = ("")

let x = ["Rock","Paper","Scissors"];
let getComputerChoice = () => {return x[Math.floor(Math.random() * x.length)]}

const choices = document.querySelectorAll('.pChoices');
choices.forEach((choice) => { choice.addEventListener('click',() => {
        playerChoice = choice.id;
        getComputerChoice()
        play()
        })
    })    

let rules = (human, computer) =>{ 
    human = playerChoice
    computer = getComputerChoice()
    console.log("Human Choice " + human)
    console.log("Computers choice " + computer)
    if(
        computer == "Paper" && human == "Rock" ||
        computer == "Rock" && human == "Scissors" ||
        computer == "Scissors" && human == "Paper" 
        ){
            computerScore++
            displayComputerScore.innerHTML = "Score: " + `${computerScore}`
            results.innerText = (`${computer} beats ` + `${human}. ` + "You Lose!!")
            console.log("Computer score " + computerScore)
            console.log("Your Score " + humanScore)
            return "Round Lost!!"
        }
        //  line 36-45 is logic to show how the computer wins and get a point added to their total
        else if(
            human == computer
            ){
                results.innerText = ("Tie!!!")
                console.log("Computer score " + computerScore)
                console.log("Your Score " + humanScore)
                return "Tie!!"
            }
            // Lines 48 - 53 shows how a match will result in a tie with neither sides getting any points
            else{
                humanScore++
                displayHumanScore.innerHTML = "Score: " + `${humanScore}`
                results.innerText = (`${human} beats ` + `${computer}. ` + "You Win!!")
                console.log("Computer score " + computerScore)
                console.log("Your Score " + humanScore)
                return "Round Won!!"
            }
            // lines 55-60 show an else statement resulting in the user winning and getting one point added to their total
} 

let resetScore = () =>{
    humanScore = 0,
    computerScore = 0,
    displayHumanScore.innerText = "Score: 0", 
    displayComputerScore.innerText = "Score: 0",
    results.innerText = ("")
}

let playAgain = () =>{
    const container = document.querySelector('#container');
    const resetButton = document.createElement('button');
    resetButton.classList.add('resetButton');
    resetButton.textContent = 'Play Again?';
    container.appendChild(resetButton);
    resetButton.addEventListener('click', () =>{
        resetScore(),  resetButton.remove()
    });
}

let play = () => {
    rules();
    if(humanScore == 5){
        playAgain()
        console.log("Game Over You Win!")
    }else if( computerScore == 5){
        playAgain()
        console.log( "Game Over You Lose!")
    }
    }