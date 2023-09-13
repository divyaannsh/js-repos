const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    console.log(form)
    const height=parseInt(document.querySelector('#height').value)
    console.log(height)

    const weight=parseInt(document.getElementById('weight').value)
    console.log(weight)
    const result=document.querySelector('#results')

    if(height===''|| height<0|| isNaN(height)){
        result.innerHTML=`please give a valid height ${height}`

    }
    // result.innerHTML=`${height}`
    if(weight===''||weight<0|| isNaN(weight)){
        result.innerHTML=`Please enter your weight ${weight}`
    }
    // result.innerHTML=`${weight}`
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        result.innerHTML=`your bmi is: ${bmi}`
    }
})