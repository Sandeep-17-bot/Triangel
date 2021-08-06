const inputa = document.querySelector("#inputa")
const inputb = document.querySelector("#inputb")
const inputc = document.querySelector("#inputc")
const form = document.querySelector('#form')

const check = document.querySelector("#check")

form.addEventListener('submit',function(e){
    e.preventDefault()
    // console.log("clicked")
    let a = Number(inputa.value)
;    let b = Number(inputb.value)
    let c = Number(inputc.value)
    
    d = a+b+c

    if(d===180){
       
        showError("Great Man! That Makes  triangle")

    }else{
        
        showError("Sorry man we can't make triangle with given data, try with another angles")
    }

})
function showError(text){
    document.getElementById("output").innerHTML=text
}
