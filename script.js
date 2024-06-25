let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#mess-box");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

    //rock,paper,scissor


}

const drawGame=()=>{
    
    msg.innerText="Game is draw.please play again";
    msg.style.backgroundColor="#081b31";



}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you win your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`you lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";


    }
}
const playGame=(userChoice)=>{
    console.log("userChoice is ",userChoice);
    //generate comp choice ->modular
    const compChoice=genCompChoice();
    console.log("compChoice is ",compChoice);

    if(userChoice==compChoice){
        //DrawGame
        drawGame();

    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper,scissor
            userWin=compChoice==="paper"?false :true;
        }else if(userChoice==="paper"){
            //rock,scissor
            userWin=compChoice==="rock"?true:false;
        }else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);



    }



}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
       
        playGame(userChoice);
    });

});
