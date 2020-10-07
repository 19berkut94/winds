'use strict'



const butn = document.querySelector('.btn')
const close = document.querySelector('.close')
const wind = document.querySelector('.butwind')



function Fenster(windElement) {
    butn.onclick = function() {modal.show()}
    close.onclick = function() {modal.hide()}
    

    this.show = function() {
        windElement.classList.add('appear')
       
    }
    this.hide = function() {
        windElement.classList.remove('appear')
    }
}

const modal = new Fenster(wind) 








const sentData = butsub.onclick = function(){
    let inputName = document.getElementById('name').value
    let inputMail = document.getElementById('mail').value
    let inputPass = document.getElementById('password').value
    
const user = {
    inputName,
    inputMail,
    inputPass,
}    

if(inputName === '' || inputMail === '' || inputPass === '') {
     console.log('be more attentive, dude!!!') 
     negativeWindow.appear() & modal.hide()
     
}

else {
    console.log(user)
    positiveWindow.appear() & modal.hide()
}
    


}

























































// const modal = new function() {

//     this.show = function() { 
//         butn.addEventListener('click', function() {
//             wind.classList.add('appear')
// })
//     },

//     this.hide = function() {
//         close.addEventListener('click', function() {
//             wind.classList.remove('appear')
            
//         })
//     }

// }

// modal.show();
// modal.hide();



// butsub.onclick = function() {
// let inputName = document.getElementById('name').value;
// let inputMail = document.getElementById('mail').value;
// let inputPass = document.getElementById('password').value;


// console.log(inputName, inputMail, inputPass) 
// }
