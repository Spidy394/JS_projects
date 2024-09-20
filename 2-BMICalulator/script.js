const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const message = document.querySelector('#message')
    let bmi

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please give a valid height"
    }
    if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight"
    }
    else{
        bmi = (weight / ((height*height)/10000)).toFixed(2);
        results.innerHTML = `<span>BMI = ${bmi}</span>`
    }

    if(bmi <= 18.6) {
        message.innerHTML = `<h3>Under Weight<\h3>`
    }
    else if ((18.6 < bmi) && (bmi < 24.9)) {
        message.innerHTML = `<h3>Normal<\h3>`
    }
    else {
        message.innerHTML = `<h3>Overweight<\h3>`
    }
})