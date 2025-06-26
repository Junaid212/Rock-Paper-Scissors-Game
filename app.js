let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genCompChoice =() => {
    const options=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};

const drawGame =()=>{
    console.log("game draw");
    msg.innerText="Game draw. Play Again";
    msg.style.backgroundColor = " rgb(21, 21, 58)";
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText="You Win!";
        msg.style.backgroundColor = "green";
    }else {
         compScore++;
        compScorePara.innerText = compScore;
        msg.innerText="You lost.";
        msg.style.backgroundColor = "red";
    }
};

const playGame=(userChoice)=>{
    console.log("user choice = ",userChoice);
    // generate computer choice
    const compChoice=genCompChoice();
    console.log("computer choice = ",compChoice);

    if(userChoice === compChoice) {
        // draw game
        drawGame();
    } else {
        let userWin=true;
        if(userChoice === "rock") {
            // scissor,paper
           userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock, paper
             userWin = compChoice === "scissor" ? false : true;
        } else {
            // rock, paper
             userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>
    {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});