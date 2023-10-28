let gameSeq=[];
let userSeq=[];

let btns=["red","yellow","green","blue"];

let started=false;
let level = 0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game started");
    started=true;

    lvlUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500);
}

function lvlUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let ran = Math.floor(Math.random() *3);
    let randColor= btns[ran];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function check(idx){
        if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(lvlUp,500)
        }
    }else{
        h2.innerHTML=`Game Over: Your Score was <b>${level}</b> <br>Press Any Key to Start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    check(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}