// const submit = document.querySelector("#submit")
const form = document.getElementById("form")
const ans = ["option1","option1","option1","option2","option3"]
const questions = document.querySelectorAll(".question")
const submit = document.querySelector("#submit")
const result = document.querySelector("#output")

form.addEventListener('submit',function(e){
  e.preventDefault()

  const data = new FormData(form);

let i = 0
let score = 0;


  for(let entry of data){
    if(entry[1]==ans[i]){
      questions[i].style.backgroundColor = "#00ffbf9d"
      score++
    }else{
      questions[i].style.backgroundColor = "#e35fbbb0"
    }
    i++
  }

  submit.style.display = "none"
output.innerText = score;

})
// var i = 0;
// for(i;i<5;i++){
//   console.log(ans[i])
// }
// console.log(questions[1].value)