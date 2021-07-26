const quizform = document.forms[0]
const queDivs  =document.querySelectorAll(".ow")
const submitQuiz = document.querySelector("#submitquiz")
const scoreDiv = document.querySelector(".scoreHere")

const options = ["option1","option2"]
let score = 0

quizform.addEventListener('submit',function(e){
   e.preventDefault();
    const data = new FormData(quizform);
    let i = 0
    for(let entry of data){
if(entry[1] == options[i]){
    queDivs[i].style.backgroundColor = "lightgreen"
    score++
}else{
    queDivs[i].style.backgroundColor = "pink";
}
    }
    scoreDiv.innerText = score
        // submitQuiz.style.display = "none"
    
})

// after so much of trying to do same assignment given

// i watched code and there is so much of content in this assignment 

// i understood the code and learned so much from it