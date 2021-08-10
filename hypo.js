const inputa = document.querySelector("#inputa")
const inputb = document.querySelector("#inputb")
const check = document.querySelector("#check")
const form = document.querySelector("#form")

form.addEventListener('submit',function(e){
    e.preventDefault();
    // console.log("clicked")
    let aValue = Number(inputa.value)
    let bValue = Number(inputb.value)
    
    let aValue1 = Math.pow(aValue,2)
    let bValue2 = Math.pow(bValue,2)

    c =Math.sqrt( aValue1+bValue2)

    if(aValue>0 && bValue>0){
        error.style.display = "none"
        output.style.display="block"
        document.getElementById("output").innerHTML = c.toPrecision(5)
    }else{
        output.style.display= "none"
        error.style.display= 'block'
        document.getElementById("error").innerHTML = "Enter the valid base and height"
    }


})