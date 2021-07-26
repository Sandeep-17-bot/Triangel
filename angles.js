const inputa = document.querySelector("#inputa")
const inputb = document.querySelector("#inputb")
const inputc = document.querySelector("#inputc")

const check = document.querySelector("#check")

check.addEventListener('click',function(){
    // console.log("clicked")
    let a = Number(inputa.value)
    let b = Number(inputb.value)
    let c = Number(inputc.value)
    
    d = a+b+c

    if(d===180){
        // error.style.display = "none"
        // output.style.display= "block"
        // document.getElementById("output").innerHTML = c,"great"
        showError("Great Man! That Makes an trianlge")

    }else{
        // output.style.display="none"
        // error.style.display= "block"
        // document.getElementById("error").innerHTML = "opps"
        showError("Sorry man we can't make with given data, try again")
    }

})
function showError(text){
    document.getElementById("output").innerHTML=text
}
