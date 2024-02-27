let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissiors = document.querySelector("#scissors");
let btn = document.querySelectorAll(".btn");

let myCount = document.querySelector("#myCount");
let computerCount = document.querySelector("#computerCount");

let text = document.querySelector(".text");
let reset = document.querySelector("#reset");
let computerVote;
let myVote;
let resultString;
let countMy = 0;
let countComputer = 0;

//Collecting the vote of computer 
function computerVotes(){
    let index = Math.floor(Math.random() * 10) % 3;
console.log("index = "+ index);
    switch(index){
        case 0:
            computerVote = "Rock";
            break;
        
        case 1:
            computerVote = "Paper";
            break;
        
        case 2:
            computerVote = "Scissors";
            break;
    }
    console.log("index is " + index);
}

btn.forEach(btn => btn.addEventListener("click", ()=>{
    myVote = btn.innerText;
    computerVotes();
    // if(myVote == computerVote){
    //     resultString = "Game is Draw !";
    // }
     if(myVote == "Rock"){
        if(computerVote == "Scissors"){
            resultString = "You are winner !";
            countMy++;
        }
        else{
            resultString = " Computer is winner !";
            countComputer++;
        }
    }
    else if(myVote == "Scissors"){
        if(computerVote == "Paper"){
            resultString = "You are winner !";
            countMy++;
        }
        else{
            resultString = " Computer is winner !";
            countComputer++;
        }
    }
    else{
        if(computerVote == "Rock"){
            resultString = "You are winner !";
            countMy++;
        }
        else{
            resultString = " Computer is winner !";
            countComputer++;
        }
    }

    myCount.innerText = " Your's : " + countMy;
    computerCount.innerText = " Computer's : " + countComputer;

    text.innerText = resultString;

}));
reset.addEventListener("click" , () => {
    location.reload();});


