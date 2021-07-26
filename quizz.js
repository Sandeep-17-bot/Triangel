const submit = document.querySelector("#submit")
const color1 = document.querySelector(".question1")
const color2 = document.querySelector(".question2")
const color3 = document.querySelector(".question3")
const color4 = document.querySelector(".question4")
const color5 = document.querySelector(".question5")
// const score = document.querySelector("#output")


submit.addEventListener('click',function(){

  
var score =0
   
 

var r1 = document.getElementById("radio1")
var r3 = document.getElementById("radio3")
var r5 = document.getElementById("radio5")
var r8 = document.getElementById("radio8")
var r12 = document.getElementById("radio12")
  
  // if(r1.checked=== true){
  //   check("green")
  //   score = score + 1
  //   document.getElementById("output").innerHTML = score
  // }else{ 
  //   uncheck("red")
  // }

  if(r3.checked=== true){
    check("green")
    score = score + 1
    document.getElementById("output").innerHTML = score
  }else{ 
    uncheck("red")
  }  
  if(r5.checked=== true){
    check("green")
    score = score + 1
    document.getElementById("output").innerHTML = score
  }else{ 
    uncheck("red")
  }  
  if(r8.checked=== true){
    check("green")
    score = score + 1
    document.getElementById("output").innerHTML = score
  }else{ 
    uncheck("red")
  } 
  if(r12.checked=== true){
    check("green")
    score = score + 1
    document.getElementById("output").innerHTML = score
  }else{ 
    uncheck("red")
  }





  function check(green){
    color1.style.backgroundColor = "green"
    color2.style.backgroundColor = "green"
    color3.style.backgroundColor = "green"
    color5.style.backgroundColor = "green"
    color5.style.backgroundColor = "green"
  }
  function uncheck(red){
    color1.style.backgroundColor = "red"
    color2.style.backgroundColor = "red"
    color3.style.backgroundColor = "red"
    color5.style.backgroundColor = "red"
    color5.style.backgroundColor = "red"
  


    
  if(r3.checked=== true){
    check("green")
    score = score + 1
    document.getElementById("output").innerHTML = score

    if(r5.checked=== true){
      check("green")
      score = score + 1
      document.getElementById("output").innerHTML = score
    }else{ 
      uncheck("red")
    }  
    if(r8.checked=== true){
      check("green")
      score = score + 1
      document.getElementById("output").innerHTML = score
    }else{ 
      uncheck("red")
    } 
    if(r12.checked=== true){
      check("green")
      score = score + 1
      document.getElementById("output").innerHTML = score
    }else{ 
      uncheck("red")
    }
  }else{ 
    uncheck("red")
  }  
}

})


