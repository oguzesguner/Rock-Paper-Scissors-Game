document.addEventListener("DOMContentLoaded", function() {
const rockButton=document.querySelector("#rockb");
const paperButton=document.querySelector("#paperb");
const scissorButton=document.querySelector("#scissorb");
const resetButton=document.querySelector("#resetButton");
let pcScore=0;
let playerScore=0;
let round=0;
//
//

let playerDecision;
    rockButton.addEventListener("click",function(){
        document.getElementById("player").innerHTML=document.getElementById("player").innerHTML+"Rock"+"</br>";
        playerDecision="rock";
        game(pcSelect(),playerDecision); 
    });
    paperButton.addEventListener("click",function(){
        document.getElementById("player").innerHTML=document.getElementById("player").innerHTML+"Paper"+"</br>";
        playerDecision="paper";
        game(pcSelect(),playerDecision); 
    });
    scissorButton.addEventListener("click",function(){
        document.getElementById("player").innerHTML=document.getElementById("player").innerHTML+"Scissors"+"</br>";
        playerDecision="scissor";
        game(pcSelect(),playerDecision); 
    });
function pcSelect(){
    let pcDecision;
    let options=["rock","paper","scissors"]
    let randomNumber=rNumber(3);
    if(options[randomNumber]==="rock")
    {
        pcDecision="rock";
        document.getElementById("computer").innerHTML=document.getElementById("computer").innerHTML+"Rock"+"</br>"
    }
    else if(options[randomNumber]==="paper")
    {
        pcDecision="paper";
        document.getElementById("computer").innerHTML=document.getElementById("computer").innerHTML+"Paper"+"</br>"
    }
    else
    {
        pcDecision="scissor";
        document.getElementById("computer").innerHTML=document.getElementById("computer").innerHTML+"Scissors"+"</br>"
    }
    return pcDecision;
}


function game(comp,player){
    round+=1;
    document.getElementById("roundCount").innerHTML="Round "+round;
    if((comp=="rock" && player=="rock")||(comp=="paper" && player=="paper")||(comp=="scissor" && player=="scissor"))
    {
        document.getElementById("game").innerHTML=document.getElementById("game").innerHTML+"It's a tie!"+"</br>";
    }
    else if((comp=="rock" && player=="scissor")||(comp=="paper" && player=="rock")||(comp=="scissor" && player=="paper"))
    {
        document.getElementById("game").innerHTML=document.getElementById("game").innerHTML+"Computer Wins!"+"</br>";
        pcScore+=1;
        document.getElementById("score").innerHTML="Computer = "+pcScore+" - "+playerScore+" = Player";
    }
    else
    {
        document.getElementById("game").innerHTML=document.getElementById("game").innerHTML+"Player Wins!"+"</br>";
        playerScore+=1;
        document.getElementById("score").innerHTML="Computer = "+pcScore+" - "+playerScore+" = Player";
    }
    roundCheck();
    return playerScore,pcScore,round;
}

resetButton.addEventListener("click",function(){
    pcScore=0;
    playerScore=0;
    round=0;
    document.getElementById("score").innerHTML="Computer = "+pcScore+" - "+playerScore+" = Player";
    document.getElementById("computer").innerHTML="";
    document.getElementById("game").innerHTML="";
    document.getElementById("player").innerHTML="";
    document.getElementById("roundCount").innerHTML="Round "+round;
    rockButton.disabled=false;
    paperButton.disabled=false;
    scissorButton.disabled=false;
})
function roundCheck(){
    if(playerScore==5 && pcScore<5)
{
        document.getElementById("game").innerHTML=document.getElementById("game").innerHTML+"Game Over!</br>You Won!!!"
        rockButton.disabled=true;
        paperButton.disabled=true;
        scissorButton.disabled=true;
        document.getElementById("message").innerHTML="Congratulations! You've beaten the computer "+playerScore+" to "+pcScore+" Well done!!</br> Press the button to play again!!"
}
    else if(pcScore==5 && playerScore<5)
{
        document.getElementById("game").innerHTML=document.getElementById("game").innerHTML+"Game Over!</br>The Computer Won!!!"
        rockButton.disabled=true;
        paperButton.disabled=true;
        scissorButton.disabled=true;
        document.getElementById("message").innerHTML="Better luck next time! The computer has emerged victorious with a score of "+pcScore+" to "+playerScore+"</br> Press the button to play again!!"

}
else if(playerScore>pcScore)
{
    let winning=
    ["Congratulations! You're making excellent progress towards victory!",
    "You're really dominating the game - keep it up!",
    "You're on fire! Your moves are unstoppable"];
    document.getElementById("message").innerHTML=winning[rNumber(winning.length)];
}
else if(pcScore>playerScore)
    {
        let losing=[
        "Don't worry, you can still make a comeback!",
        "Things might be looking tough now, but remember: it's not over until it's over.",
        "Sometimes you lose, but that's okay - it's all part of the game. Just keep trying!"];
        document.getElementById("message").innerHTML=losing[rNumber(losing.length)]   
    }

} 

function rNumber(max)
{
    return Math.floor(Math.random()*max);
}

});
