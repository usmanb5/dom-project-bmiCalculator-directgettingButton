let form = document.querySelector("form")
let button = document.querySelector("button")
button.addEventListener('click', function(e){
  e.preventDefault();
  console.log(e)
  console.log(e.target)
  let height = parseInt(document.getElementById("height").value);
   let weight = parseInt(document.getElementById("weight").value);
   let result = document.getElementById("result");
    if(height === ' ' || height < 0 || isNaN(height)){ result.innerHTML = "please give your valid height"
   } else if (weight === ' ' || weight < 0 || isNaN(weight)){
    result.innerHTML = "please give your valid weight"
   } else {
     let bmi = (weight / ((height*height)/10000)).toFixed(2)
     if(bmi < 18.6){
      result.innerHTML = `this person is Under Weight ${bmi}`
     } else if (bmi > 18.6 && bmi < 24.9){
      result.innerHTML = `this person is in Normal Range ${bmi}`
     } else {
      result.innerHTML = `this person is Overweight ${bmi}`
    }
   }
  
  })