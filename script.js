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
    let randomNumber=Math.floor(Math.random()*3);
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
}

resetButton.addEventListener("click",function(){
    pcScore=0;
    playerScore=0;
    round=0;
    document.getElementById("score").innerHTML="Computer = "+pcScore+" - "+playerScore+" = Player";
    document.getElementById("computer").innerHTML="";
    document.getElementById("game").innerHTML="";
    document.getElementById("player").innerHTML="";


})