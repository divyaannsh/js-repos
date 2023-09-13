const body =document.querySelector('body')
console.log(body)
const button=document.querySelectorAll('.button')
console.log(button)

button.forEach(function(button){
    button.addEventListener('click',function(){
        if(button.id==='grey'){
            body.style.background='grey'
        }
        if(button.id==='white'){
            body.style.background='white'
        }
        if(button.id==='blue'){
            body.style.background='blue'
        }
        if(button.id==='yellow'){
            body.style.background='yellow'
        }
        
    })
})