function toggleSidebar() {
    document.getElementById('sideBar').classList.toggle('active');
}
panel=document.getElementById('panel');
for(let m=0;m<numInQuestionBank;m++) {
    panel.innerHTML+="<li id=option"+m+" onclick='toggle("+m+")'>Question. "+(m+1)+"</li>";
}
function toggle(n) {
    document.getElementsByClassName("inside")[0].classList.remove('trans');
    questionSet[n].showQuestion(n);
}

function displayScore() {
    element=document.getElementById("sideBar");
    element.parentNode.removeChild(element);
    element=document.getElementsByClassName("question-card")[0];
    element.parentNode.removeChild(element);
    element=document.getElementsByClassName("btn")[0];
    element.parentNode.removeChild(element);
    element=document.getElementsByClassName("content")[0];
    
    var highScore=JSON.parse(localStorage.getItem("score"))?JSON.parse(localStorage.getItem("score")):{playerScore: 0};
    console.log(highScore);
    if(score>highScore.playerScore) {
        var player={
        namePlayer:name,
        dateTime: Date.now(),
        playerScore:score
        };
        localStorage.setItem("score", JSON.stringify(player));
    }
    element.innerHTML=name+" scored " + score+"<br> High Score: "+highScore.playerScore;
}