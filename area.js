
const radio1 = document.querySelector("#radio1")
const base = document.querySelector("#base")
const form1 = document.querySelector('#form1')

// This is area section if you have base and height
const inputa = document.querySelector("#input1");
const inputb = document.querySelector("#input2");
const outputs = document.querySelector("#output")


radio1.addEventListener('click',function(){
base.style.display= "block"
height.style.display="none";
})


form1.addEventListener('submit',(e)=> {
    e.preventDefault();
let avalue = Number(inputa.value)
let bvalue = Number(inputb.value)
console.log(avalue,bvalue)

var c = 1/2 *(avalue*bvalue)

// below line is to display output on  Screen
document.getElementById("output").innerHTML = c
})
//__________________________________________________________

// s=(a+b+c)/2

// area = squareroot of [s(s-a)(s-b)(s-c)]

const radio2 = document.querySelector("#radio2")
const input3 = document.querySelector("#input3")
const input4 = document.querySelector("#input4")
const input5 = document.querySelector("#input5")
// const check = document.querySelector("#calculate2")
const error = document.querySelector("#error")
const form2 = document.querySelector("#form2")

radio2.addEventListener('click',function(){
    base.style.display = "none";
    height.style.display = "block"
})

form2.addEventListener('submit', function(e){
    e.preventDefault();
    let a= Number(input3.value)
    let b = Number(input4.value)
    let c = Number(input5.value)
  if((a+b)>c && (b+c)>a && (a+c)>b){
    var s = (a+b+c)/2
    // console.log(s)
    var area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
    document.getElementById("output2").innerHTML = area
    error.style.display = "none"
    output2.style.display= "block"
    output.style.display="none"
    
}else{
    error.style.display = "block"
    output2.style.display= "none"
    output.style.display= "none"
    document.getElementById("error").innerHTML = "The sum of two numbers shold be greater than third number"
}
})
